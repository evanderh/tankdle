import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

// World War II:
// Type 95 Ha-Go
// Type 97 Chi-Ha
// Type 3 Chi-Nu

// Modern:
// Type 10
// Type 90

// Other:
// O-I (Super Heavy Tank, Experimental)

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
