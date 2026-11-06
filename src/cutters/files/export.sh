#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

block="${1:-75}"
log_rounds="${2:-2}"
out="stl-${block}mm"
mkdir -p "$out"

params=(-D "block=$block" -D "log_rounds=$log_rounds")
tmp="$(mktemp -d)"
list="$tmp/pieces.echo"
openscad -o "$list" "${params[@]}" -D 'piece="list"' quilt_block_cutters.scad 2>/dev/null
names=$(sed -n 's/^ECHO: "\(.*\)"$/\1/p' "$list")
rm -rf "$tmp"

for part in cutter pusher; do
  for name in $names; do
    openscad --backend=manifold -q -o "$out/$name-$part.stl" "${params[@]}" -D "piece=\"$name\"" -D "part=\"$part\"" quilt_block_cutters.scad
    echo "$out/$name-$part.stl"
  done
done
