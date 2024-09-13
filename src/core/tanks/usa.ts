import { Tank, TankRole, TankOrigin } from "../types";

// World War II:
// M2 (Medium Tank)
// M3 Stuart
// M3 Lee
// M4 Sherman
// M10 Wolverine (Tank Destroyer)
// M18 Hellcat (Tank Destroyer)
// M24 Chaffee
// M26 Pershing
// M26 Jackson
// T28 Super Heavy Tank (Experimental)

// Cold War:
// M41 Walker Bulldog (Light Tank)
// M48 Patton
// M60 Patton
// M103 (Heavy Tank)
// M113 (APC)
// M551 Sheridan (Light Tank)

// Modern:
// M1 Abrams
// M2 Bradley
// M1117 Guardian
// Stryker

export const M2Medium: Tank = {
  name: 'M2 Medium Tank',
  url: 'https://en.wikipedia.org/wiki/M2_medium_tank',
  role: TankRole.Medium,
  year: 1939,
  origin: TankOrigin.USA,
  count: 112,
  mass: 19,
  engine: 340,
  range: { km: 210, mi: 130 },
  speed: { km: 42, mi: 26 },
};

export const M3Stuart: Tank = {
  name: 'M3 Stuart',
  url: 'https://en.wikipedia.org/wiki/M3_Stuart',
  role: TankRole.Light,
  year: 1941,
  origin: TankOrigin.USA,
  count: 22744,
  mass: 17,
  engine: 220,
  range: { km: 160, mi: 100 },
  speed: { km: 58, mi: 36 },
};

export const M3Lee: Tank = {
  name: 'M3 Lee',
  url: 'https://en.wikipedia.org/wiki/M3_Lee',
  role: TankRole.Medium,
  year: 1941,
  origin: TankOrigin.USA,
  count: 6258,
  mass: 27,
  engine: 400,
  range: { km: 193, mi: 120 },
  speed: { km: 42, mi: 26 },
};

export const M4: Tank = {
  name: 'M4 Sherman',
  url: 'https://en.wikipedia.org/wiki/M4_Sherman',
  role: TankRole.Medium,
  year: 1941,
  origin: TankOrigin.USA,
  count: 49234,
  mass: 33,
  engine: 400,
  range: { km: 240, mi: 150 },
  speed: { km: 48, mi: 30 },
};

export const M10: Tank = {
  name: 'M10 Wolverine',
  url: 'https://en.wikipedia.org/wiki/M10_tank_destroyer',
  role: TankRole.TankDestroyer,
  year: 1942,
  origin: TankOrigin.USA,
  count: 6406,
  mass: 29,
  engine: 450,
  range: { km: 260, mi: 160 },
  speed: { km: 48, mi: 30 },
};

export const M18: Tank = {
  name: 'M18 Hellcat',
  url: 'https://en.wikipedia.org/wiki/M18_Hellcat',
  role: TankRole.TankDestroyer,
  year: 1943,
  origin: TankOrigin.USA,
  count: 2507,
  mass: 17,
  engine: 350,
  range: { km: 160, mi: 100 },
  speed: { km: 89, mi: 55 },
};

export const M24: Tank = {
  name: 'M24 Chaffee',
  url: 'https://en.wikipedia.org/wiki/M24_Chaffee',
  role: TankRole.Light,
  year: 1944,
  origin: TankOrigin.USA,
  count: 4731,
  mass: 18,
  engine: 220,
  range: { km: 160, mi: 100 },
  speed: { km: 56, mi: 35 },
};

export const M26: Tank = {
  name: 'M26 Pershing',
  url: 'https://en.wikipedia.org/wiki/M26_Pershing',
  role: TankRole.Medium,
  year: 1944,
  origin: TankOrigin.USA,
  count: 2202,
  mass: 42,
  engine: 450,
  range: { km: 160, mi: 100 },
  speed: { km: 48, mi: 30 },
};

export const M36: Tank = {
  name: 'M36 Jackson',
  url: 'https://en.wikipedia.org/wiki/M36_tank_destroyer',
  role: TankRole.TankDestroyer,
  year: 1944,
  origin: TankOrigin.USA,
  count: 2324,
  mass: 29,
  engine: 450,
  range: { km: 240, mi: 150 },
  speed: { km: 42, mi: 26 },
};

export const T28: Tank = {
  name: 'T28',
  url: 'https://en.wikipedia.org/wiki/T28_super-heavy_tank',
  role: TankRole.SuperHeavy,
  year: 1945,
  origin: TankOrigin.USA,
  count: 2,
  mass: 86,
  engine: 500,
  range: { km: 160, mi: 100 },
  speed: { km: 13, mi: 8 },
};

export const M41: Tank = {
  name: 'M41 Walker Bulldog',
  url: 'https://en.wikipedia.org/wiki/M41_Walker_Bulldog',
  role: TankRole.Light,
  year: 1951,
  origin: TankOrigin.USA,
  count: 5467,
  mass: 26,
  engine: 500,
  range: { km: 160, mi: 100 },
  speed: { km: 72, mi: 45 },
};

export const M48: Tank = {
  name: 'M48 Patton',
  url: 'https://en.wikipedia.org/wiki/M48_Patton',
  role: TankRole.MBT,
  year: 1952,
  origin: TankOrigin.USA,
  count: 12000,
  mass: 45,
  engine: 750,
  range: { km: 463, mi: 288 },
  speed: { km: 48, mi: 30 },
};

export const M60: Tank = {
  name: 'M60 Patton',
  url: 'https://en.wikipedia.org/wiki/M60_tank',
  role: TankRole.MBT,
  year: 1959,
  origin: TankOrigin.USA,
  count: 15000,
  mass: 46,
  engine: 750,
  range: { km: 500, mi: 300 },
  speed: { km: 48, mi: 30 },
};

export const M103: Tank = {
  name: 'M103',
  url: 'https://en.wikipedia.org/wiki/M103_heavy_tank',
  role: TankRole.Heavy,
  year: 1957,
  origin: TankOrigin.USA,
  count: 300,
  mass: 59,
  engine: 810,
  range: { km: 130, mi: 80 },
  speed: { km: 34, mi: 21 },
};

export const M113: Tank = {
  name: 'M113',
  url: 'https://en.wikipedia.org/wiki/M113_armored_personnel_carrier',
  role: TankRole.APC,
  year: 1960,
  origin: TankOrigin.USA,
  count: 80000,
  mass: 12,
  engine: 275,
  range: { km: 480, mi: 300 },
  speed: { km: 68, mi: 42 },
};

export const M551: Tank = {
  name: 'M551 Sheridan',
  url: 'https://en.wikipedia.org/wiki/M551_Sheridan',
  role: TankRole.Light,
  year: 1966,
  origin: TankOrigin.USA,
  count: 1662,
  mass: 17,
  engine: 300,
  range: { km: 560, mi: 350 },
  speed: { km: 69, mi: 43 },
};

export const M1: Tank = {
  name: 'M1 Abrams',
  url: 'https://en.wikipedia.org/wiki/M1_Abrams',
  role: TankRole.MBT,
  year: 1980,
  origin: TankOrigin.USA,
  count: 10300,
  mass: 54,
  engine: 1500,
  range: { km: 426, mi: 265 },
  speed: { km: 72, mi: 45 },
};

export const M2Bradley: Tank = {
  name: 'M2 Bradley',
  url: 'https://en.wikipedia.org/wiki/M2_Bradley',
  role: TankRole.IFV,
  year: 1981,
  origin: TankOrigin.USA,
  count: 4600,
  mass: 25,
  engine: 600,
  range: { km: 480, mi: 300 },
  speed: { km: 64, mi: 40 },
};

export const M1117Guardian: Tank = {
  name: 'M1117 Guardian',
  url: 'https://en.wikipedia.org/wiki/M1117_Armored_Security_Vehicle',
  role: TankRole.APC,
  year: 1999,
  origin: TankOrigin.USA,
  count: 2000,
  mass: 14,
  engine: 260,
  range: { km: 700, mi: 435 },
  speed: { km: 100, mi: 62 },
};

export const Stryker: Tank = {
  name: 'Stryker',
  url: 'https://en.wikipedia.org/wiki/Stryker',
  role: TankRole.IFV,
  year: 2002,
  origin: TankOrigin.USA,
  count: 4900,
  mass: 18,
  engine: 350,
  range: { km: 500, mi: 310 },
  speed: { km: 97, mi: 60 },
};

export const Killdozer: Tank = {
  name: 'Killdozer',
  url: 'https://en.wikipedia.org/wiki/Marvin_Heemeyer#The_bulldozer',
  role: TankRole.SuperHeavy,
  year: 2004,
  origin: TankOrigin.USA,
  count: 1,
  mass: 18,
  engine: 410,
  range: { km: 240, mi: 150 },
  speed: { km: 12, mi: 8 },
};
