import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

// World War II:
// T-34
// KV-1
// IS-2
// SU-76 (Self-Propelled Gun)
// SU-100 (Self-Propelled Gun)
// SU-85 (Tank Destroyer)
// ISU-122 (Assault Gun)
// ISU-152 (Assault Gun)

// Cold War:
// PT-76 (Amphibious Light Tank)
// T-54
// T-55
// T-62
// T-64
// T-72
// T-80

// Modern:
// T-90
// T-14 Armata

export const T34: Tank = {
  name: 'T-34',
  url: 'https://en.wikipedia.org/wiki/T-34',
  role: TankRole.Medium,
  year: 1940,
  origin: TankOrigin.Soviet,
  count: 84070,
  mass: 27,
  engine: 500,
  range: [330, 210],
  speed: [53, 33],
};

export const KV1: Tank = {
  name: 'KV-1',
  url: 'https://en.wikipedia.org/wiki/Kliment_Voroshilov_tank',
  role: TankRole.Heavy,
  year: 1939,
  origin: TankOrigin.Soviet,
  count: 5219,
  mass: 45,
  engine: 600,
  range: [250, 160],
  speed: [35, 22],
};

export const IS2: Tank = {
  name: 'IS-2',
  url: 'https://en.wikipedia.org/wiki/IS-2',
  role: TankRole.Heavy,
  year: 1943,
  origin: TankOrigin.Soviet,
  count: 3854,
  mass: 46,
  engine: 520,
  range: [240, 150],
  speed: [37, 23],
};

export const SU76: Tank = {
  name: 'SU-76',
  url: 'https://en.wikipedia.org/wiki/SU-76',
  role: TankRole.SPG,
  year: 1942,
  origin: TankOrigin.Soviet,
  count: 14292,
  mass: 12,
  engine: 140,
  range: [250, 160],
  speed: [45, 28],
};

export const SU85: Tank = {
  name: 'SU-85',
  url: 'https://en.wikipedia.org/wiki/SU-85',
  role: TankRole.TankDestroyer,
  year: 1943,
  origin: TankOrigin.Soviet,
  count: 2650,
  mass: 30,
  engine: 493,
  range: [280, 170],
  speed: [55, 34],
};

export const SU100: Tank = {
  name: 'SU-100',
  url: 'https://en.wikipedia.org/wiki/SU-100',
  role: TankRole.TankDestroyer,
  year: 1944,
  origin: TankOrigin.Soviet,
  count: 4976,
  mass: 32,
  engine: 500,
  range: [250, 160],
  speed: [48, 30],
};

export const ISU122: Tank = {
  name: 'ISU-122',
  url: 'https://en.wikipedia.org/wiki/ISU-122',
  role: TankRole.AssaultGun,
  year: 193,
  origin: TankOrigin.Soviet,
  count: 2410,
  mass: 46,
  engine: 520,
  range: [220, 140],
  speed: [37, 23],
};

export const ISU152: Tank = {
  name: 'ISU-152',
  url: 'https://en.wikipedia.org/wiki/ISU-152',
  role: TankRole.AssaultGun,
  year: 1943,
  origin: TankOrigin.Soviet,
  count: 4635,
  mass: 47,
  engine: 520,
  range: [200, 125],
  speed: [40, 25],
};

export const PT76: Tank = {
  name: 'PT-76',
  url: 'https://en.wikipedia.org/wiki/PT-76',
  role: TankRole.Light,
  year: 1951,
  origin: TankOrigin.Soviet,
  count: 12000,
  mass: 15,
  engine: 240,
  range: [400, 250],
  speed: [44, 27],
};

export const T54: Tank = {
  name: 'T-54',
  url: 'https://en.wikipedia.org/wiki/T-54',
  role: TankRole.MBT,
  year: 1945,
  origin: TankOrigin.Soviet,
  count: 35000,
  mass: 36,
  engine: 520,
  range: [400, 249],
  speed: [48, 30],
};

export const T55: Tank = {
  name: 'T-55',
  url: 'https://en.wikipedia.org/wiki/T-54/T-55',
  role: TankRole.MBT,
  year: 1958,
  origin: TankOrigin.Soviet,
  count: 27500,
  mass: 36,
  engine: 581,
  range: [530, 330],
  speed: [51, 32],
};

export const T62: Tank = {
  name: 'T-62',
  url: 'https://en.wikipedia.org/wiki/T-62',
  role: TankRole.MBT,
  year: 1958,
  origin: TankOrigin.Soviet,
  count: 22700,
  mass: 37,
  engine: 580,
  range: [450, 280],
  speed: [50, 31],
};

export const T64: Tank = {
  name: 'T-64',
  url: 'https://en.wikipedia.org/wiki/T-64',
  role: TankRole.MBT,
  year: 1958,
  origin: TankOrigin.Soviet,
  count: 13000,
  mass: 38,
  engine: 700,
  range: [500, 310],
  speed: [60, 37],
};

export const T72: Tank = {
  name: 'T-72',
  url: 'https://en.wikipedia.org/wiki/T-72',
  role: TankRole.MBT,
  year: 1971,
  origin: TankOrigin.Soviet,
  count: 25000,
  mass: 46,
  engine: 780,
  range: [460, 290],
  speed: [60, 37],
};

export const T80: Tank = {
  name: 'T-80',
  url: 'https://en.wikipedia.org/wiki/T-80',
  role: TankRole.MBT,
  year: 1975,
  origin: TankOrigin.Soviet,
  count: 5500,
  mass: 43,
  engine: 1000,
  range: [335, 208],
  speed: [80, 50],
};

export const T90: Tank = {
  name: 'T90',
  url: 'https://en.wikipedia.org/wiki/T-90',
  role: TankRole.MBT,
  year: 1990,
  origin: TankOrigin.Russia,
  count: 4000,
  mass: 46,
  engine: 1000,
  range: [550, 340],
  speed: [60, 37],
};

export const T14: Tank = {
  name: 'T-14 Armata',
  url: 'https://en.wikipedia.org/wiki/T-14_Armata',
  role: TankRole.MBT,
  year: 2015,
  origin: TankOrigin.Russia,
  count: 50,
  mass: 55,
  engine: 1500,
  range: [500, 310],
  speed: [80, 50],
};

