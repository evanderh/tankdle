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
  range: { km: 330, mi: 210 },
  speed: { km: 53, mi: 33 },
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
  range: { km: 250, mi: 160 },
  speed: { km: 35, mi: 22 },
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
  range: { km: 240, mi: 150 },
  speed: { km: 37, mi: 23 },
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
  range: { km: 250, mi: 160 },
  speed: { km: 45, mi: 28 },
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
  range: { km: 280, mi: 170 },
  speed: { km: 55, mi: 34 },
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
  range: { km: 250, mi: 160 },
  speed: { km: 48, mi: 30 },
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
  range: { km: 220, mi: 140 },
  speed: { km: 37, mi: 23 },
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
  range: { km: 200, mi: 125 },
  speed: { km: 40, mi: 25 },
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
  range: { km: 400, mi: 250 },
  speed: { km: 44, mi: 27 },
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
  range: { km: 400, mi: 249 },
  speed: { km: 48, mi: 30 },
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
  range: { km: 530, mi: 330 },
  speed: { km: 51, mi: 32 },
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
  range: { km: 450, mi: 280 },
  speed: { km: 50, mi: 31 },
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
  range: { km: 500, mi: 310 },
  speed: { km: 60, mi: 37 },
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
  range: { km: 460, mi: 290 },
  speed: { km: 60, mi: 37 },
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
  range: { km: 335, mi: 208 },
  speed: { km: 80, mi: 50 },
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
  range: { km: 550, mi: 340 },
  speed: { km: 60, mi: 37 },
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
  range: { km: 500, mi: 310 },
  speed: { km: 80, mi: 50 },
};

