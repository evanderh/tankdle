import { daysSinceStartDate } from "./date";

export type Tank = {
  url: string;
  name: string;
  aliases?: string[],
  attribution?: string;
};

export const tanks: Tank[] = [
  {
    url: 'tanks/tank3.jpg',
    name: 'Bob Semple',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Pratt,_J,_fl_1974_-_Photograph_of_tank_designed_by_Robert_Semple.jpg">Unidentified photographer</a>, Public domain, via Wikimedia Commons',
  },
  {
    url: 'tanks/tank2.jpg',
    name: 'T-14 Armata',
    aliases: ['T-14', 'T 14', 'Armata'],
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:4mayrehearsal_09.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    url: 'tanks/tank1.jpg',
    name: 'M1 Abrams',
    aliases: ['M1', 'Abrams'],
  },
];

export const getTank = (index: string | null): Tank => {
  if (index) {
    const ix = Number(index) - 1;
    if (!Number.isNaN(ix)) {
      return tanks[ix % tanks.length];
    }
  }

  const daysSince = daysSinceStartDate();
  return tanks[daysSince % tanks.length];
};
