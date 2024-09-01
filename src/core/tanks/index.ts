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

import { Tank, TankImage, TankOrigin } from "../types";

export const tankImages: TankImage[] = [
  {
    tank: russia.T14,
    url: 'tanks/tank2.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:4mayrehearsal_09.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M1,
    url: 'tanks/tank1.jpg',
  },
  {
    tank: others.BobSemple,
    url: 'tanks/tank3.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Pratt,_J,_fl_1974_-_Photograph_of_tank_designed_by_Robert_Semple.jpg">Unidentified photographer</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: poland.TKS,
    url: 'tanks/tank4.jpg',
    attribution: 'Attribution, <a href="https://commons.wikimedia.org/w/index.php?curid=712156">Link</a>',
  },
];

export const tanks: Tank[] = [
  usa,
  germany,
  russia,
  uk,
  france,
  china,
  israel,
  italy,
  india,
  pakistan,
  iran,
  japan,
  taiwan,
  switzerland,
  poland,
  saf,
  others,
].flatMap(c => Object.values(c));

const utcStart = Date.UTC(2024, 8, 1);  // 2024-09-01
export const getTankImage = (index: string | null): TankImage => {
  if (index) {
    const ix = Number(index) - 1;
    if (!Number.isNaN(ix)) {
      return tankImages[ix % tankImages.length];
    }
  }

  const today = new Date();
  const utcToday = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());

  const diffTime = utcToday - utcStart;
  const daysSince = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return tankImages[daysSince % tankImages.length];
};

export const countryCode: {
  [key in TankOrigin]: string;
} = {
  [TankOrigin.USA]: 'us',
  [TankOrigin.Russia]: 'ru',
  [TankOrigin.Poland]: 'pl',
  [TankOrigin.NewZealand]: 'nz',
  [TankOrigin.UK]: 'gb',
  [TankOrigin.Soviet]: 'su',
  [TankOrigin.Japan]: 'jp',
  [TankOrigin.WestGermany]: 'de',
  [TankOrigin.Switzerland]: 'ch',
  [TankOrigin.France]: 'fr',
  [TankOrigin.Israel]: 'il',
  [TankOrigin.Sweden]: 'se',
  [TankOrigin.SouthAfrica]: 'za',
  [TankOrigin.China]: 'cn',
  [TankOrigin.Italy]: 'it',
  [TankOrigin.Argentina]: 'ar',
  [TankOrigin.Romania]: 'ro',
  [TankOrigin.Taiwan]: 'tw',
  [TankOrigin.Iran]: 'ir',
  [TankOrigin.Pakistan]: 'pk',
  [TankOrigin.Egypt]: 'eg',
  [TankOrigin.Ukraine]: 'ua',
  [TankOrigin.SouthKorea]: 'kr',
  [TankOrigin.NorthKorea]: 'kp',
  [TankOrigin.India]: 'in',
};
