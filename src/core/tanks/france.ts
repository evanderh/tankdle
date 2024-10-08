import { Tank, TankRole, TankOrigin } from "../types";

// World War I:
// Renault FT-17

// World War II:
// Char B1
// Hotchkiss H35
// Renault R35
// Somua S35

// Cold War:
// Panhard EBR (Armored Car)
// AMX-13 (Light Tank)
// AMX-30
// AMX-10P (Infantry Fighting Vehicle)
// AMX-10 RC (Reconnaissance Vehicle)

// Modern:
// Leclerc

export const RenaultFT17: Tank = {
  name: 'Renault FT-17',
  url: 'https://en.wikipedia.org/wiki/Renault_FT',
  role: TankRole.Light,
  year: 1917,
  origin: TankOrigin.France,
  count: 3000,
  mass: 7,
  engine: 39,
  range: { km: 60, mi: 37 },
  speed: { km: 7, mi: 4 },
};

export const B1: Tank = {
  name: 'Char B1',
  url: 'https://en.wikipedia.org/wiki/Char_B1',
  role: TankRole.Heavy,
  year: 1935,
  origin: TankOrigin.France,
  count: 403,
  mass: 28,
  engine: 272,
  range: { km: 200, mi: 120 },
  speed: { km: 28, mi: 17 },
};

export const H35: Tank = {
  name: 'Hotchkiss H35',
  url: 'https://en.wikipedia.org/wiki/Hotchkiss_H35',
  role: TankRole.Light,
  year: 1936,
  origin: TankOrigin.France,
  count: 1200,
  mass: 11,
  engine: 78,
  range: { km: 129, mi: 80 },
  speed: { km: 28, mi: 17 },
};

export const R35: Tank = {
  name: 'Renault R35',
  url: 'https://en.wikipedia.org/wiki/Renault_R35',
  role: TankRole.Light,
  year: 1936,
  origin: TankOrigin.France,
  count: 1540,
  mass: 11,
  engine: 82,
  range: { km: 130, mi: 80 },
  speed: { km: 20, mi: 12 },
};

export const S35: Tank = {
  name: 'Somua S35',
  url: 'https://en.wikipedia.org/wiki/SOMUA_S35',
  role: TankRole.Medium,
  year: 1935,
  origin: TankOrigin.France,
  count: 440,
  mass: 20,
  engine: 190,
  range: { km: 230, mi: 140 },
  speed: { km: 40, mi: 25 },
};

export const EBR: Tank = {
  name: 'Panhard EBR',
  url: 'https://en.wikipedia.org/wiki/Panhard_EBR',
  role: TankRole.ArmoredCar,
  year: 1951,
  origin: TankOrigin.France,
  count: 1179,
  mass: 13,
  engine: 200,
  range: { km: 700, mi: 430 },
  speed: { km: 115, mi: 71 },
};

export const AMX13: Tank = {
  name: 'AMX-13',
  url: 'https://en.wikipedia.org/wiki/AMX-13',
  role: TankRole.Light,
  year: 1952,
  origin: TankOrigin.France,
  count: 7700,
  mass: 15,
  engine: 250,
  range: { km: 400, mi: 250 },
  speed: { km: 60, mi: 37 },
};

export const AMX30: Tank = {
  name: 'AMX-30',
  url: 'https://en.wikipedia.org/wiki/AMX-30',
  role: TankRole.MBT,
  year: 1966,
  origin: TankOrigin.France,
  count: 3571,
  mass: 36,
  engine: 720,
  range: { km: 600, mi: 370 },
  speed: { km: 65, mi: 40 },
};

export const AMX10P: Tank = {
  name: 'AMX-10P',
  url: 'https://en.wikipedia.org/wiki/AMX-10P',
  role: TankRole.IFV,
  year: 1973,
  origin: TankOrigin.France,
  count: 1750,
  mass: 14,
  engine: 275,
  range: { km: 600, mi: 370 },
  speed: { km: 65, mi: 40 },
};

export const AMX10RC: Tank = {
  name: 'AMX-10 RC',
  url: 'https://en.wikipedia.org/wiki/AMX-10_RC',
  role: TankRole.ReconnaissanceVehicle,
  year: 1981,
  origin: TankOrigin.France,
  count: 464,
  mass: 16,
  engine: 250,
  range: { km: 800, mi: 500 },
  speed: { km: 85, mi: 53 },
};

export const Leclerc: Tank = {
  name: 'Leclerc',
  url: 'https://en.wikipedia.org/wiki/Leclerc_tank',
  role: TankRole.MBT,
  year: 1990,
  origin: TankOrigin.France,
  count: 862,
  mass: 55,
  engine: 1500,
  range: { km: 550, mi: 340 },
  speed: { km: 71, mi: 44 },
};
