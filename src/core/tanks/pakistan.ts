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
  range: { km: 450, mi: 280 },
  speed: { km: 65, mi: 40 },
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
  range: { km: 500, mi: 310 },
  speed: { km: 72, mi: 45 },
};
