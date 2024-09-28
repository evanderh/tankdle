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

import { Continent, Tank, TankImage, TankOrigin } from "../types";

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
  {
    tank: usa.M4,
    url: 'tanks/1024px-TankshermanM4.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:TankshermanM4.jpg">BonesBrigade at English Wikipedia</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.T28,
    url: 'tanks/1024px-T28_Aberdeen_1946.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:T28_Aberdeen_1946.jpg">US Army Signal Corps (watermark)</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: japan.Type95HaGo,
    url: 'tanks/1024px-Type_95_light_tank_Tarawa_cropped_1943_127-gr-18-128-64077_001-ac.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Type_95_light_tank_Tarawa_cropped_1943_127-gr-18-128-64077_001-ac.jpg">National Archives and Records Administration</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: usa.M41,
    url: 'tanks/1024px-M41_Bulldog_Fort_Meade.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:M41_Bulldog_Fort_Meade.jpg">Wilson44691</a>, CC0, via Wikimedia Commons'
  },
  {
    tank: china.Type80_88,
    url: 'tanks/1024px-Type_88_tanks_01.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Type_88_tanks_01.jpg">Mil.ru</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: russia.T26,
    url: 'tanks/1024px-T-26_in_Kirovsk.jpeg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:T-26_in_Kirovsk.JPG">WolfDW</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: usa.Stryker,
    url: 'tanks/1024px-Dragoon_at_Hohenfels.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Dragoon_at_Hohenfels.jpg">Photo Credit: Mr. Tad Browning, Lead Audiovisual Production Specialist, Test Documentation Team, U.S. Army Operational Test Command Public Affairs</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: russia.BMD4,
    url: 'tanks/2008_Moscow_Victory_Day_Parade_-_BMD-4.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:2008_Moscow_Victory_Day_Parade_-_BMD-4.jpg">Пользователь</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M48,
    url: 'tanks/1024px-NARA_111-CCV-372-CC33992_25th_Infantry_Division_M48A3_Patton_moving_through_Viet_Cong_territory_Operation_Lincoln_1966.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:NARA_111-CCV-372-CC33992_25th_Infantry_Division_M48A3_Patton_moving_through_Viet_Cong_territory_Operation_Lincoln_1966.jpg">SP4 Robert C. Lafoon, DASPO</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: russia.ISU152,
    url: 'tanks/1024px-ISU-152-Berlin.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:ISU-152-Berlin.jpg">Franco Atirador</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M18,
    url: 'tanks/1024px-M18_hellcat_side.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:M18_hellcat_side.jpg">Benzene at English Wikipedia</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons',
  },
  {
    tank: russia.T64,
    url: 'tanks/1024px-T-64AK_at_the_T-34_Tank_History_Museum.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:T-64AK_at_the_T-34_Tank_History_Museum.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M60,
    url: 'tanks/1024px-M60A1_tank_of_the_US_Army_in_1975.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:M60A1_tank_of_the_US_Army_in_1975.jpg">https://catalog.archives.gov/id/6399291</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: russia.T80,
    url: 'tanks/1024px-4thTankBrigade_-_T-80U_-01.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:4thTankBrigade_-_T-80U_-01.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M10,
    url: 'tanks/1024px-Tank_destroyers.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Tank_destroyers.jpg">United States Army</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: russia.BTR80,
    url: 'tanks/1024px-Ukrainian_marines_-_Sea_Breeze_2010.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Ukrainian_marines_-_Sea_Breeze_2010.jpg">Kristopher Regan, U.S. Navy</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: usa.M103,
    url: 'tanks/1024px-Amerikaans-Spaanse_marine-oefeningen,_Bestanddeelnr_917-0691.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Amerikaans-Spaanse_marine-oefeningen,_Bestanddeelnr_917-0691.jpg">Anefo</a>, CC0, via Wikimedia Commons',
  },
  {
    tank: russia.T90,
    url: 'tanks/1024px-T-90-ET_2010.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:T-90-ET_2010.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: usa.M1,
    url: "tanks/1024px-United_States_Army_M1_Abrams_tanks_maneuver_in_firing_positions_during_REFORGER_'85.jpg",
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:United_States_Army_M1_Abrams_tanks_maneuver_in_firing_positions_during_REFORGER_%2785.jpg">https://catalog.archives.gov/id/6398920</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: japan.Type74,
    url: 'tanks/1024px-Japanese_-_Type_74_tank_-_2.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Japanese_-_Type_74_tank_-_2.jpg">User:Megapixie</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: uk.Challenger1,
    url: 'tanks/1024px-Challenger-ODS-1.jpeg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Challenger-ODS-1.JPEG">PHC HOLMES</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: uk.Centurion,
    url: 'tanks/1024px-Centurion_Tank_AWM.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Centurion_Tank_AWM.jpg">CommanderOzEvolved</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
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

export const tankNames = tanks.map(tank => tank.name).sort();

export const continentCode: {
  [key in TankOrigin]: Continent;
} = {
  [TankOrigin.Australia]: Continent.OC,
  [TankOrigin.Argentina]: Continent.SA,
  [TankOrigin.Brazil]: Continent.SA,
  [TankOrigin.Canada]: Continent.NA,
  [TankOrigin.China]: Continent.AS,
  [TankOrigin.Czech]: Continent.EU,
  [TankOrigin.Egypt]: Continent.AF,
  [TankOrigin.France]: Continent.EU,
  [TankOrigin.Germany]: Continent.EU,
  [TankOrigin.Hungary]: Continent.EU,
  [TankOrigin.India]: Continent.AS,
  [TankOrigin.Iran]: Continent.AS,
  [TankOrigin.Israel]: Continent.AS,
  [TankOrigin.Italy]: Continent.EU,
  [TankOrigin.Japan]: Continent.AS,
  [TankOrigin.NaziGermany]: Continent.EU,
  [TankOrigin.NewZealand]: Continent.OC,
  [TankOrigin.NorthKorea]: Continent.AS,
  [TankOrigin.Pakistan]: Continent.AS,
  [TankOrigin.Poland]: Continent.EU,
  [TankOrigin.Romania]: Continent.EU,
  [TankOrigin.Russia]: Continent.EU,
  [TankOrigin.SouthAfrica]: Continent.AF,
  [TankOrigin.SouthKorea]: Continent.AS,
  [TankOrigin.Soviet]: Continent.EU,
  [TankOrigin.Sweden]: Continent.EU,
  [TankOrigin.Switzerland]: Continent.EU,
  [TankOrigin.Taiwan]: Continent.AS,
  [TankOrigin.Turkey]: Continent.AS,
  [TankOrigin.UK]: Continent.EU,
  [TankOrigin.Ukraine]: Continent.EU,
  [TankOrigin.USA]: Continent.NA,
  [TankOrigin.WestGermany]: Continent.EU,
  [TankOrigin.Yugoslavia]: Continent.EU,
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
