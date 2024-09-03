import { Tank, TankRole, TankOrigin } from "../types";

// World War II:
// Type 95 Ha-Go
// Type 97 Te-Ke
// Type 97 Chi-Ha
// Type 1 Chi-He
// Type 2 Ka-Mi
// Type 3 Chi-Nu
// Type 4 Ke-Nu

// Cold War
// Type 61
// Type 74

// Modern:
// Type 90
// Type 10

export const Type95HaGo: Tank = {
  name: 'Type 95 Ha-Go',
  url: 'https://en.wikipedia.org/wiki/Type_95_Ha-Go_light_tank',
  role: TankRole.Light,
  year: 1936,
  origin: TankOrigin.Japan,
  count: 2300,
  mass: 7,
  engine: 120,
  range: { km: 210, mi: 130 },
  speed: { km: 45, mi: 28 },
};

export const Type97TeKe: Tank = {
  name: 'Type 97 Te-Ke',
  url: 'https://en.wikipedia.org/wiki/Type_97_Te-Ke_tankette',
  role: TankRole.Tankette,
  year: 1939,
  origin: TankOrigin.Japan,
  count: 616,
  mass: 5,
  engine: 65,
  range: { km: 250, mi: 160 },
  speed: { km: 42, mi: 26 },
};

export const Type97ChiHa: Tank = {
  name: 'Type 97 Chi-Ha',
  url: 'https://en.wikipedia.org/wiki/Type_97_Chi-Ha_medium_tank',
  role: TankRole.Medium,
  year: 1938,
  origin: TankOrigin.Japan,
  count: 1162,
  mass: 16,
  engine: 170,
  range: { km: 210, mi: 130 },
  speed: { km: 38, mi: 24 },
};

export const Type1ChiHe: Tank = {
  name: 'Type 1 Chi-He',
  url: 'https://en.wikipedia.org/wiki/Type_1_Chi-He',
  role: TankRole.Medium,
  year: 1941,
  origin: TankOrigin.Japan,
  count: 170,
  mass: 17,
  engine: 240,
  range: { km: 210, mi: 130 },
  speed: { km: 44, mi: 27 },
};

export const Type2KaMi: Tank = {
  name: 'Type 2 Ka-Mi',
  url: 'https://en.wikipedia.org/wiki/Type_2_Ka-Mi',
  role: TankRole.Light,
  year: 1942,
  origin: TankOrigin.Japan,
  count: 182,
  mass: 12,
  engine: 115,
  range: { km: 170, mi: 105 },
  speed: { km: 37, mi: 23 },
};


export const Type3ChiNu: Tank = {
  name: 'Type 3 Chi-Nu',
  url: 'https://en.wikipedia.org/wiki/Type_3_Chi-Nu_medium_tank',
  role: TankRole.Medium,
  year: 1944,
  origin: TankOrigin.Japan,
  count: 166,
  mass: 21,
  engine: 240,
  range: { km: 210, mi: 130 },
  speed: { km: 39, mi: 24 },
};

export const Type4KeNu: Tank = {
  name: 'Type 4 Ke-Nu',
  url: 'https://en.wikipedia.org/wiki/Type_4_Ke-Nu',
  role: TankRole.Light,
  year: 1944,
  origin: TankOrigin.Japan,
  count: 100,
  mass: 8,
  engine: 120,
  range: { km: 240, mi: 150 },
  speed: { km: 40, mi: 25 },
};

export const Type61: Tank = {
  name: 'Type 61',
  url: 'https://en.wikipedia.org/wiki/Type_61_(tank)',
  role: TankRole.MBT,
  year: 1956,
  origin: TankOrigin.Japan,
  count: 560,
  mass: 35,
  engine: 570,
  range: { km: 200, mi: 124 },
  speed: { km: 45, mi: 28 },
};

export const Type74: Tank = {
  name: 'Type 74',
  url: 'https://en.wikipedia.org/wiki/Type_74',
  role: TankRole.MBT,
  year: 1975,
  origin: TankOrigin.Japan,
  count: 873,
  mass: 38,
  engine: 750,
  range: { km: 300, mi: 190 },
  speed: { km: 53, mi: 33 },
};

export const Type90: Tank = {
  name: 'Type 90',
  url: 'https://en.wikipedia.org/wiki/Type_90_tank',
  role: TankRole.MBT,
  year: 1990,
  origin: TankOrigin.Japan,
  count: 341,
  mass: 50,
  engine: 1500,
  range: { km: 350, mi: 215 },
  speed: { km: 70, mi: 43 },
};

export const Type10: Tank = {
  name: 'Type 10',
  url: 'https://en.wikipedia.org/wiki/Type_10',
  role: TankRole.MBT,
  year: 2010,
  origin: TankOrigin.Japan,
  count: 117,
  mass: 48,
  engine: 1200,
  range: { km: 500, mi: 310 },
  speed: { km: 70, mi: 43 },
};
