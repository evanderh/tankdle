import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

// World War II:
// Char B1
// Renault R35
// Somua S35

// Cold War:
// AMX-30
// AMX-13 (Light Tank)

// Modern:
// Leclerc

// Other:
// AMX-10 RC (Armored Reconnaissance Vehicle)
// EBR (Panhard)
// AMX-50 (Experimental)

export const AMX30: Tank = {
  name: 'AMX 30',
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
