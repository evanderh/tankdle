import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

export const CM11: Tank = {
  name: 'CM-11 Brave Tiger',
  url: 'https://en.wikipedia.org/wiki/CM-11_Brave_Tiger',
  role: TankRole.MBT,
  year: 1988,
  origin: TankOrigin.Taiwan,
  count: 450,
  mass: 50,
  engine: 750,
  range: [480, 300],
  speed: [48, 30],
};

export const CM12: Tank = {
  name: 'CM-12',
  url: 'https://en.wikipedia.org/wiki/CM-12_tank',
  role: TankRole.MBT,
  year: 1990,
  origin: TankOrigin.Taiwan,
  count: 100,
  mass: 49,
  engine: 750,
  range: [203, 100],
  speed: [48, 30],
};
