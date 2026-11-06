piece = "all";
part = "cutter"; // [cutter, pusher]

block = 75;
log_rounds = 2;
hex_side = block / 4;
path_radius_ratio = 2 / 3;
dresden_blades = 20;

cut_height = 15;
blade_height = 6;
blade_wall = 0.8;
body_wall = 1.6;
flange_width = 4;
flange_thickness = 2;

pusher_clearance = 0.6;
pusher_plate = 3;
pusher_knob = 10;

arc_steps = 48;
$fn = 48;

half = block / 2;
third = block / 3;
quarter = block / 4;
log_w = block / (2 + 2 * log_rounds);
log_center = 2 * log_w;
star_d = block / (2 + sqrt(2));
path_r = half * path_radius_ratio;
shell_r = block / 4;
dresden_hub = block / 6;

O = [0, 0];

function arc(c, r, a0, a1) = [for (i = [0 : arc_steps - 1]) let(a = a0 + (a1 - a0) * i / arc_steps) c + r * [cos(a), sin(a)]];
function rect(w, h) = [[0, 0], [w, 0], [w, h], [0, h]];
function rtri(leg) = [[0, 0], [leg, 0], [0, leg]];
function iso(base) = [[0, 0], [base, 0], [base / 2, base / 2]];
function rhombus(s, a) = [[0, 0], [s, 0], [s + s * cos(a), s * sin(a)], [s * cos(a), s * sin(a)]];
function ngon(n, s) = let(R = s / (2 * sin(180 / n))) [for (i = [0 : n - 1]) R * [cos(90 + 360 * i / n), sin(90 + 360 * i / n)]];
function clipped(s, c) = [[c, 0], [s - c, 0], [s, c], [s, s - c], [s - c, s], [c, s], [0, s - c], [0, c]];

function incircle(P) =
    let(a = norm(P[2] - P[1]), b = norm(P[2] - P[0]), c = norm(P[1] - P[0]),
        s = a + b + c, area = abs(cross(P[1] - P[0], P[2] - P[0])) / 2)
    [(a * P[0] + b * P[1] + c * P[2]) / s, 2 * area / s];

function e_rect(name, w, h) = [name, rect(w, h), [[w / 2, h / 2], min(w, h) / 2]];
function e_tri(name, P) = [name, P, incircle(P)];
function e_rhombus(name, s, a) = let(P = rhombus(s, a)) [name, P, [(P[0] + P[2]) / 2, s * sin(a) / 2]];

function e_pie(name, r) = let(k = r / (1 + sqrt(2)))
    [name, concat([O], arc(O, r, 0, 90), [[0, r]]), [[k, k], k]];

function e_bite(name, c, r) = let(t = (sqrt(2) * c - r) / (1 + sqrt(2)))
    [name, r < c ? concat([[c, 0], [c, c], [0, c]], arc(O, r, 90, 0), [[r, 0]])
                 : concat([[c, c]], arc(O, c, 90, 0), [[c, 0]]),
     [[c - t, c - t], t]];

function e_lens(name, c) =
    [name, concat(arc([c, 0], c, 180, 90), arc([0, c], c, 0, -90)), [[c / 2, c / 2], c * (1 - 1 / sqrt(2))]];

function e_clamshell(name, r) =
    [name, concat(arc(O, r, 0, 180), arc([-r, -r], r, 90, 0), arc([r, -r], r, 180, 90)), [[0, r / 3], 2 * r / 3]];

function e_dresden(name, n, r_out, r_in) =
    let(h = 180 / n, rs = r_out / (cos(h) + sin(h)), k = 0.85 * rs)
    [name, [r_in * [cos(-h), sin(-h)], rs * [cos(-h), sin(-h)], [r_out, 0], rs * [cos(h), sin(h)], r_in * [cos(h), sin(h)]],
     [[k, 0], k * sin(h)]];

function e_circle(name, r) = [name, arc(O, r, 0, 360), [O, r]];

catalog = concat(
    [
        e_rect("square-half", half, half),
        e_rect("square-third", third, third),
        e_rect("square-quarter", quarter, quarter),
        e_tri("hst-half", rtri(half)),
        e_tri("hst-third", rtri(third)),
        e_tri("hst-quarter", rtri(quarter)),
        e_tri("qst-third", iso(third)),
        e_tri("goose-full", iso(block)),
        e_tri("goose-half", iso(half)),
        e_rect("bar-third", third, third / 2),
        e_rect("rail-third", block, third),
        ["snowball", clipped(block, third), [[half, half], half]],
    ],
    [for (k = [0 : 2 * log_rounds]) e_rect(str("log", k), log_center + k * log_w, log_w)],
    log_center == third ? [] : [e_rect("log-center", log_center, log_center)],
    [
        e_pie("path-pie", path_r),
        e_bite("path-bite", half, path_r),
        e_lens("peel-lens", half),
        e_bite("peel-corner", half, half),
        ["hexagon", ngon(6, hex_side), [O, hex_side * sqrt(3) / 2]],
        e_rhombus("diamond-60", hex_side, 60),
        e_tri("triangle-60", ngon(3, hex_side)),
        e_rhombus("lemoyne-diamond", star_d, 45),
        e_rect("lemoyne-square", star_d, star_d),
        e_tri("lemoyne-triangle", rtri(star_d)),
        e_clamshell("clamshell", shell_r),
        e_dresden("dresden-blade", dresden_blades, half, dresden_hub),
        e_circle("dresden-center", dresden_hub),
    ]
);

function find(name) = let(hits = [for (e = catalog) if (e[0] == name) e])
    assert(len(hits) == 1, str("unknown piece: ", name)) hits[0];

module ring(P, wall) difference() {
    offset(r = wall) polygon(P);
    polygon(P);
}

module cutter(P) {
    linear_extrude(flange_thickness) ring(P, body_wall + flange_width);
    linear_extrude(cut_height - blade_height) ring(P, body_wall);
    translate([0, 0, cut_height - blade_height]) linear_extrude(blade_height) ring(P, blade_wall);
}

module pusher(P, knob) {
    knob_d = min(pusher_knob, 2 * (knob[1] - pusher_clearance) - 2);
    assert(knob_d >= 3, "piece too small for a pusher knob");
    linear_extrude(pusher_plate) offset(r = -pusher_clearance) polygon(P);
    translate(knob[0]) cylinder(d = knob_d, h = cut_height + pusher_plate);
}

module item(e) {
    if (part == "cutter") cutter(e[1]);
    else pusher(e[1], e[2]);
}

pitch = 2 * (body_wall + flange_width) + 6;
cols = 6;

if (piece == "list")
    for (e = catalog) echo(e[0]);
else if (piece == "all")
    for (i = [0 : len(catalog) - 1])
        let(P = catalog[i][1])
            translate([(i % cols) * (block + pitch), floor(i / cols) * (block + pitch)])
                translate(-[min([for (p = P) p[0]]), min([for (p = P) p[1]])])
                    item(catalog[i]);
else
    item(find(piece));
