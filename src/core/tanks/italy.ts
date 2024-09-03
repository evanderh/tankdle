import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

// M13/40
// P 26/40
// OF-40
// Ariete

export const M13_40: Tank = {
  name: 'M13/40',
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
