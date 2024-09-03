import { Tank, TankRole, TankOrigin } from "../types";

// Carro Armato L3/33
// Carro Armato M11/39
// Carro Armato M13/40
// Semovente da 75/18
// Carro Armato M15/42
// P 26/40
// OF-40
// Ariete

export const L3_33: Tank = {
  name: 'Carro Armato L3/33',
  url: 'https://en.wikipedia.org/wiki/L3/33',
  role: TankRole.Tankette,
  year: 1933,
  origin: TankOrigin.Italy,
  count: 2500,
  mass: 3.2,
  engine: 43,
  range: { km: 110, mi: 68 },
  speed: { km: 42, mi: 26 },
};

export const M11_39: Tank = {
  name: 'Carro Armato M11/39',
  url: 'https://en.wikipedia.org/wiki/M11/39',
  role: TankRole.Medium,
  year: 1939,
  origin: TankOrigin.Italy,
  count: 100,
  mass: 12,
  engine: 105,
  range: { km: 200, mi: 120 },
  speed: { km: 32, mi: 20 },
};

export const M13_40: Tank = {
  name: 'Carro Armato M13/40',
  url: 'https://en.wikipedia.org/wiki/M13/40_tank',
  role: TankRole.Medium,
  year: 1940,
  origin: TankOrigin.Italy,
  count: 740,
  mass: 14,
  engine: 125,
  range: { km: 200, mi: 120 },
  speed: { km: 32, mi: 20 },
};

export const Semovente75_18: Tank = {
  name: 'Semovente da 75/18',
  url: 'https://en.wikipedia.org/wiki/Semovente_da_75/18',
  role: TankRole.SPG,
  year: 1941,
  origin: TankOrigin.Italy,
  count: 467,
  mass: 13,
  engine: 125,
  range: { km: 200, mi: 120 },
  speed: { km: 32, mi: 20 },
};

export const M15_42: Tank = {
  name: 'Carro Armato M15/42',
  url: 'https://en.wikipedia.org/wiki/M15/42_tank',
  role: TankRole.Medium,
  year: 1943,
  origin: TankOrigin.Italy,
  count: 333,
  mass: 15,
  engine: 192,
  range: { km: 200, mi: 120 },
  speed: { km: 38, mi: 24 },
};

export const P26_40: Tank = {
  name: 'P 26/40',
  url: 'https://en.wikipedia.org/wiki/P26/40_tank',
  role: TankRole.Medium,
  year: 1943,
  origin: TankOrigin.Italy,
  count: 110,
  mass: 26,
  engine: 330,
  range: { km: 280, mi: 170 },
  speed: { km: 40, mi: 25 },
};

export const OF40: Tank = {
  name: 'OF-40',
  url: 'https://en.wikipedia.org/wiki/OF-40',
  role: TankRole.MBT,
  year: 1980,
  origin: TankOrigin.Italy,
  count: 39,
  mass: 46,
  engine: 820,
  range: { km: 600, mi: 370 },
  speed: { km: 60, mi: 37 },
};

export const CentauroB1: Tank = {
  name: 'Centauro B1',
  url: 'https://en.wikipedia.org/wiki/B1_Centauro',
  role: TankRole.TankDestroyer,
  year: 1991,
  origin: TankOrigin.Italy,
  count: 490,
  mass: 24,
  engine: 520,
  range: { km: 800, mi: 500 },
  speed: { km: 108, mi: 67 },
};

export const Ariete: Tank = {
  name: 'Ariete',
  url: 'https://en.wikipedia.org/wiki/Ariete',
  role: TankRole.MBT,
  year: 1994,
  origin: TankOrigin.Italy,
  count: 200,
  mass: 54,
  engine: 1270,
  range: { km: 600, mi: 370 },
  speed: { km: 65, mi: 40 },
};
