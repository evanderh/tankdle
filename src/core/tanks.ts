import { daysSinceStartDate } from "./date";

export enum TankOrigin {
  USA = 'United States',
  Russia = 'Russia',
  Poland = 'Poland',
  NewZealand = 'New Zealand',
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
  built: number;
  type: TankType;
  origin: TankOrigin;
};

export type TankImage = {
  tank: Tank;
  url: string;
  attribution?: string;
};

const BOB_SEMPLE: Tank = {
  name: 'Bob Semple',
  built: 1940,
  type: TankType.Light,
  origin: TankOrigin.NewZealand,
};

const T14_ARMATA: Tank = {
  name: 'T-14 Armata',
  built: 2015,
  type: TankType.MBT,
  origin: TankOrigin.Russia
};

const M1_ABRAMS: Tank = {
  name: 'M1 Abrams',
  built: 1980,
  type: TankType.MBT,
  origin: TankOrigin.USA,
};

const TKS: Tank = {
  name: 'TKS',
  built: 1931,
  type: TankType.Tankette,
  origin: TankOrigin.Poland,
}

export const tanks: Tank[] = [
  BOB_SEMPLE,
  T14_ARMATA,
  M1_ABRAMS,
  TKS,
];

export const tankImages: TankImage[] = [
  {
    tank: TKS,
    url: 'tanks/tank4.jpg',
    attribution: 'Attribution, <a href="https://commons.wikimedia.org/w/index.php?curid=712156">Link</a>',
  },
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
