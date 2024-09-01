import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

export const Panzer61: Tank = {
  name: 'Panzer 61',
  url: 'https://en.wikipedia.org/wiki/Panzer_61',
  type: TankType.MBT,
  year: 1957,
  origin: TankOrigin.Switzerland,
  count: 150,
  mass: 39,
  engine: 630,
  range: [250, 160],
  speed: [55, 34],
};

export const Panzer68: Tank = {
  name: 'Panzer 68',
  url: 'https://en.wikipedia.org/wiki/Panzer_68',
  type: TankType.MBT,
  year: 1971,
  origin: TankOrigin.Switzerland,
  count: 390,
  mass: 41,
  engine: 660,
  range: [200, 120],
  speed: [55, 34],
};
