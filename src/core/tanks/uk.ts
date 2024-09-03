import { Tank } from "../types";
import { TankRole } from "../types";
import { TankOrigin } from "../types";

// World War II:
// Matilda II
// Churchill
// Cromwell
// Valentine
// Comet
// Archer (Tank Destroyer)

// Cold War:
// Centurion
// Chieftain
// FV101 Scorpion (Light Tank)
// Challenger 1

// Modern:
// Challenger 2

export const MatildaII: Tank = {
  name: 'Matilda II',
  url: 'https://en.wikipedia.org/wiki/Matilda_II',
  role: TankRole.Heavy,
  year: 1937,
  origin: TankOrigin.UK,
  count: 2987,
  mass: 25,
  engine: 190,
  range: { km: 80, mi: 50 },
  speed: { km: 24, mi: 15 },
};

export const Churchill: Tank = {
  name: 'Churchill',
  url: 'https://en.wikipedia.org/wiki/Churchill_tank',
  role: TankRole.Heavy,
  year: 1941,
  origin: TankOrigin.UK,
  count: 5640,
  mass: 40,
  engine: 350,
  range: { km: 210, mi: 130 },
  speed: { km: 24, mi: 15 },
};

export const Cromwell: Tank = {
  name: 'Cromwell',
  url: 'https://en.wikipedia.org/wiki/Cromwell_tank',
  role: TankRole.Medium,
  year: 1942,
  origin: TankOrigin.UK,
  count: 4016,
  mass: 28,
  engine: 600,
  range: { km: 270, mi: 170 },
  speed: { km: 64, mi: 40 },
};

export const Valentine: Tank = {
  name: 'Valentine',
  url: 'https://en.wikipedia.org/wiki/Valentine_tank',
  role: TankRole.Light,
  year: 1940,
  origin: TankOrigin.UK,
  count: 8275,
  mass: 16,
  engine: 210,
  range: { km: 140, mi: 90 },
  speed: { km: 24, mi: 14 },
};

export const Comet: Tank = {
  name: 'Comet',
  url: 'https://en.wikipedia.org/wiki/Comet_(tank)',
  role: TankRole.Medium,
  year: 1944,
  origin: TankOrigin.UK,
  count: 1200,
  mass: 36,
  engine: 600,
  range: { km: 198, mi: 123 },
  speed: { km: 52, mi: 32 },
};

export const Archer: Tank = {
  name: 'Archer',
  url: 'https://en.wikipedia.org/wiki/Archer_(tank_destroyer)',
  role: TankRole.TankDestroyer,
  year: 1943,
  origin: TankOrigin.UK,
  count: 655,
  mass: 15,
  engine: 192,
  range: { km: 230, mi: 140 },
  speed: { km: 32, mi: 20 },
};

export const Centurion: Tank = {
  name: 'Centurion',
  url: 'https://en.wikipedia.org/wiki/Centurion_(tank)',
  role: TankRole.MBT,
  year: 1945,
  origin: TankOrigin.UK,
  count: 4423,
  mass: 51,
  engine: 650,
  range: { km: 100, mi: 62 },
  speed: { km: 34, mi: 21 },
};

export const Chieftain: Tank = {
  name: 'FV 4201 Cheiftain',
  url: 'https://en.wikipedia.org/wiki/Chieftain_(tank)',
  role: TankRole.MBT,
  year: 1959,
  origin: TankOrigin.UK,
  count: 1896,
  mass: 56,
  engine: 750,
  range: { km: 500, mi: 310 },
  speed: { km: 40, mi: 25 },
};

export const Scorpion: Tank = {
  name: 'FV101 Scorpion',
  url: 'https://en.wikipedia.org/wiki/FV101_Scorpion',
  role: TankRole.Light,
  year: 1972,
  origin: TankOrigin.UK,
  count: 3000,
  mass: 9,
  engine: 190,
  range: { km: 756, mi: 470 },
  speed: { km: 72, mi: 45 },
};

export const Challenger1: Tank = {
  name: 'Challenger 1',
  url: 'https://en.wikipedia.org/wiki/Challenger_1',
  role: TankRole.MBT,
  year: 1983,
  origin: TankOrigin.UK,
  count: 420,
  mass: 62,
  engine: 1200,
  range: { km: 450, mi: 280 },
  speed: { km: 56, mi: 35 },
};

export const Challenger2: Tank = {
  name: 'Challenger 2',
  url: 'https://en.wikipedia.org/wiki/Challenger_2',
  role: TankRole.MBT,
  year: 1986,
  origin: TankOrigin.UK,
  count: 447,
  mass: 64,
  engine: 1200,
  range: { km: 550, mi: 340 },
  speed: { km: 59, mi: 37 },
};
