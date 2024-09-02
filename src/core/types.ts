export enum TankOrigin {
  USA = 'United States',
  Russia = 'Russia',
  Poland = 'Poland',
  NewZealand = 'New Zealand',
  UK = 'United Kingdom',
  Soviet = 'Soviet Union',
  Japan = 'Japan',
  NaziGermany = 'Germany',
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
  Pakistan = 'Pakistan',
  Egypt = 'Egypt',
  Ukraine = 'Ukraine',
  SouthKorea = 'South Korea',
  NorthKorea = 'North Korea',
  India = 'India'
};

export enum TankType {
  Tankette = 'Tankette',
  Light = 'Light Tank',
  Medium = 'Medium Tank',
  Heavy = 'Heavy Tank',
  SuperHeavy = 'Super Heavy',
  MBT = 'MBT',
  TankDestroyer = 'Tank Destroyer',
  SPG = 'SPG',
  AssaultGun = 'Assault Gun',
};

export type Tank = {
  name: string;             // tank name
  url: string;              // link to wikipedia
  type: TankType;           // type of tank
  year: number;             // year first built
  origin: TankOrigin;       // country of origin
  count: number;            // number of tanks built
  mass: number;             // tons
  engine: number;           // horsepower
  range: [number, number];  // [km, mi]
  speed: [number, number];  // [km, mi]
};

export type TankImage = {
  tank: Tank;
  url: string;
  attribution?: string;
};
