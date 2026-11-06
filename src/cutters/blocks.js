export const BLOCKS = [
  { slug: 'hst', name: 'Half-square triangles', grid: '2×2', pieces: [['hst-half', 8]] },
  { slug: 'pinwheel', name: 'Pinwheel', pieces: [['hst-half', 8]] },
  { slug: 'flying-geese', name: 'Flying geese', pieces: [['goose-full', 2], ['hst-half', 4]] },
  { slug: 'ohio-star', name: 'Ohio star', pieces: [['square-third', 5], ['qst-third', 16]] },
  {
    slug: 'log-cabin',
    name: 'Log cabin',
    grid: '2 rounds',
    pieces: [['square-third', 1], ['log0', 1], ['log1', 2], ['log2', 2], ['log3', 2], ['log4', 1]],
  },
  { slug: 'four-patch', name: 'Four patch', pieces: [['square-half', 4]] },
  { slug: 'nine-patch', name: 'Nine patch', pieces: [['square-third', 9]] },
  { slug: 'rail-fence', name: 'Rail fence', pieces: [['rail-third', 3]] },
  { slug: 'churn-dash', name: 'Churn dash', pieces: [['square-third', 1], ['hst-third', 8], ['bar-third', 8]] },
  { slug: 'friendship-star', name: 'Friendship star', pieces: [['square-third', 5], ['hst-third', 8]] },
  { slug: 'shoofly', name: 'Shoofly', pieces: [['square-third', 5], ['hst-third', 8]] },
  {
    slug: 'sawtooth-star',
    name: 'Sawtooth star',
    pieces: [['square-half', 1], ['square-quarter', 4], ['goose-half', 4], ['hst-quarter', 8]],
  },
  { slug: 'snowball', name: 'Snowball', pieces: [['snowball', 1], ['hst-third', 4]] },
  { slug: 'drunkards-path', name: "Drunkard's path", grid: '2×2', pieces: [['path-pie', 4], ['path-bite', 4]] },
  { slug: 'orange-peel', name: 'Orange peel', grid: '2×2', pieces: [['peel-lens', 4], ['peel-corner', 8]] },
  {
    slug: 'lemoyne-star',
    name: 'LeMoyne star',
    pieces: [['lemoyne-diamond', 8], ['lemoyne-square', 4], ['lemoyne-triangle', 4]],
  },
  { slug: 'dresden-plate', name: 'Dresden plate', pieces: [['dresden-blade', 20], ['dresden-center', 1]] },
  {
    slug: 'flower-garden',
    name: "Grandmother's flower garden",
    pieces: [['hexagon', 7]],
    note: 'Seven hexagons make one rosette.',
  },
  {
    slug: 'tumbling-blocks',
    name: 'Tumbling blocks',
    pieces: [['diamond-60', 3]],
    note: 'Three diamonds make one cube.',
  },
  {
    slug: 'thousand-pyramids',
    name: 'Thousand pyramids',
    pieces: [['triangle-60', null]],
    note: 'It tessellates, so cut as many as you like.',
  },
  {
    slug: 'clamshell',
    name: 'Clamshell',
    pieces: [['clamshell', null]],
    note: 'It tessellates, so cut as many as you like.',
  },
];

export const DEFAULT_BLOCK = 'ohio-star';
