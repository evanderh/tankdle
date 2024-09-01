import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

// Carro Armato M13/40
// P40
// OF-40
// Ariete
// Fiat 2000 (WWI-era Heavy Tank)

export const OF40: Tank = {
  name: 'OF-40',
  url: 'https://en.wikipedia.org/wiki/OF-40',
  type: TankType.MBT,
  year: 1980,
  origin: TankOrigin.Italy,
  count: 39,
  mass: 46,
  engine: 820,
  range: [600, 370],
  speed: [60, 37],
};

export const Ariete: Tank = {
  name: 'Ariete',
  url: 'https://en.wikipedia.org/wiki/Ariete',
  type: TankType.MBT,
  year: 1994,
  origin: TankOrigin.Italy,
  count: 200,
  mass: 54,
  engine: 1270,
  range: [600, 370],
  speed: [65, 40],
};
