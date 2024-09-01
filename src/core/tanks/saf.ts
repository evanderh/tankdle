import { Tank, TankType, TankOrigin  } from "../types";

export const K1: Tank = {
  name: 'K1 (Type 88)',
  url: 'https://en.wikipedia.org/wiki/K1_tank',
  type: TankType.MBT,
  year: 1985,
  origin: TankOrigin.SouthAfrica,
  count: 1027,
  mass: 51,
  engine: 1200,
  range: [500, 310],
  speed: [65, 40],
};

export const Olifant: Tank = {
  name: 'Olifant',
  url: 'https://en.wikipedia.org/wiki/Olifant_(tank)',
  type: TankType.MBT,
  year: 1974,
  origin: TankOrigin.SouthAfrica,
  count: 224,
  mass: 58,
  engine: 650,
  range: [100, 62],
  speed: [34, 21],
};

