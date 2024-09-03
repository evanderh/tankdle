import { Tank, TankRole, TankOrigin } from "../types";

// World War II:
// M4 Sherman
// M3 Stuart
// M26 Pershing
// M10 Wolverine (Tank Destroyer)
// M18 Hellcat (Tank Destroyer)
// T28 Super Heavy Tank (Experimental)

// Cold War:
// M41 Walker Bulldog (Light Tank)
// M48 Patton
// M60 Patton
// M103 (Heavy Tank)
// M551 Sheridan (Light Tank)

// Modern:
// M1 Abrams (M1A1, M1A2, M1A2 SEP v3/v4)

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

export const M3: Tank = {
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

export const M26: Tank = {
  name: 'M26 Pershing',
  url: 'https://en.wikipedia.org/wiki/M26_Pershing',
  role: TankRole.Heavy,
  year: 1944,
  origin: TankOrigin.USA,
  count: 2202,
  mass: 42,
  engine: 450,
  range: { km: 160, mi: 100 },
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
  name: 'M60',
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
