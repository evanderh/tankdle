import { daysSinceStartDate } from "./date";

export type Tank = {
  url: string;
  name: string;
  attribution?: string;
};

export const tankImages: Tank[] = [
  {
    url: 'tanks/tank3.jpg',
    name: 'Bob Semple',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Pratt,_J,_fl_1974_-_Photograph_of_tank_designed_by_Robert_Semple.jpg">Unidentified photographer</a>, Public domain, via Wikimedia Commons',
  },
  {
    url: 'tanks/tank2.jpg',
    name: 'T-14 Armata',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:4mayrehearsal_09.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    url: 'tanks/tank1.jpg',
    name: 'M1 Abrams',
  },
];

export const getDailyTank = (): Tank => {
  const daysSince = daysSinceStartDate();
  return tankImages[daysSince % tankImages.length];
};
