export enum TankOrigin {
  Argentina = 'Argentina',
  Australia = 'Australia',
  Brazil = 'Brazil',
  Canada = 'Canada',
  China = 'China',
  Czech = 'Czech',
  Egypt = 'Egypt',
  France = 'France',
  Hungary = 'Hungary',
  Germany = 'Germany',
  Italy = 'Italy',
  India = 'India',
  Iran = 'Iran',
  Israel = 'Israel',
  Japan = 'Japan',
  NaziGermany = 'Nazi Germany',
  NewZealand = 'New Zealand',
  NorthKorea = 'North Korea',
  Pakistan = 'Pakistan',
  Poland = 'Poland',
  Romania = 'Romania',
  Russia = 'Russia',
  SouthAfrica = 'South Africa',
  SouthKorea = 'South Korea',
  Soviet = 'Soviet Union',
  Sweden = 'Sweden',
  Switzerland = 'Switzerland',
  Taiwan = 'Taiwan',
  Turkey = 'Turkey',
  UK = 'United Kingdom',
  Ukraine = 'Ukraine',
  USA = 'United States',
  WestGermany = 'West Germany',
  Yugoslavia = 'Yugoslavia',
};

export enum TankRole {
  Tankette = 'Tankette',
  Light = 'Light Tank',
  Medium = 'Medium Tank',
  Heavy = 'Heavy Tank',
  SuperHeavy = 'Super Heavy',
  MBT = 'MBT',
  TankDestroyer = 'TD',
  SPG = 'SPG',
  AssaultGun = 'Assault Gun',
  ArmoredCar = 'Armored Car',
  IFV = 'IFV',
  APC = 'APC',
  SPAAG = 'SPAAG',
  ReconnaissanceVehicle = 'Recon Vehicle',
  FlameTank = 'Flame Tank',
};

export type Tank = {
  name: string;             // tank name
  url: string;              // link to wikipedia
  role: TankRole;           // type of tank
  year: number;             // year first built
  origin: TankOrigin;       // country of origin
  count: number;            // number of tanks built
  mass: number;             // tons
  engine: number;           // horsepower
  range: { km: number, mi: number };  // { km, mi }
  speed: { km: number, mi: number };  // { km, mi }
};

export type TankImage = {
  tank: Tank;
  url: string;
  attribution?: string;
};
