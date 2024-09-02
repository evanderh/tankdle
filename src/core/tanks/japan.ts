import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

// World War II:
// Type 95 Ha-Go
// Type 97 Te-Ke
// Type 97 Chi-Ha
// Type 3 Chi-Nu

// Cold War
// Type 61
// Type 74

// Modern:
// Type 10
// Type 90

export const Type95: Tank = {
  name: 'Type 95 Ha-Go',
  url: 'https://en.wikipedia.org/wiki/Type_95_Ha-Go_light_tank',
  type: TankType.Light,
  year: 1936,
  origin: TankOrigin.Japan,
  count: 2300,
  mass: 7,
  engine: 120,
  range: [210, 130],
  speed: [45, 28],
};

export const Type97TeKe: Tank = {
  name: 'Type 97 Te-Ke',
  url: 'https://en.wikipedia.org/wiki/Type_97_Te-Ke_tankette',
  type: TankType.Tankette,
  year: 1939,
  origin: TankOrigin.Japan,
  count: 616,
  mass: 5,
  engine: 65,
  range: [250, 160],
  speed: [42, 26],
};

export const Type97ChiHa: Tank = {
  name: 'Type 97 Chi-Ha',
  url: 'https://en.wikipedia.org/wiki/Type_97_Chi-Ha_medium_tank',
  type: TankType.Medium,
  year: 1938,
  origin: TankOrigin.Japan,
  count: 1162,
  mass: 16,
  engine: 170,
  range: [210, 130],
  speed: [38, 24],
};

export const Type3: Tank = {
  name: 'Type 3 Chi-Nu',
  url: 'https://en.wikipedia.org/wiki/Type_3_Chi-Nu_medium_tank',
  type: TankType.Medium,
  year: 1944,
  origin: TankOrigin.Japan,
  count: 166,
  mass: 21,
  engine: 240,
  range: [210, 130],
  speed: [39, 24],
};

export const Type61: Tank = {
  name: 'Type 61',
  url: 'https://en.wikipedia.org/wiki/Type_61_(tank)',
  type: TankType.MBT,
  year: 1956,
  origin: TankOrigin.Japan,
  count: 560,
  mass: 35,
  engine: 570,
  range: [200, 124],
  speed: [45, 28],
};

export const Type74: Tank = {
  name: 'Type 74',
  url: 'https://en.wikipedia.org/wiki/Type_74',
  type: TankType.MBT,
  year: 1975,
  origin: TankOrigin.Japan,
  count: 873,
  mass: 38,
  engine: 750,
  range: [300, 190],
  speed: [53, 33],
};

export const Type90: Tank = {
  name: 'Type 90',
  url: 'https://en.wikipedia.org/wiki/Type_90_tank',
  type: TankType.MBT,
  year: 1990,
  origin: TankOrigin.Japan,
  count: 341,
  mass: 50,
  engine: 1500,
  range: [350, 215],
  speed: [70, 43],
};

export const Type10: Tank = {
  name: 'Type 10',
  url: 'https://en.wikipedia.org/wiki/Type_10',
  type: TankType.MBT,
  year: 2010,
  origin: TankOrigin.Japan,
  count: 117,
  mass: 48,
  engine: 1200,
  range: [500, 310],
  speed: [70, 43],
};
