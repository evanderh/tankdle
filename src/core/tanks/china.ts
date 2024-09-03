import { Tank, TankRole, TankOrigin  } from "../types";

// Cold War:
// Type 59
// Type 62 (Light Tank)
// Type 63 (Light Tank)
// Type 63 (Amphibious Light Tank)
// Type 69/79
// Type 80/88

// Modern:
// Type 96
// Type 99
// Type 04 (Infantry Fighting Vehicle)
// Type 08 (Armored Fighting Vehicle)
// Type 15 (Light Tank)

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

export const Type63Tank: Tank = {
  name: 'Type 63 Tank',
  url: 'https://en.wikipedia.org/wiki/Type_63_(tank)',
  role: TankRole.Light,
  year: 1963,
  origin: TankOrigin.China,
  count: 1550,
  mass: 20,
  engine: 402,
  range: { km: 370, mi: 230 },
  speed: { km: 65, mi: 40 },
};

export const Type63APC: Tank = {
  name: 'Type 63 APC',
  url: 'https://en.wikipedia.org/wiki/Type_63_(armoured_personnel_carrier)',
  role: TankRole.APC,
  year: 1963,
  origin: TankOrigin.China,
  count: 8000,
  mass: 13,
  engine: 320,
  range: { km: 500, mi: 310 },
  speed: { km: 64, mi: 40 },
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

export const Type04: Tank = {
  name: 'Type 04',
  url: 'https://en.wikipedia.org/wiki/ZBD-04',
  role: TankRole.IFV,
  year: 1997,
  origin: TankOrigin.China,
  count: 2950,
  mass: 20,
  engine: 590,
  range: { km: 500, mi: 310 },
  speed: { km: 65, mi: 40 },
};

export const Type08: Tank = {
  name: 'Type 08',
  url: 'https://en.wikipedia.org/wiki/Type_08',
  role: TankRole.APC,
  year: 2006,
  origin: TankOrigin.China,
  count: 6150,
  mass: 21,
  engine: 440,
  range: { km: 800, mi: 500 },
  speed: { km: 100, mi: 62 },
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

