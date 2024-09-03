import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

// World War II:
// Panzer III
// Panzer IV
// Tiger I
// Tiger II (King Tiger)
// Panther
// StuG III (Assault Gun)
// Jagdpanther (Tank Destroyer)
// Elefant (Tank Destroyer)

// Cold War:
// Leopard 1

// Modern:
// Leopard 2 (A4, A5, A6, A7)

// Other:
// Maus (Super Heavy Tank, Experimental)

export const PanzerIII: Tank = {
  name: 'Panzer III',
  url: 'https://en.wikipedia.org/wiki/Panzer_III',
  role: TankRole.Medium,
  year: 1939,
  origin: TankOrigin.NaziGermany,
  count: 5774,
  mass: 23,
  engine: 295,
  range: { km: 165, mi: 103 },
  speed: { km: 40, mi: 25 },
};

export const PanzerIV: Tank = {
  name: 'Panzer IV',
  url: 'https://en.wikipedia.org/wiki/Panzer_IV',
  role: TankRole.Medium,
  year: 1936,
  origin: TankOrigin.NaziGermany,
  count: 8553,
  mass: 25,
  engine: 296,
  range: { km: 320, mi: 199 },
  speed: { km: 42, mi: 26 },
};

export const TigerI: Tank = {
  name: 'Tiger I',
  url: 'https://en.wikipedia.org/wiki/Tiger_I',
  role: TankRole.Heavy,
  year: 1942,
  origin: TankOrigin.NaziGermany,
  count: 1347,
  mass: 54,
  engine: 690,
  range: { km: 195, mi: 121 },
  speed: { km: 45, mi: 28 },
};

export const TigerII: Tank = {
  name: 'Tiger II',
  url: 'https://en.wikipedia.org/wiki/Tiger_II',
  role: TankRole.Heavy,
  year: 1944,
  origin: TankOrigin.NaziGermany,
  count: 492,
  mass: 69,
  engine: 690,
  range: { km: 190, mi: 120 },
  speed: { km: 42, mi: 26 },
};

export const Panther: Tank = {
  name: 'Panther',
  url: 'https://en.wikipedia.org/wiki/Panther_tank',
  role: TankRole.Medium,
  year: 1943,
  origin: TankOrigin.NaziGermany,
  count: 6000,
  mass: 45,
  engine: 690,
  range: { km: 260, mi: 150 },
  speed: { km: 55, mi: 34 },
};

export const StuGIII: Tank = {
  name: 'StuG III',
  url: 'https://en.wikipedia.org/wiki/Sturmgesch%C3%BCtz_III',
  role: TankRole.AssaultGun,
  year: 1940,
  origin: TankOrigin.NaziGermany,
  count: 11386,
  mass: 24,
  engine: 296,
  range: { km: 155, mi: 96 },
  speed: { km: 40, mi: 25 },
};

export const Jagdpanther: Tank = {
  name: 'Jagdpanther',
  url: 'https://en.wikipedia.org/wiki/Jagdpanther',
  role: TankRole.TankDestroyer,
  year: 1943,
  origin: TankOrigin.NaziGermany,
  count: 413,
  mass: 45,
  engine: 690,
  range: { km: 260, mi: 160 },
  speed: { km: 46, mi: 29 },
};

export const Elefant: Tank = {
  name: 'Elefant',
  url: 'https://en.wikipedia.org/wiki/Elefant',
  role: TankRole.TankDestroyer,
  year: 1943,
  origin: TankOrigin.NaziGermany,
  count: 91,
  mass: 65,
  engine: 592,
  range: { km: 150, mi: 93 },
  speed: { km: 30, mi: 19 },
};

export const Maus: Tank = {
  name: 'Panzer VIII Maus',
  url: 'https://en.wikipedia.org/wiki/Panzer_VIII_Maus',
  role: TankRole.SuperHeavy,
  year: 1944,
  origin: TankOrigin.NaziGermany,
  count: 2,
  mass: 188,
  engine: 1200,
  range: { km: 160, mi: 99 },
  speed: { km: 20, mi: 12 },
};

export const Leopard1: Tank = {
  name: 'Leopard 1',
  url: 'https://en.wikipedia.org/wiki/Leopard_1',
  role: TankRole.MBT,
  year: 1961,
  origin: TankOrigin.WestGermany,
  count: 4744,
  mass: 40,
  engine: 819,
  range: { km: 600, mi: 372 },
  speed: { km: 65, mi: 40 },
};

export const Leopard2: Tank = {
  name: 'Leopard 2',
  url: 'https://en.wikipedia.org/wiki/Leopard_2',
  role: TankRole.MBT,
  year: 1979,
  origin: TankOrigin.WestGermany,
  count: 3600,
  mass: 62,
  engine: 1500,
  range: { km: 340, mi: 210 },
  speed: { km: 70, mi: 43 },
};
