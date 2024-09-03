import * as usa from "./usa";
import * as germany from "./germany";
import * as russia from "./russia";
import * as uk from "./uk";
import * as france from './france';
import * as china from './china';
import * as israel from './israel';
import * as italy from './italy';
import * as japan from "./japan";
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
    tank: others.TKS,
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
  japan,
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
  [TankOrigin.Australia]: 'au',
  [TankOrigin.Argentina]: 'ar',
  [TankOrigin.Brazil]: 'br',
  [TankOrigin.Canada]: 'ca',
  [TankOrigin.China]: 'cn',
  [TankOrigin.Czech]: 'cz',
  [TankOrigin.Egypt]: 'eg',
  [TankOrigin.France]: 'fr',
  [TankOrigin.Germany]: 'de',
  [TankOrigin.Hungary]: 'hu',
  [TankOrigin.India]: 'in',
  [TankOrigin.Iran]: 'ir',
  [TankOrigin.Israel]: 'il',
  [TankOrigin.Italy]: 'it',
  [TankOrigin.Japan]: 'jp',
  [TankOrigin.NaziGermany]: 'ng',
  [TankOrigin.NewZealand]: 'nz',
  [TankOrigin.NorthKorea]: 'kp',
  [TankOrigin.Pakistan]: 'pk',
  [TankOrigin.Poland]: 'pl',
  [TankOrigin.Romania]: 'ro',
  [TankOrigin.Russia]: 'ru',
  [TankOrigin.SouthAfrica]: 'za',
  [TankOrigin.SouthKorea]: 'kr',
  [TankOrigin.Soviet]: 'su',
  [TankOrigin.Sweden]: 'se',
  [TankOrigin.Switzerland]: 'ch',
  [TankOrigin.Taiwan]: 'tw',
  [TankOrigin.Turkey]: 'tr',
  [TankOrigin.UK]: 'gb',
  [TankOrigin.Ukraine]: 'ua',
  [TankOrigin.USA]: 'us',
  [TankOrigin.WestGermany]: 'de',
  [TankOrigin.Yugoslavia]: 'yu',
};
