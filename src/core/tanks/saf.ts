import { Tank, TankRole, TankOrigin  } from "../types";

export const K1: Tank = {
  name: 'K1 (Type 88)',
  url: 'https://en.wikipedia.org/wiki/K1_tank',
  role: TankRole.MBT,
  year: 1985,
  origin: TankOrigin.SouthAfrica,
  count: 1027,
  mass: 51,
  engine: 1200,
  range: { km: 500, mi: 310 },
  speed: { km: 65, mi: 40 },
};

export const Olifant: Tank = {
  name: 'Olifant',
  url: 'https://en.wikipedia.org/wiki/Olifant_(tank)',
  role: TankRole.MBT,
  year: 1974,
  origin: TankOrigin.SouthAfrica,
  count: 224,
  mass: 58,
  engine: 650,
  range: { km: 100, mi: 62 },
  speed: { km: 34, mi: 21 },
};

