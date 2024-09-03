import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

export const AlZarrar: Tank = {
  name: 'Al-Zarrar',
  url: 'https://en.wikipedia.org/wiki/Al-Zarrar_tank',
  role: TankRole.MBT,
  year: 2003,
  origin: TankOrigin.Pakistan,
  count: 750,
  mass: 44,
  engine: 730,
  range: [450, 280],
  speed: [65, 40],
};

export const AlKhalid: Tank = {
  name: 'Al-Khalid',
  url: 'https://en.wikipedia.org/wiki/Al-Khalid/VT-1A',
  role: TankRole.MBT,
  year: 2001,
  origin: TankOrigin.Pakistan,
  count: 1144,
  mass: 46,
  engine: 1200,
  range: [500, 310],
  speed: [72, 45],
};
