
import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

// Brazil: EE-T1 Osório
// Turkey: Altay

// S Korea: K2 Black Panther
// Romania: TR-85
// Egypt: Ramses II
// Ukraine: T-84
// Sweden: Stridsvagn 103 (S-Tank)
// New Zealand: Bob Semple

export const K2: Tank = {
  name: 'K2 Black Panther',
  url: 'https://en.wikipedia.org/wiki/K2_Black_Panther',
  role: TankRole.MBT,
  year: 2008,
  origin: TankOrigin.SouthKorea,
  count: 260,
  mass: 56,
  engine: 1500,
  range: { km: 450, mi: 280 },
  speed: { km: 70, mi: 43 },
};

export const TR85: Tank = {
  name: 'TR-85',
  url: 'https://en.wikipedia.org/wiki/TR-85',
  role: TankRole.MBT,
  year: 1986,
  origin: TankOrigin.Romania,
  count: 617,
  mass: 42,
  engine: 830,
  range: { km: 400, mi: 250 },
  speed: { km: 60, mi: 37 },
};

export const RamsesII: Tank = {
  name: 'Ramses II',
  url: 'https://en.wikipedia.org/wiki/Ramses_II_tank',
  role: TankRole.MBT,
  year: 2004,
  origin: TankOrigin.Egypt,
  count: 425,
  mass: 48,
  engine: 908,
  range: { km: 530, mi: 330 },
  speed: { km: 69, mi: 43 },
};

export const T84: Tank = {
  name: 'T-84',
  url: 'https://en.wikipedia.org/wiki/T-84',
  role: TankRole.MBT,
  year: 1994,
  origin: TankOrigin.Ukraine,
  count: 425,
  mass: 51,
  engine: 1200,
  range: { km: 500, mi: 310 },
  speed: { km: 70, mi: 43 },
};

export const Strv103: Tank = {
  name: 'Stridsvagn 103 (S-Tank)',
  url: 'https://en.wikipedia.org/wiki/Stridsvagn_103',
  role: TankRole.MBT,
  year: 1963,
  origin: TankOrigin.Sweden,
  count: 290,
  mass: 42,
  engine: 780,
  range: { km: 390, mi: 240 },
  speed: { km: 60, mi: 37 },
};

export const BobSemple: Tank = {
  name: 'Bob Semple',
  url: 'https://en.wikipedia.org/wiki/Bob_Semple_tank',
  role: TankRole.Light,
  year: 1940,
  origin: TankOrigin.NewZealand,
  count: 3,
  mass: 25,
  engine: 127,
  range: { km: 160, mi: 99 },
  speed: { km: 24, mi: 15 },
};

export const TAM: Tank = {
  name: 'Tanque Argentino Mediano',
  url: 'https://en.wikipedia.org/wiki/Tanque_Argentino_Mediano',
  role: TankRole.MBT,
  year: 1979,
  origin: TankOrigin.Argentina,
  count: 280,
  mass: 31,
  engine: 720,
  range: { km: 580, mi: 370 },
  speed: { km: 75, mi: 47 },
};
