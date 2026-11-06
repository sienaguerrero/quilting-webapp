# Quilt block clay cutters

Cutter counts per block, for the default 75 mm block. Every size scales with `block`.

| Block | Cutters (count per block) |
|---|---|
| Half-square triangles (2x2) | hst-half x8 |
| Pinwheel | hst-half x8 |
| Flying geese | goose-full x2, hst-half x4 |
| Ohio star | square-third x5, qst-third x16 |
| Log cabin (2 rounds) | square-third x1, log0 x1, log1 x2, log2 x2, log3 x2, log4 x1 |
| Four patch | square-half x4 |
| Nine patch | square-third x9 |
| Rail fence | rail-third x3 |
| Churn dash | square-third x1, hst-third x8, bar-third x8 |
| Friendship star | square-third x5, hst-third x8 |
| Shoofly | square-third x5, hst-third x8 |
| Sawtooth star | square-half x1, square-quarter x4, goose-half x4, hst-quarter x8 |
| Snowball | snowball x1, hst-third x4 |
| Drunkard's path (2x2) | path-pie x4, path-bite x4 |
| Orange peel (2x2) | peel-lens x4, peel-corner x8 |
| LeMoyne star | lemoyne-diamond x8, lemoyne-square x4, lemoyne-triangle x4 |
| Dresden plate | dresden-blade x20, dresden-center x1 |
| Grandmother's flower garden | hexagon, 7 per rosette |
| Tumbling blocks | diamond-60, 3 per cube |
| Thousand pyramids | triangle-60, tessellates |
| Clamshell | clamshell, tessellates |

Hexagon, diamond-60, and triangle-60 share `hex_side`, so they mix in one layout.

## Export

```bash
./export.sh            # 75 mm blocks, 2 log cabin rounds
./export.sh 100 3      # 100 mm blocks, 3 rounds
```
