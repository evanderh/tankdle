import { daysSinceStartDate } from "../date";

import * as usa from "./usa";
import * as germany from "./germany";
import * as russia from "./russia";
import * as uk from "./uk";
import * as france from './france';
import * as china from './china';
import * as israel from './israel';
import * as italy from './italy';
import * as india from "./india";
import * as pakistan from "./pakistan";
import * as iran from "./iran";
import * as japan from "./japan";
import * as taiwan from "./taiwan";
import * as switzerland from "./switzerland";
import * as poland from "./poland";
import * as saf from './saf';
import * as others from "./others";

import { Tank, TankImage } from "../types";

export const tankImages: TankImage[] = [
  {
    tank: poland.TKS,
    url: 'tanks/tank4.jpg',
    attribution: 'Attribution, <a href="https://commons.wikimedia.org/w/index.php?curid=712156">Link</a>',
  },
  {
    tank: others.BobSemple,
    url: 'tanks/tank3.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Pratt,_J,_fl_1974_-_Photograph_of_tank_designed_by_Robert_Semple.jpg">Unidentified photographer</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: russia.T14,
    url: 'tanks/tank2.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:4mayrehearsal_09.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M1,
    url: 'tanks/tank1.jpg',
  },
];

export const tanks: Tank[] = [
  ...Object.values(usa),
  ...Object.values(germany),
  ...Object.values(russia),
  ...Object.values(uk),
  ...Object.values(france),
  ...Object.values(china),
  ...Object.values(israel),
  ...Object.values(italy),
  ...Object.values(india),
  ...Object.values(pakistan),
  ...Object.values(iran),
  ...Object.values(japan),
  ...Object.values(taiwan),
  ...Object.values(switzerland),
  ...Object.values(poland),
  ...Object.values(saf),
  ...Object.values(others),
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
