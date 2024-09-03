import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

export const Panzer61: Tank = {
  name: 'Panzer 61',
  url: 'https://en.wikipedia.org/wiki/Panzer_61',
  role: TankRole.MBT,
  year: 1957,
  origin: TankOrigin.Switzerland,
  count: 150,
  mass: 39,
  engine: 630,
  range: { km: 250, mi: 160 },
  speed: { km: 55, mi: 34 },
};

export const Panzer68: Tank = {
  name: 'Panzer 68',
  url: 'https://en.wikipedia.org/wiki/Panzer_68',
  role: TankRole.MBT,
  year: 1971,
  origin: TankOrigin.Switzerland,
  count: 390,
  mass: 41,
  engine: 660,
  range: { km: 200, mi: 120 },
  speed: { km: 55, mi: 34 },
};
