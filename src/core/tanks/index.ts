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
    tank: usa.M1,
    url: 'tanks/tank1.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Mounted_Soldier_System_(MSS).jpg">See page for author</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: russia.T14,
    url: 'tanks/tank2.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:4mayrehearsal_09.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
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
  {
    tank: uk.Centurion,
    url: 'tanks/1024px-Centurion_Tank_outside_the_Redoubt_Fortress.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Centurion_Tank_outside_the_Redoubt_Fortress.jpg">en:User:Ksimisk</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons',
  },
  {
    tank: japan.Type90,
    url: 'tanks/1024px-Type_90_Prototype_(JGSDF_Public_Information_Center).jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Type_90_Prototype_(JGSDF_Public_Information_Center).jpg">KyūMaruOtami</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: germany.Panther,
    url: 'tanks/Bundesarchiv_Bild_101I-696-0432-13,_Polen,_Panzer_V__Panther__auf_dem_Feld.2.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_101I-696-0432-13,_Polen,_Panzer_V_%22Panther%22_auf_dem_Feld.2.jpg">Bundesarchiv, Bild 101I-696-0432-13 / Mahns / CC-BY-SA 3.0</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/de/deed.en">CC BY-SA 3.0 DE</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M3Lee,
    url: 'tanks/1024px-AlfredPalmerM3tank1942b_crop2.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:AlfredPalmerM3tank1942b_crop2.jpg">Alfred T. Palmer</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: others.Strv103,
    url: 'tanks/1024px-Stridsvagn_103_Revinge_2013-3.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Stridsvagn_103_Revinge_2013-3.jpg">Jorchr</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons',
  },
  {
    tank: russia.T54,
    url: 'tanks/1024px-T-54A_Panzermuseum_Thun.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:T-54A_Panzermuseum_Thun.jpg">Sandstein</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M2Bradley,
    url: 'tanks/1024px-M2_Bradley_Reforger_1985.jpeg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:M2_Bradley_Reforger_1985.JPEG">See page for author</a>, Public domain, via Wikimedia Commons',
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
