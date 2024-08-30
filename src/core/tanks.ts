import { daysSinceStartDate } from "./date";

export enum TankOrigin {
  USA = 'United States',
  Russia = 'Russia',
  Poland = 'Poland',
  NewZealand = 'New Zealand',
  UK = 'United Kingdom',
  Soviet = 'Soviet Union',
  Japan = 'Japan',
  WestGermany = 'West Germany',
  Switzerland = 'Switzerland',
  France = 'France',
  Israel = 'Israel',
  Sweden = 'Sweden',
  SouthAfrica = 'South Africa',
  China = 'China',
  Italy = 'Italy',
  Argentina = 'Argentina',
  Romania = 'Romania',
  Taiwan = 'Taiwan',
  Iran = 'Iran',
}

export enum TankType {
  Tankette = 'Tankette',
  Light = 'Light Tank',
  Medium = 'Medium Tank',
  Heavy = 'Heavy Tank',
  MBT = 'Main Battle Tank',
}

export type Tank = {
  name: string;
  url: string;
  type: TankType;
  year: number; // year first built
  origin: TankOrigin;
  count: number; // number of tanks built
  mass: number;  // tons
  engine: number; // horsepower
  range: [number, number]; // [km, mi]
  speed: [number, number]; // [km, mi]
};

export type TankImage = {
  tank: Tank;
  url: string;
  attribution?: string;
};

const TKS: Tank = {
  name: 'TKS',
  url: 'https://en.wikipedia.org/wiki/TKS',
  type: TankType.Tankette,
  year: 1931,
  origin: TankOrigin.Poland,
  count: 575,
  mass: 2,
  engine: 46,
  range: [200, 120],
  speed: [46, 29]
};

const BobSemple: Tank = {
  name: 'Bob Semple',
  url: 'https://en.wikipedia.org/wiki/Bob_Semple_tank',
  type: TankType.Light,
  year: 1940,
  origin: TankOrigin.NewZealand,
  count: 3,
  mass: 25,
  engine: 127,
  range: [160, 99],
  speed: [24, 15],
};

const M1Abrams: Tank = {
  name: 'M1 Abrams',
  url: 'https://en.wikipedia.org/wiki/M1_Abrams',
  type: TankType.MBT,
  year: 1980,
  origin: TankOrigin.USA,
  count: 10300,
  mass: 54,
  engine: 1500,
  range: [426, 265],
  speed: [72, 45],
};

const T14Armata: Tank = {
  name: 'T-14 Armata',
  url: 'https://en.wikipedia.org/wiki/T-14_Armata',
  type: TankType.MBT,
  year: 2015,
  origin: TankOrigin.Russia,
  count: 50,
  mass: 55,
  engine: 1500,
  range: [500, 310],
  speed: [80, 50],
};

const Centurion: Tank = {
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

const T54: Tank = {
  name: 'T-54',
  url: 'https://en.wikipedia.org/wiki/T-54',
  type: TankType.MBT,
  year: 1945,
  origin: TankOrigin.Soviet,
  count: 35000,
  mass: 36,
  engine: 520,
  range: [400, 249],
  speed: [48, 30],
};

const M48Patton: Tank = {
  name: 'M48 Patton',
  url: 'https://en.wikipedia.org/wiki/M48_Patton',
  type: TankType.MBT,
  year: 1951,
  origin: TankOrigin.USA,
  count: 12000,
  mass: 45,
  engine: 750,
  range: [113, 70],
  speed: [48, 30],
};

const T55: Tank = {
  name: 'T-55',
  url: 'https://en.wikipedia.org/wiki/T-54/T-55',
  type: TankType.MBT,
  year: 1958,
  origin: TankOrigin.Soviet,
  count: 27500,
  mass: 36,
  engine: 581,
  range: [530, 330],
  speed: [51, 32],
};

const Type61: Tank = {
  name: 'Type 61',
  url: 'https://en.wikipedia.org/wiki/Type_61_(tank)',
  type: TankType.MBT,
  year: 1956,
  origin: TankOrigin.Japan,
  count: 560,
  mass: 35,
  engine: 570,
  range: [200, 124],
  speed: [45, 28],
};

const M60: Tank = {
  name: 'M60',
  url: 'https://en.wikipedia.org/wiki/M60_tank',
  type: TankType.MBT,
  year: 1959,
  origin: TankOrigin.USA,
  count: 15000,
  mass: 46,
  engine: 750,
  range: [500, 300],
  speed: [48, 30],
};

const T62: Tank = {
  name: 'T-62',
  url: 'https://en.wikipedia.org/wiki/T-62',
  type: TankType.MBT,
  year: 1958,
  origin: TankOrigin.Soviet,
  count: 22700,
  mass: 37,
  engine: 580,
  range: [450, 280],
  speed: [50, 31],
}

const Leopard1: Tank = {
  name: 'Leopard 1',
  url: 'https://en.wikipedia.org/wiki/Leopard_1',
  type: TankType.MBT,
  year: 1961,
  origin: TankOrigin.WestGermany,
  count: 4744,
  mass: 40,
  engine: 819,
  range: [600, 372],
  speed: [65, 40],
};

const Panzer61: Tank = {
  name: 'Panzer 61',
  url: 'https://en.wikipedia.org/wiki/Panzer_61',
  type: TankType.MBT,
  year: 1957,
  origin: TankOrigin.Switzerland,
  count: 150,
  mass: 39,
  engine: 630,
  range: [250, 160],
  speed: [55, 34],
};

const VickersMark1: Tank = {
  name: 'Vickers MBT Mark 1',
  url: 'https://en.wikipedia.org/wiki/Vickers_MBT',
  type: TankType.MBT,
  year: 1964,
  origin: TankOrigin.UK,
  count: 2576,
  mass: 38,
  engine: 535,
  range: [480, 300],
  speed: [48, 30],
};

const AMX30: Tank = {
  name: 'AMX 30',
  url: 'https://en.wikipedia.org/wiki/AMX-30',
  type: TankType.MBT,
  year: 1966,
  origin: TankOrigin.France,
  count: 3571,
  mass: 36,
  engine: 720,
  range: [600, 370],
  speed: [65, 40],
};

const T64: Tank = {
  name: 'T-64',
  url: 'https://en.wikipedia.org/wiki/T-64',
  type: TankType.MBT,
  year: 1958,
  origin: TankOrigin.Soviet,
  count: 13000,
  mass: 38,
  engine: 700,
  range: [500, 310],
  speed: [60, 37],
};

const Chieftain: Tank = {
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

const Magach3: Tank = {
  name: 'Magach 3',
  url: 'https://en.wikipedia.org/wiki/Magach',
  type: TankType.MBT,
  year: 1967,
  origin: TankOrigin.Israel,
  count: 300,
  mass: 50,
  engine: 750,
  range: [480, 300],
  speed: [48, 30],
};

const Strv103: Tank = {
  name: 'Stridsvagn 103',
  url: 'https://en.wikipedia.org/wiki/Stridsvagn_103',
  type: TankType.MBT,
  year: 1963,
  origin: TankOrigin.Sweden,
  count: 290,
  mass: 42,
  engine: 780,
  range: [390, 240],
  speed: [60, 37],
};

const Panzer68: Tank = {
  name: 'Panzer 68',
  url: 'https://en.wikipedia.org/wiki/Panzer_68',
  type: TankType.MBT,
  year: 1971,
  origin: TankOrigin.Switzerland,
  count: 390,
  mass: 41,
  engine: 660,
  range: [200, 120],
  speed: [55, 34],
};

const T72: Tank = {
  name: 'T-72',
  url: 'https://en.wikipedia.org/wiki/T-72',
  type: TankType.MBT,
  year: 1971,
  origin: TankOrigin.Soviet,
  count: 25000,
  mass: 46,
  engine: 780,
  range: [460, 290],
  speed: [60, 37],
};

const Olifant: Tank = {
  name: 'Olifant',
  url: 'https://en.wikipedia.org/wiki/Olifant_(tank)',
  type: TankType.MBT,
  year: 1974,
  origin: TankOrigin.SouthAfrica,
  count: 224,
  mass: 58,
  engine: 650,
  range: [100, 62],
  speed: [34, 21],
};

const Type74: Tank = {
  name: 'Type 74',
  url: 'https://en.wikipedia.org/wiki/Type_74',
  type: TankType.MBT,
  year: 1975,
  origin: TankOrigin.Japan,
  count: 873,
  mass: 38,
  engine: 750,
  range: [300, 190],
  speed: [53, 33],
};

const VickersMark3: Tank = {
  name: 'Vickers MBT Mark 3',
  url: 'https://en.wikipedia.org/wiki/Vickers_MBT_Mark_3',
  type: TankType.MBT,
  year: 1975,
  origin: TankOrigin.UK,
  count: 212,
  mass: 39,
  engine: 720,
  range: [490, 300],
  speed: [50, 31],
};

const MerkavaMark1_2: Tank = {
  name: 'Merkava Mark I/II',
  url: 'https://en.wikipedia.org/wiki/Merkava',
  type: TankType.MBT,
  year: 1977,
  origin: TankOrigin.Israel,
  count: 780,
  mass: 60,
  engine: 908,
  range: [500, 310],
  speed: [46, 29]
};

const Type80_88: Tank = {
  name: 'Type 80/88',
  url: 'https://en.wikipedia.org/wiki/Type_80/88_main_battle_tank',
  type: TankType.MBT,
  year: 1980,
  origin: TankOrigin.China,
  count: 3500,
  mass: 38,
  engine: 730,
  range: [500, 310],
  speed: [57, 35],
};

const Type96: Tank = {
  name: 'Type 96',
  url: 'https://en.wikipedia.org/wiki/Type_96_tank',
  type: TankType.MBT,
  year: 1996,
  origin: TankOrigin.China,
  count: 2500,
  mass: 41,
  engine: 582,
  range: [400, 250],
  speed: [65, 40],
};

const OF40: Tank = {
  name: 'OF-40',
  url: 'https://en.wikipedia.org/wiki/OF-40',
  type: TankType.MBT,
  year: 1980,
  origin: TankOrigin.Italy,
  count: 39,
  mass: 46,
  engine: 820,
  range: [600, 370],
  speed: [60, 37],
};

const Type69_79: Tank = {
  name: 'Type 69/79',
  url: 'https://en.wikipedia.org/wiki/Type_69/79',
  type: TankType.MBT,
  year: 1966,
  origin: TankOrigin.China,
  count: 3200,
  mass: 37,
  engine: 580,
  range: [440, 275],
  speed: [50, 31],
};

const TAM: Tank = {
  name: 'Tanque Argentino Mediano',
  url: 'https://en.wikipedia.org/wiki/Tanque_Argentino_Mediano',
  type: TankType.MBT,
  year: 1979,
  origin: TankOrigin.Argentina,
  count: 280,
  mass: 31,
  engine: 720,
  range: [580, 370],
  speed: [75, 47],
};

const TR85: Tank = {
  name: 'TR-85',
  url: 'https://en.wikipedia.org/wiki/TR-85',
  type: TankType.MBT,
  year: 1986,
  origin: TankOrigin.Romania,
  count: 617,
  mass: 42,
  engine: 830,
  range: [400, 250],
  speed: [60, 37],
};

const CM11: Tank = {
  name: 'CM-11 Brave Tiger',
  url: 'https://en.wikipedia.org/wiki/CM-11_Brave_Tiger',
  type: TankType.MBT,
  year: 1988,
  origin: TankOrigin.Taiwan,
  count: 450,
  mass: 50,
  engine: 750,
  range: [480, 300],
  speed: [48, 30],
};

const CM12: Tank = {
  name: 'CM-12',
  url: 'https://en.wikipedia.org/wiki/CM-12_tank',
  type: TankType.MBT,
  year: 1990,
  origin: TankOrigin.Taiwan,
  count: 100,
  mass: 49,
  engine: 750,
  range: [203, 100],
  speed: [48, 30],
};

const ZulfiqarI: Tank = {
  name: 'Zulfiqar',
  url: 'https://en.wikipedia.org/wiki/Zulfiqar_(tank)',
  type: TankType.MBT,
  year: 1993,
  origin: TankOrigin.Iran,
  count: 400,
  mass: 52,
  engine: 780,
  range: [450, 280],
  speed: [65, 40],
};

export const tanks: Tank[] = [
  ZulfiqarI,
  CM12,
  CM11,
  TR85,
  TAM,
  Type69_79,
  OF40,
  Type96,
  Type80_88,
  MerkavaMark1_2,
  VickersMark3,
  Type74,
  Olifant,
  T72,
  Panzer68,
  Strv103,
  Magach3,
  Chieftain,
  T64,
  AMX30,
  VickersMark1,
  Panzer61,
  Leopard1,
  T62,
  M60,
  Type61,
  T55,
  M48Patton,
  T54,
  Centurion,
  T14Armata,
  M1Abrams,
  BobSemple,
  TKS,
];

export const tankImages: TankImage[] = [
  {
    tank: TKS,
    url: 'tanks/tank4.jpg',
    attribution: 'Attribution, <a href="https://commons.wikimedia.org/w/index.php?curid=712156">Link</a>',
  },
  {
    tank: BobSemple,
    url: 'tanks/tank3.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:Pratt,_J,_fl_1974_-_Photograph_of_tank_designed_by_Robert_Semple.jpg">Unidentified photographer</a>, Public domain, via Wikimedia Commons',
  },
  {
    tank: T14Armata,
    url: 'tanks/tank2.jpg',
    attribution: '<a href="https://commons.wikimedia.org/wiki/File:4mayrehearsal_09.jpg">Vitaly V. Kuzmin</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
  },
  {
    tank: M1Abrams,
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
