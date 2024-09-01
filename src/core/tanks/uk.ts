import { Tank } from "../types";
import { TankType } from "../types";
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

// Other:
// Fox Armored Reconnaissance Vehicle (Armored Car)

export const Centurion: Tank = {
  name: 'Centurion',
  url: 'https://en.wikipedia.org/wiki/Centurion_(tank)',
  type: TankType.MBT,
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
  type: TankType.MBT,
  year: 1959,
  origin: TankOrigin.UK,
  count: 1896,
  mass: 56,
  engine: 750,
  range: [500, 310],
  speed: [40, 25],
};

export const Challenger1: Tank = {
  name: 'Challenger 1',
  url: 'https://en.wikipedia.org/wiki/Challenger_1',
  type: TankType.MBT,
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
  type: TankType.MBT,
  year: 1986,
  origin: TankOrigin.UK,
  count: 447,
  mass: 64,
  engine: 1200,
  range: [550, 340],
  speed: [59, 37],
};
