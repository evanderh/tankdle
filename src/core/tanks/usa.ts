import { Tank, TankType, TankOrigin } from "../types";

// World War II:
// M4 Sherman
// M3 Stuart
// M26 Pershing
// M10 Wolverine (Tank Destroyer)
// M18 Hellcat (Tank Destroyer)

// Cold War:
// M48 Patton
// M60 Patton
// M103 (Heavy Tank)
// M551 Sheridan (Light Tank)

// Modern:
// M1 Abrams (M1A1, M1A2, M1A2 SEP v3/v4)

// Other:
// M41 Walker Bulldog (Light Tank)
// T28 Super Heavy Tank (Experimental)

export const T28: Tank = {
  name: 'T28',
  url: 'https://en.wikipedia.org/wiki/T28_super-heavy_tank',
  type: TankType.SuperHeavy,
  year: 1945,
  origin: TankOrigin.USA,
  count: 2,
  mass: 86,
  engine: 500,
  range: [160, 100],
  speed: [13, 8],
};

export const M4: Tank = {
  name: 'M4 Sherman',
  url: 'https://en.wikipedia.org/wiki/M4_Sherman',
  type: TankType.Medium,
  year: 1941,
  origin: TankOrigin.USA,
  count: 49234,
  mass: 33,
  engine: 400,
  range: [240, 150],
  speed: [48, 30],
};

export const M3: Tank = {
  name: 'M3 Stuart',
  url: 'https://en.wikipedia.org/wiki/M3_Stuart',
  type: TankType.Light,
  year: 1941,
  origin: TankOrigin.USA,
  count: 22744,
  mass: 17,
  engine: 220,
  range: [160, 100],
  speed: [58, 36],
};

export const M26: Tank = {
  name: 'M26 Pershing',
  url: 'https://en.wikipedia.org/wiki/M26_Pershing',
  type: TankType.Heavy,
  year: 1944,
  origin: TankOrigin.USA,
  count: 2202,
  mass: 42,
  engine: 450,
  range: [160, 100],
  speed: [48, 30],
};

export const M10: Tank = {
  name: 'M10 Wolverine',
  url: 'https://en.wikipedia.org/wiki/M10_tank_destroyer',
  type: TankType.TankDestroyer,
  year: 1942,
  origin: TankOrigin.USA,
  count: 6406,
  mass: 29,
  engine: 450,
  range: [260, 160],
  speed: [48, 30],
};

export const M18: Tank = {
  name: 'M18 Hellcat',
  url: 'https://en.wikipedia.org/wiki/M18_Hellcat',
  type: TankType.TankDestroyer,
  year: 1943,
  origin: TankOrigin.USA,
  count: 2507,
  mass: 17,
  engine: 350,
  range: [160, 100],
  speed: [89, 55],
};

export const M48: Tank = {
  name: 'M48 Patton',
  url: 'https://en.wikipedia.org/wiki/M48_Patton',
  type: TankType.MBT,
  year: 1952,
  origin: TankOrigin.USA,
  count: 12000,
  mass: 45,
  engine: 750,
  range: [463, 288],
  speed: [48, 30],
};

export const M60: Tank = {
  name: 'M60',
  url: 'https://en.wikipedia.org/wiki/M60_tank',
  type: TankType.MBT,
  year: 1959,
  origin: TankOrigin.USA,
  count: 15000,
  mass: 46,
  engine: 750,
  range: [500, 300],
  speed: [48, 30],
};

export const M103: Tank = {
  name: 'M103',
  url: 'https://en.wikipedia.org/wiki/M103_heavy_tank',
  type: TankType.Heavy,
  year: 1957,
  origin: TankOrigin.USA,
  count: 300,
  mass: 59,
  engine: 810,
  range: [130, 80],
  speed: [34, 21],
};

export const M551: Tank = {
  name: 'M551 Sheridan',
  url: 'https://en.wikipedia.org/wiki/M551_Sheridan',
  type: TankType.Light,
  year: 1966,
  origin: TankOrigin.USA,
  count: 1662,
  mass: 17,
  engine: 300,
  range: [560, 350],
  speed: [69, 43],
};

export const M41: Tank = {
  name: 'M41 Walker Bulldog',
  url: 'https://en.wikipedia.org/wiki/M41_Walker_Bulldog',
  type: TankType.Light,
  year: 1951,
  origin: TankOrigin.USA,
  count: 5467,
  mass: 26,
  engine: 500,
  range: [160, 100],
  speed: [72, 45],
};

export const M1: Tank = {
  name: 'M1 Abrams',
  url: 'https://en.wikipedia.org/wiki/M1_Abrams',
  type: TankType.MBT,
  year: 1980,
  origin: TankOrigin.USA,
  count: 10300,
  mass: 54,
  engine: 1500,
  range: [426, 265],
  speed: [72, 45],
};
