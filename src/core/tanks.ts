import { daysSinceStartDate } from "./date";

export type Tank = {
  name: string;
  aliases?: string[],
};

export type TankImage = {
  tank: Tank;
  url: string;
  attribution?: string;
};

const BOB_SEMPLE: Tank = {
  name: 'Bob Semple',
};
const T14_ARMATA: Tank = {
  name: 'T-14 Armata',
  aliases: ['T-14', 'T 14', 'Armata'],
};
const M1_ABRAMS: Tank = {
  name: 'M1 Abrams',
  aliases: ['M1', 'Abrams'],
};

export const tanks: Tank[] = [
  BOB_SEMPLE,
  T14_ARMATA,
  M1_ABRAMS,
];

export const tankImages: TankImage[] = [
  {
    tank: BOB_SEMPLE,
    url: 'tanks/tank3.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Pratt,_J,_fl_1974_-_Photograph_of_tank_designed_by_Robert_Semple.jpg">Unidentified photographer</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: T14_ARMATA,
    url: 'tanks/tank2.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:4mayrehearsal_09.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: M1_ABRAMS,
    url: 'tanks/tank1.jpg',
  },
];

export const getTankImage = (index: string | null): TankImage => {
  if (index) {
    const ix = Number(index) - 1;
    if (!Number.isNaN(ix)) {
      return tankImages[ix % tankImages.length];
    }
  }

  const daysSince = daysSinceStartDate();
  return tankImages[daysSince % tankImages.length];
};
