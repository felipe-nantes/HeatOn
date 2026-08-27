# -*- coding: utf-8 -*-
"""
Regenera os masters de logo da Heat On como vetores limpos.

Motivo: os SVGs do handoff continham letterforms autotraçados de um raster de
baixa resolução (bordas serrilhadas). Este script reconstrói o wordmark com os
contornos reais da Manrope (fonte display da marca) e recompõe os lockups
reaproveitando o símbolo (onda + node) já vetorial.

Saída (public/assets/brand/): wordmark-color/deep, logo-horizontal-color/
cream/deep/orange, logo-scientific-signature.
"""

import re
from pathlib import Path

from fontTools.misc.transform import Transform
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[1]
FONTS = ROOT / "public" / "fonts"
BRAND = ROOT / "public" / "assets" / "brand"

CREAM = "#FFF4E6"
DEEP = "#0E0E10"
ORANGE = "#FF6A1A"

THERMAL_STOPS = [
    ("0%", "#FF5C3A"),
    ("28%", "#FF6A1A"),
    ("58%", "#FFB347"),
    ("84%", "#FFF0C8"),
    ("100%", "#FFF4E6"),
]

WORDMARK_WEIGHT = 600
TRACKING = -14  # unidades de fonte entre glifos (aperto editorial leve)


def load_instanced(path: Path, weight: int | None) -> TTFont:
    font = TTFont(path)
    if weight is not None and "fvar" in font:
        instantiateVariableFont(font, {"wght": weight}, inplace=True)
    return font


def text_paths(font: TTFont, text: str, tracking: int = 0):
    """Retorna [(char, path_d, advance_usado)] com baseline em y=0 (y invertido p/ SVG)."""
    cmap = font.getBestCmap()
    glyph_set = font.getGlyphSet()
    out = []
    x = 0.0
    for ch in text:
        if ch == " ":
            x += glyph_set[cmap[ord("n")]].width * 0.6 + tracking
            out.append((ch, None, 0))
            continue
        gname = cmap[ord(ch)]
        glyph = glyph_set[gname]
        spen = SVGPathPen(glyph_set)
        glyph.draw(TransformPen(spen, Transform(1, 0, 0, -1, x, 0)))
        out.append((ch, spen.getCommands(), glyph.width))
        x += glyph.width + tracking
    return out


def text_bounds(font: TTFont, text: str, tracking: int = 0):
    cmap = font.getBestCmap()
    glyph_set = font.getGlyphSet()
    xmin = ymin = float("inf")
    xmax = ymax = float("-inf")
    x = 0.0
    for ch in text:
        if ch == " ":
            x += glyph_set[cmap[ord("n")]].width * 0.6 + tracking
            continue
        gname = cmap[ord(ch)]
        glyph = glyph_set[gname]
        bpen = BoundsPen(glyph_set)
        glyph.draw(TransformPen(bpen, Transform(1, 0, 0, -1, x, 0)))
        if bpen.bounds:
            bx0, by0, bx1, by1 = bpen.bounds
            xmin, ymin = min(xmin, bx0), min(ymin, by0)
            xmax, ymax = max(xmax, bx1), max(ymax, by1)
        x += glyph.width + tracking
    return xmin, ymin, xmax, ymax


def fmt(v: float) -> str:
    return f"{v:.4f}".rstrip("0").rstrip(".")


def svg_doc(width, height, body, label):
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{fmt(width)}" height="{fmt(height)}" '
        f'viewBox="0 0 {fmt(width)} {fmt(height)}" role="img" aria-label="{label}">\n'
        f"{body}\n</svg>\n"
    )


def thermal_defs(gid: str) -> str:
    stops = "".join(
        f'<stop offset="{off}" stop-color="{color}"/>' for off, color in THERMAL_STOPS
    )
    return f'<defs><linearGradient id="{gid}" x1="0" y1="0" x2="1" y2="0">{stops}</linearGradient></defs>'


# ---------------------------------------------------------------- wordmark
manrope = load_instanced(FONTS / "manrope-latin-wght-normal.woff2", WORDMARK_WEIGHT)
WORD = "HeatOn"
paths = text_paths(manrope, WORD, TRACKING)
bx0, by0, bx1, by1 = text_bounds(manrope, WORD, TRACKING)
PAD = 6.0
W_W = (bx1 - bx0) + 2 * PAD
W_H = (by1 - by0) + 2 * PAD
DX, DY = -bx0 + PAD, -by0 + PAD

CAP = -text_bounds(manrope, "H")[1]  # altura de caixa alta (por bounds do H)


def wordmark_group(color_heat: str, color_on: str, dx: float, dy: float) -> str:
    parts = [f'<g transform="translate({fmt(dx)} {fmt(dy)})">']
    for i, (_ch, d, _adv) in enumerate(paths):
        if d is None:
            continue
        fill = color_heat if i < 4 else color_on
        parts.append(f'<path d="{d}" fill="{fill}"/>')
    parts.append("</g>")
    return "".join(parts)


def write(name: str, content: str) -> None:
    (BRAND / name).write_text(content, encoding="utf-8")
    print(f"{name}: ok")


write(
    "wordmark-color.svg",
    svg_doc(W_W, W_H, wordmark_group(CREAM, ORANGE, DX, DY), "HeatOn wordmark color"),
)
write(
    "wordmark-deep.svg",
    svg_doc(W_W, W_H, wordmark_group(DEEP, DEEP, DX, DY), "HeatOn wordmark deep"),
)
# Branco puro para o efeito de inversão do hero (mix-blend-mode: difference)
write(
    "wordmark-white.svg",
    svg_doc(W_W, W_H, wordmark_group("#FFFFFF", "#FFFFFF", DX, DY), "HeatOn wordmark white"),
)

# ------------------------------------------------- wordmark mono (hero)
# Variante em IBM Plex Mono — mesma voz tipográfica dos metadados técnicos
# (PAGE / SECTION). Usada apenas no wordmark monumental do hero.
plex_wm = load_instanced(FONTS / "ibm-plex-mono-latin-500-normal.woff2", None)
MONO_TRACK = -20
mono_paths = text_paths(plex_wm, WORD, MONO_TRACK)
mx0, my0, mx1, my1 = text_bounds(plex_wm, WORD, MONO_TRACK)
M_W = (mx1 - mx0) + 2 * PAD
M_H = (my1 - my0) + 2 * PAD


def mono_wordmark_group(color_heat: str, color_on: str) -> str:
    parts = [f'<g transform="translate({fmt(-mx0 + PAD)} {fmt(-my0 + PAD)})">']
    for i, (_ch, d, _adv) in enumerate(mono_paths):
        if d is None:
            continue
        parts.append(f'<path d="{d}" fill="{color_heat if i < 4 else color_on}"/>')
    parts.append("</g>")
    return "".join(parts)


write(
    "wordmark-white-mono.svg",
    svg_doc(M_W, M_H, mono_wordmark_group("#FFFFFF", "#FFFFFF"), "HeatOn wordmark mono white"),
)
write(
    "wordmark-color-mono.svg",
    svg_doc(M_W, M_H, mono_wordmark_group(CREAM, ORANGE), "HeatOn wordmark mono color"),
)

# ---------------------------------------------------------------- símbolo (reuso do master vetorial)
symbol_src = (BRAND / "symbol-cream.svg").read_text(encoding="utf-8")
SYMBOL_DS = re.findall(r'<path[^>]*d="([^"]+)"', symbol_src)
assert len(SYMBOL_DS) == 2, "esperava onda + node no symbol-cream.svg"
# bounds do conteúdo do símbolo (onda + node), medidos do master
SB = (166.0, 174.0, 821.0, 525.0)
SB_W, SB_H = SB[2] - SB[0], SB[3] - SB[1]


def symbol_group(fill: str, scale: float, dx: float, dy: float) -> str:
    tf = f"translate({fmt(dx)} {fmt(dy)}) scale({fmt(scale)}) translate({fmt(-SB[0])} {fmt(-SB[1])})"
    ps = "".join(
        f'<path d="{d}" fill="{fill}" fill-rule="evenodd"/>' for d in SYMBOL_DS
    )
    return f'<g transform="{tf}">{ps}</g>'


# Símbolo isolado em branco puro, para a inversão do hero (difference).
write(
    "symbol-white.svg",
    svg_doc(
        SB_W + 2 * PAD,
        SB_H + 2 * PAD,
        symbol_group("#FFFFFF", 1.0, PAD, PAD),
        "HeatOn symbol white",
    ),
)

# ---------------------------------------------------------------- lockups horizontais
SYM_H = CAP * 1.32          # altura do símbolo relativa à caixa alta
GAP = CAP * 0.34            # respiro símbolo -> wordmark
S_SCALE = SYM_H / SB_H
SYM_W = SB_W * S_SCALE

L_W = SYM_W + GAP + (bx1 - bx0) + 2 * PAD
L_H = max(SYM_H, by1 - by0) + 2 * PAD
# baseline do texto: centraliza caixa alta na altura do símbolo
text_dy = PAD + SYM_H / 2 + CAP / 2
sym_dy = PAD
text_dx = PAD + SYM_W + GAP - bx0


def lockup(symbol_fill: str, heat: str, on: str, label: str, defs: str = "") -> str:
    body = (
        defs
        + symbol_group(symbol_fill, S_SCALE, PAD, sym_dy)
        + wordmark_group(heat, on, text_dx, text_dy)
    )
    return svg_doc(L_W, L_H, body, label)


write(
    "logo-horizontal-color.svg",
    lockup("url(#heatonThermal)", CREAM, ORANGE, "HeatOn logo", thermal_defs("heatonThermal")),
)
write("logo-horizontal-cream.svg", lockup(CREAM, CREAM, CREAM, "HeatOn logo cream"))
write("logo-horizontal-deep.svg", lockup(DEEP, DEEP, DEEP, "HeatOn logo deep"))
write("logo-horizontal-orange.svg", lockup(ORANGE, ORANGE, ORANGE, "HeatOn logo orange"))

# ---------------------------------------------------------------- assinatura científica
plex = load_instanced(FONTS / "ibm-plex-mono-latin-400-normal.woff2", None)
TAGLINE = "SCIENTIFIC INTELLIGENCE IN MOTION"
TAG_TRACK = 170  # ~0.17em de tracking em caps mono
tag_paths = text_paths(plex, TAGLINE, TAG_TRACK)
tx0, ty0, tx1, ty1 = text_bounds(plex, TAGLINE, TAG_TRACK)
tag_w_raw = tx1 - tx0
lock_content_w = L_W - 2 * PAD
tag_scale = lock_content_w / tag_w_raw
tag_h = (ty1 - ty0) * tag_scale
tag_gap = CAP * 0.52

SIG_W = L_W
SIG_H = L_H + tag_gap + tag_h + PAD

tag_parts = [
    f'<g transform="translate({fmt(PAD - tx0 * tag_scale)} {fmt(L_H + tag_gap - ty0 * tag_scale)}) scale({fmt(tag_scale)})">'
]
for _ch, d, _adv in tag_paths:
    if d is None:
        continue
    tag_parts.append(f'<path d="{d}" fill="{CREAM}"/>')
tag_parts.append("</g>")

sig_body = (
    thermal_defs("heatonThermalSig")
    + symbol_group("url(#heatonThermalSig)", S_SCALE, PAD, sym_dy)
    + wordmark_group(CREAM, ORANGE, text_dx, text_dy)
    + "".join(tag_parts)
)
write(
    "logo-scientific-signature.svg",
    svg_doc(SIG_W, SIG_H, sig_body, "HeatOn — Scientific Intelligence in Motion"),
)

print("--- proporções ---")
print(f"wordmark: {fmt(W_W)} x {fmt(W_H)}  (ratio {W_W / W_H:.3f})")
print(f"lockup:   {fmt(L_W)} x {fmt(L_H)}  (ratio {L_W / L_H:.3f})")
print(f"signature:{fmt(SIG_W)} x {fmt(SIG_H)}  (ratio {SIG_W / SIG_H:.3f})")
print(f"cap height: {fmt(CAP)}")
