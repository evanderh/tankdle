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
  range: { km: 450, mi: 280 },
  speed: { km: 50, mi: 31 },
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
  range: { km: 500, mi: 310 },
  speed: { km: 60, mi: 37 },
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
  range: { km: 440, mi: 275 },
  speed: { km: 50, mi: 31 },
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
  range: { km: 500, mi: 310 },
  speed: { km: 57, mi: 35 },
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
  range: { km: 400, mi: 250 },
  speed: { km: 65, mi: 40 },
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
  range: { km: 600, mi: 370 },
  speed: { km: 75, mi: 47 },
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
  range: { km: 469, mi: 291 },
  speed: { km: 70, mi: 43 },
};
