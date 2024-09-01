import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

export const Vijayanta: Tank = {
  name: 'Vijayanta',
  url: 'https://en.wikipedia.org/wiki/Vijayanta',
  type: TankType.MBT,
  year: 1964,
  origin: TankOrigin.India,
  count: 2200,
  mass: 39,
  engine: 535,
  range: [530, 330],
  speed: [50, 31],
};

export const Arjun: Tank = {
  name: 'Arjun',
  url: 'https://en.wikipedia.org/wiki/Arjun_MBT',
  type: TankType.MBT,
  year: 2004,
  origin: TankOrigin.India,
  count: 141,
  mass: 59,
  engine: 1400,
  range: [450, 280],
  speed: [70, 43],
};
