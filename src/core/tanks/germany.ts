import { Tank } from "../types";
import { TankType } from "../types";
import { TankOrigin } from "../types";

// World War II:
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
// Sd.Kfz. 234 Puma (Armored Car)
// Maus (Super Heavy Tank, Experimental)
// E-100 (Super Heavy Tank, Experimental)
// Neubaufahrzeug (Multi-turreted Tank)

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
