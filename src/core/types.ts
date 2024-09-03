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

export enum TankRole {
  Tankette = 'Tankette',
  Light = 'Light Tank',
  Medium = 'Medium Tank',
  Heavy = 'Heavy Tank',
  SuperHeavy = 'Super Heavy',
  MBT = 'Main Battle Tank',
  TankDestroyer = 'Tank Destroyer',
  SPG = 'Self-Propelled Gun',
  AssaultGun = 'Assault Gun',
  ArmoredCar = 'Armored Car',
  IFV = 'Infantry Fighting Vehicle',
  APC = 'Armored Personnel Carrier',
  SPAAG = 'Self-Propelled Anti-Aircraft Gun',
  ReconnaissanceVehicle = 'Reconnaissance Vehicle',
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
  range: { km: number, mi: number };  // [km, mi]
  speed: { km: number, mi: number };  // [km, mi]
};

export type TankImage = {
  tank: Tank;
  url: string;
  attribution?: string;
};
