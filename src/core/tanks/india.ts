import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

export const Vijayanta: Tank = {
  name: 'Vijayanta',
  url: 'https://en.wikipedia.org/wiki/Vijayanta',
  role: TankRole.MBT,
  year: 1964,
  origin: TankOrigin.India,
  count: 2200,
  mass: 39,
  engine: 535,
  range: { km: 530, mi: 330 },
  speed: { km: 50, mi: 31 },
};

export const Arjun: Tank = {
  name: 'Arjun',
  url: 'https://en.wikipedia.org/wiki/Arjun_MBT',
  role: TankRole.MBT,
  year: 2004,
  origin: TankOrigin.India,
  count: 141,
  mass: 59,
  engine: 1400,
  range: { km: 450, mi: 280 },
  speed: { km: 70, mi: 43 },
};
