import { Tank, TankType, TankOrigin  } from "../types";

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

export const Type69_79: Tank = {
  name: 'Type 69/79',
  url: 'https://en.wikipedia.org/wiki/Type_69/79',
  type: TankType.MBT,
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
  type: TankType.MBT,
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
  type: TankType.MBT,
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
  type: TankType.MBT,
  year: 2000,
  origin: TankOrigin.China,
  count: 1300,
  mass: 55,
  engine: 1119,
  range: [600, 370],
  speed: [75, 47],
};
