import { Tank, TankRole, TankOrigin } from "../types";

export const PT91: Tank = {
  name: 'PT-91 Twardy',
  url: 'https://en.wikipedia.org/wiki/PT-91_Twardy',
  role: TankRole.MBT,
  year: 1993,
  origin: TankOrigin.Poland,
  count: 281,
  mass: 49,
  engine: 1000,
  range: { km: 650, mi: 400 },
  speed: { km: 70, mi: 43 },
};

export const TKS: Tank = {
  name: 'TKS',
  url: 'https://en.wikipedia.org/wiki/TKS',
  role: TankRole.Tankette,
  year: 1931,
  origin: TankOrigin.Poland,
  count: 575,
  mass: 2,
  engine: 46,
  range: { km: 200, mi: 120 },
  speed: { km: 46, mi: 29 }
};
