import { Tank, TankType, TankOrigin } from "../types";

export const PT91: Tank = {
  name: 'PT-91 Twardy',
  url: 'https://en.wikipedia.org/wiki/PT-91_Twardy',
  type: TankType.MBT,
  year: 1993,
  origin: TankOrigin.Poland,
  count: 281,
  mass: 49,
  engine: 1000,
  range: [650, 400],
  speed: [70, 43],
};

export const TKS: Tank = {
  name: 'TKS',
  url: 'https://en.wikipedia.org/wiki/TKS',
  type: TankType.Tankette,
  year: 1931,
  origin: TankOrigin.Poland,
  count: 575,
  mass: 2,
  engine: 46,
  range: [200, 120],
  speed: [46, 29]
};
