import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

// Cold War:
// Merkava Mark I
// Merkava Mark II

// Modern:
// Merkava Mark III
// Merkava Mark IV

export const MerkavaMark1: Tank = {
  name: 'Merkava Mark I',
  url: 'https://en.wikipedia.org/wiki/Merkava',
  role: TankRole.MBT,
  year: 1979,
  origin: TankOrigin.Israel,
  count: 250,
  mass: 61,
  engine: 908,
  range: { km: 500, mi: 310 },
  speed: { km: 46, mi: 29 }
};

export const MerkavaMark2: Tank = {
  name: 'Merkava Mark II',
  url: 'https://en.wikipedia.org/wiki/Merkava#Merkava_Mark_2',
  role: TankRole.MBT,
  year: 1983,
  origin: TankOrigin.Israel,
  count: 580,
  mass: 62,
  engine: 950,
  range: { km: 500, mi: 310 },
  speed: { km: 55, mi: 34 }
};

export const MerkavaMark3: Tank = {
  name: 'Merkava III',
  url: 'https://en.wikipedia.org/wiki/Merkava#Merkava_Mark_3',
  role: TankRole.MBT,
  year: 1989,
  origin: TankOrigin.Israel,
  count: 780,
  mass: 64,
  engine: 1200,
  range: { km: 500, mi: 310 },
  speed: { km: 60, mi: 37 },
};

export const MerkavaMark4: Tank = {
  name: 'Merkava IV',
  url: 'https://en.wikipedia.org/wiki/Merkava#Merkava_Mark_4',
  role: TankRole.MBT,
  year: 2003,
  origin: TankOrigin.Israel,
  count: 360,
  mass: 65,
  engine: 1500,
  range: { km: 500, mi: 310 },
  speed: { km: 64, mi: 40 },
};
