import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

// World War II:
// T-34
// KV-1
// IS-2
// SU-76 (Self-Propelled Gun)
// SU-85 (Tank Destroyer)
// ISU-152 (Assault Gun)

// Cold War:
// T-54/T-55
// T-62
// T-64
// T-72
// T-80

// Modern:
// T-90
// T-14 Armata

// Other:
// PT-76 (Amphibious Light Tank)
// BRDM-2 (Armored Car)
// SU-100 (Self-Propelled Gun)
// ISU-122 (Self-Propelled Gun)
// Object 279 (Experimental)

export const T54: Tank = {
  name: 'T-54',
  url: 'https://en.wikipedia.org/wiki/T-54',
  type: TankType.MBT,
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
  type: TankType.MBT,
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
  type: TankType.MBT,
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
  type: TankType.MBT,
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
  type: TankType.MBT,
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
  type: TankType.MBT,
  year: 1975,
  origin: TankOrigin.Soviet,
  count: 5500,
  mass: 43,
  engine: 1000,
  range: [335, 208],
  speed: [80, 50],
};

export const T14: Tank = {
  name: 'T-14 Armata',
  url: 'https://en.wikipedia.org/wiki/T-14_Armata',
  type: TankType.MBT,
  year: 2015,
  origin: TankOrigin.Russia,
  count: 50,
  mass: 55,
  engine: 1500,
  range: [500, 310],
  speed: [80, 50],
};

export const T90: Tank = {
  name: 'T90',
  url: 'https://en.wikipedia.org/wiki/T-90',
  type: TankType.MBT,
  year: 1990,
  origin: TankOrigin.Russia,
  count: 4000,
  mass: 46,
  engine: 1000,
  range: [550, 340],
  speed: [60, 37],
};
