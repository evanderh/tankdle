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
  range: [80, 50],
  speed: [24, 15],
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
  range: [210, 130],
  speed: [24, 15],
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
  range: [270, 170],
  speed: [64, 40],
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
  range: [140, 90],
  speed: [24, 14],
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
  range: [198, 123],
  speed: [52, 32],
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
  range: [230, 140],
  speed: [32, 20],
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
  range: [100, 62],
  speed: [34, 21],
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
  range: [500, 310],
  speed: [40, 25],
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
  range: [756, 470],
  speed: [72, 45],
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
  range: [450, 280],
  speed: [56, 35],
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
  range: [550, 340],
  speed: [59, 37],
};
