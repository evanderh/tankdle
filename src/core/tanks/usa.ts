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
// M8 Greyhound (Armored Car)
// T28 Super Heavy Tank (Experimental)

export const M48: Tank = {
  name: 'M48 Patton',
  url: 'https://en.wikipedia.org/wiki/M48_Patton',
  type: TankType.MBT,
  year: 1951,
  origin: TankOrigin.USA,
  count: 12000,
  mass: 45,
  engine: 750,
  range: [113, 70],
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
