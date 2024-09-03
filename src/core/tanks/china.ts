import { Tank, TankRole, TankOrigin  } from "../types";

// Cold War:
// Type 59 (Chinese version of T-54)
// Type 62 (Light Tank)
// Type 69/79
// Type 80/88

// Modern:
// Type 96
// Type 99
// Type 15 (Light Tank)

// Other:
// Type 63 (Amphibious Light Tank)
// ZBL-09 (Armored Fighting Vehicle)

export const Type59: Tank = {
  name: 'Type 59',
  url: 'https://en.wikipedia.org/wiki/Type_59_tank',
  role: TankRole.MBT,
  year: 1958,
  origin: TankOrigin.China,
  count: 9500,
  mass: 36,
  engine: 520,
  range: [450, 280],
  speed: [50, 31],
};

export const Type62: Tank = {
  name: 'Type 62',
  url: 'https://en.wikipedia.org/wiki/Type_62_light_tank',
  role: TankRole.Light,
  year: 1963,
  origin: TankOrigin.China,
  count: 1500,
  mass: 21,
  engine: 430,
  range: [500, 310],
  speed: [60, 37],
};

export const Type69_79: Tank = {
  name: 'Type 69/79',
  url: 'https://en.wikipedia.org/wiki/Type_69/79',
  role: TankRole.MBT,
  year: 1966,
  origin: TankOrigin.China,
  count: 3200,
  mass: 37,
  engine: 580,
  range: [440, 275],
  speed: [50, 31],
};

export const Type80_88: Tank = {
  name: 'Type 80/88',
  url: 'https://en.wikipedia.org/wiki/Type_80/88_main_battle_tank',
  role: TankRole.MBT,
  year: 1980,
  origin: TankOrigin.China,
  count: 3500,
  mass: 38,
  engine: 730,
  range: [500, 310],
  speed: [57, 35],
};

export const Type96: Tank = {
  name: 'Type 96',
  url: 'https://en.wikipedia.org/wiki/Type_96_tank',
  role: TankRole.MBT,
  year: 1996,
  origin: TankOrigin.China,
  count: 2500,
  mass: 41,
  engine: 582,
  range: [400, 250],
  speed: [65, 40],
};

export const Type99: Tank = {
  name: 'Type 99',
  url: 'https://en.wikipedia.org/wiki/Type_99_tank',
  role: TankRole.MBT,
  year: 2000,
  origin: TankOrigin.China,
  count: 1300,
  mass: 55,
  engine: 1119,
  range: [600, 370],
  speed: [75, 47],
};

export const Type15: Tank = {
  name: 'Type 15',
  url: 'https://en.wikipedia.org/wiki/Type_15_tank',
  role: TankRole.Light,
  year: 2015,
  origin: TankOrigin.China,
  count: 500,
  mass: 33,
  engine: 1000,
  range: [469, 291],
  speed: [70, 43],
};
