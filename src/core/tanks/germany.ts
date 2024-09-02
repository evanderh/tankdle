import { Tank } from "../types";
import { TankType } from "../types";
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
  type: TankType.Medium,
  year: 1939,
  origin: TankOrigin.NaziGermany,
  count: 5774,
  mass: 23,
  engine: 295,
  range: [165, 103],
  speed: [40, 25],
};

export const PanzerIV: Tank = {
  name: 'Panzer IV',
  url: 'https://en.wikipedia.org/wiki/Panzer_IV',
  type: TankType.Medium,
  year: 1936,
  origin: TankOrigin.NaziGermany,
  count: 8553,
  mass: 25,
  engine: 296,
  range: [320, 199],
  speed: [42, 26],
};

export const TigerI: Tank = {
  name: 'Tiger I',
  url: 'https://en.wikipedia.org/wiki/Tiger_I',
  type: TankType.Heavy,
  year: 1942,
  origin: TankOrigin.NaziGermany,
  count: 1347,
  mass: 54,
  engine: 690,
  range: [195, 121],
  speed: [45, 28],
};

export const TigerII: Tank = {
  name: 'Tiger II',
  url: 'https://en.wikipedia.org/wiki/Tiger_II',
  type: TankType.Heavy,
  year: 1944,
  origin: TankOrigin.NaziGermany,
  count: 492,
  mass: 69,
  engine: 690,
  range: [190, 120],
  speed: [42, 26],
};

export const Panther: Tank = {
  name: 'Panther',
  url: 'https://en.wikipedia.org/wiki/Panther_tank',
  type: TankType.Medium,
  year: 1943,
  origin: TankOrigin.NaziGermany,
  count: 6000,
  mass: 45,
  engine: 690,
  range: [260, 150],
  speed: [55, 34],
};

export const StuGIII: Tank = {
  name: 'StuG III',
  url: 'https://en.wikipedia.org/wiki/Sturmgesch%C3%BCtz_III',
  type: TankType.AssaultGun,
  year: 1940,
  origin: TankOrigin.NaziGermany,
  count: 11386,
  mass: 24,
  engine: 296,
  range: [155, 96],
  speed: [40, 25],
};

export const Jagdpanther: Tank = {
  name: 'Jagdpanther',
  url: 'https://en.wikipedia.org/wiki/Jagdpanther',
  type: TankType.TankDestroyer,
  year: 1943,
  origin: TankOrigin.NaziGermany,
  count: 413,
  mass: 45,
  engine: 690,
  range: [260, 160],
  speed: [46, 29],
};

export const Elefant: Tank = {
  name: 'Elefant',
  url: 'https://en.wikipedia.org/wiki/Elefant',
  type: TankType.TankDestroyer,
  year: 1943,
  origin: TankOrigin.NaziGermany,
  count: 91,
  mass: 65,
  engine: 592,
  range: [150, 93],
  speed: [30, 19],
};

export const Maus: Tank = {
  name: 'Panzer VIII Maus',
  url: 'https://en.wikipedia.org/wiki/Panzer_VIII_Maus',
  type: TankType.SuperHeavy,
  year: 1944,
  origin: TankOrigin.NaziGermany,
  count: 2,
  mass: 188,
  engine: 1200,
  range: [160, 99],
  speed: [20, 12],
};

export const Leopard1: Tank = {
  name: 'Leopard 1',
  url: 'https://en.wikipedia.org/wiki/Leopard_1',
  type: TankType.MBT,
  year: 1961,
  origin: TankOrigin.WestGermany,
  count: 4744,
  mass: 40,
  engine: 819,
  range: [600, 372],
  speed: [65, 40],
};

export const Leopard2: Tank = {
  name: 'Leopard 2',
  url: 'https://en.wikipedia.org/wiki/Leopard_2',
  type: TankType.MBT,
  year: 1979,
  origin: TankOrigin.WestGermany,
  count: 3600,
  mass: 62,
  engine: 1500,
  range: [340, 210],
  speed: [70, 43],
};
