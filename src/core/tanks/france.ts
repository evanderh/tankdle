import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

// World War II:
// Char B1
// Renault R35
// Somua S35

// Cold War:
// Panhard EBR (Armored Car)
// AMX-13 (Light Tank)
// AMX-30
// AMX-10 RC (Armored Car)

// Modern:
// Leclerc

export const CharB1: Tank = {
  name: 'Char B1',
  url: 'https://en.wikipedia.org/wiki/Char_B1',
  type: TankType.Heavy,
  year: 1935,
  origin: TankOrigin.France,
  count: 403,
  mass: 28,
  engine: 272,
  range: [200, 120],
  speed: [28, 17],
};

export const RenaultR35: Tank = {
  name: 'Renault R35',
  url: 'https://en.wikipedia.org/wiki/Renault_R35',
  type: TankType.Light,
  year: 1936,
  origin: TankOrigin.France,
  count: 1540,
  mass: 11,
  engine: 82,
  range: [130, 80],
  speed: [20, 12],
};

export const SOMUA: Tank = {
  name: 'Somua S35',
  url: 'https://en.wikipedia.org/wiki/SOMUA_S35',
  type: TankType.Medium,
  year: 1935,
  origin: TankOrigin.France,
  count: 440,
  mass: 20,
  engine: 190,
  range: [230, 140],
  speed: [40, 25],
};

export const EBR: Tank = {
  name: 'Panhard EBR',
  url: 'https://en.wikipedia.org/wiki/Panhard_EBR',
  type: TankType.ArmoredCar,
  year: 1951,
  origin: TankOrigin.France,
  count: 1179,
  mass: 13,
  engine: 200,
  range: [700, 430],
  speed: [115, 71],
};

export const AMX13: Tank = {
  name: 'AMX-13',
  url: 'https://en.wikipedia.org/wiki/AMX-13',
  type: TankType.Light,
  year: 1952,
  origin: TankOrigin.France,
  count: 7700,
  mass: 15,
  engine: 250,
  range: [400, 250],
  speed: [60, 37],
};

export const AMX30: Tank = {
  name: 'AMX-30',
  url: 'https://en.wikipedia.org/wiki/AMX-30',
  type: TankType.MBT,
  year: 1966,
  origin: TankOrigin.France,
  count: 3571,
  mass: 36,
  engine: 720,
  range: [600, 370],
  speed: [65, 40],
};

export const AMX10: Tank = {
  name: 'AMX-10 RC',
  url: 'https://en.wikipedia.org/wiki/AMX-10_RC',
  type: TankType.ArmoredCar,
  year: 1981,
  origin: TankOrigin.France,
  count: 464,
  mass: 16,
  engine: 250,
  range: [800, 500],
  speed: [85, 53],
};

export const Leclerc: Tank = {
  name: 'Leclerc',
  url: 'https://en.wikipedia.org/wiki/Leclerc_tank',
  type: TankType.MBT,
  year: 1990,
  origin: TankOrigin.France,
  count: 862,
  mass: 55,
  engine: 1500,
  range: [550, 340],
  speed: [71, 44],
};
