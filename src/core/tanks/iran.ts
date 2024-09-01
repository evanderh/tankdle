import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

export const Type72Z: Tank = {
  name: 'Type 72Z',
  url: 'https://en.wikipedia.org/wiki/Type_72Z',
  type: TankType.MBT,
  year: 1996,
  origin: TankOrigin.Iran,
  count: 400,
  mass: 36,
  engine: 780,
  range: [440, 275],
  speed: [65, 40],
};

export const ZulfiqarI: Tank = {
  name: 'Zulfiqar I',
  url: 'https://en.wikipedia.org/wiki/Zulfiqar_(tank)',
  type: TankType.MBT,
  year: 1993,
  origin: TankOrigin.Iran,
  count: 400,
  mass: 52,
  engine: 780,
  range: [450, 280],
  speed: [65, 40],
};

export const ZulfiqarIII: Tank = {
  name: 'Zulfiqar III',
  url: 'https://en.wikipedia.org/wiki/Zulfiqar_(tank)#Zulfiqar-3',
  type: TankType.MBT,
  year: 1999,
  origin: TankOrigin.Iran,
  count: 750,
  mass: 44,
  engine: 1000,
  range: [450, 280],
  speed: [75, 47],
};
