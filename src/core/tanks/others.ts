import { Tank, TankRole, TankOrigin } from "../types";

// Argentina: TAM
export const TAM: Tank = {
  name: 'Tanque Argentino Mediano',
  url: 'https://en.wikipedia.org/wiki/Tanque_Argentino_Mediano',
  role: TankRole.MBT,
  year: 1979,
  origin: TankOrigin.Argentina,
  count: 280,
  mass: 31,
  engine: 720,
  range: { km: 580, mi: 370 },
  speed: { km: 75, mi: 47 },
};

// Australia: Sentinel, Bushmaster
export const Sentinel: Tank = {
  name: 'Sentinel',
  url: 'https://en.wikipedia.org/wiki/Sentinel_tank',
  role: TankRole.Medium,
  year: 1942,
  origin: TankOrigin.Australia,
  count: 65,
  mass: 28,
  engine: 330,
  range: { km: 240, mi: 150 },
  speed: { km: 48, mi: 30 },
};
export const Bushmaster: Tank = {
  name: 'Bushmaster',
  url: 'https://en.wikipedia.org/wiki/Bushmaster_Protected_Mobility_Vehicle',
  role: TankRole.APC,
  year: 1998,
  origin: TankOrigin.Australia,
  count: 1195,
  mass: 12,
  engine: 300,
  range: { km: 800, mi: 497 },
  speed: { km: 100, mi: 62 },
};

// Brazil: EE-T1 Osório
export const EET1: Tank = {
  name: 'EE-T1 Osório',
  url: 'https://en.wikipedia.org/wiki/EE-T1_Os%C3%B3rio',
  role: TankRole.MBT,
  year: 1986,
  origin: TankOrigin.Brazil,
  count: 2,
  mass: 41,
  engine: 1100,
  range: { km: 550, mi: 340 },
  speed: { km: 70, mi: 43 },
};

// Canada: Ram
export const Ram: Tank = {
  name: 'Ram',
  url: 'https://en.wikipedia.org/wiki/Ram_tank',
  role: TankRole.Medium,
  year: 1941,
  origin: TankOrigin.Canada,
  count: 2032,
  mass: 29,
  engine: 400,
  range: { km: 232, mi: 144 },
  speed: { km: 40, mi: 25 },
};

// Czech:
// Panzer 35(t), Panzer 38(t), OT-64 SKOT, Pandur II
export const Panzer35t: Tank = {
  name: 'Panzer 35(t)',
  url: 'https://en.wikipedia.org/wiki/Panzer_35(t)',
  role: TankRole.Light,
  year: 1936,
  origin: TankOrigin.Czech,
  count: 434,
  mass: 11,
  engine: 120,
  range: { km: 190, mi: 120 },
  speed: { km: 34, mi: 21 },
};
export const Panzer38t: Tank = {
  name: 'Panzer 38(t)',
  url: 'https://en.wikipedia.org/wiki/Panzer_38(t)',
  role: TankRole.Light,
  year: 1938,
  origin: TankOrigin.Czech,
  count: 1414,
  mass: 10,
  engine: 123,
  range: { km: 250, mi: 160 },
  speed: { km: 42, mi: 26 },
};
export const OT64: Tank = {
  name: 'OT-64 SKOT',
  url: 'https://en.wikipedia.org/wiki/OT-64_SKOT',
  role: TankRole.APC,
  year: 1963,
  origin: TankOrigin.Czech,
  count: 4500,
  mass: 15,
  engine: 177,
  range: { km: 710, mi: 440 },
  speed: { km: 94, mi: 59 },
};
export const PandurII: Tank = {
  name: 'Pandur II',
  url: 'https://en.wikipedia.org/wiki/Pandur_II',
  role: TankRole.IFV,
  year: 2001,
  origin: TankOrigin.Czech,
  count: 335,
  mass: 16,
  engine: 449,
  range: { km: 700, mi: 435 },
  speed: { km: 105, mi: 65 },
};

// Egypt: Ramses II
export const RamsesII: Tank = {
  name: 'Ramses II',
  url: 'https://en.wikipedia.org/wiki/Ramses_II_tank',
  role: TankRole.MBT,
  year: 2004,
  origin: TankOrigin.Egypt,
  count: 425,
  mass: 48,
  engine: 908,
  range: { km: 530, mi: 330 },
  speed: { km: 69, mi: 43 },
};


// Hungary:
// Toldi, Turán, Zrínyi II, Nimród
export const Toldi: Tank = {
  name: 'Toldi',
  url: 'https://en.wikipedia.org/wiki/38M_Toldi',
  role: TankRole.Light,
  year: 1939,
  origin: TankOrigin.Hungary,
  count: 202,
  mass: 9,
  engine: 155,
  range: { km: 200, mi: 120 },
  speed: { km: 50, mi: 31 },
};
export const Turan: Tank = {
  name: 'Turán',
  url: 'https://en.wikipedia.org/wiki/Tur%C3%A1n_tank',
  role: TankRole.Medium,
  year: 1941,
  origin: TankOrigin.Hungary,
  count: 424,
  mass: 18,
  engine: 260,
  range: { km: 165, mi: 103 },
  speed: { km: 47, mi: 29 },
};
export const ZrinyiII: Tank = {
  name: 'Zrínyi II',
  url: 'https://en.wikipedia.org/wiki/43M_Zr%C3%ADnyi',
  role: TankRole.AssaultGun,
  year: 1943,
  origin: TankOrigin.Hungary,
  count: 72,
  mass: 22,
  engine: 260,
  range: { km: 220, mi: 140 },
  speed: { km: 43, mi: 27 },
};
export const Nimrod: Tank = {
  name: 'Nimród',
  url: 'https://en.wikipedia.org/wiki/40M_Nimr%C3%B3d',
  role: TankRole.SPAAG,
  year: 1940,
  origin: TankOrigin.Hungary,
  count: 135,
  mass: 11,
  engine: 150,
  range: { km: 300, mi: 180 },
  speed: { km: 50, mi: 31 },
};

// India: Vijayanta, Arjun
export const Vijayanta: Tank = {
  name: 'Vijayanta',
  url: 'https://en.wikipedia.org/wiki/Vijayanta',
  role: TankRole.MBT,
  year: 1964,
  origin: TankOrigin.India,
  count: 2200,
  mass: 39,
  engine: 535,
  range: { km: 530, mi: 330 },
  speed: { km: 50, mi: 31 },
};
export const ArjunMkI: Tank = {
  name: 'Arjun Mk I',
  url: 'https://en.wikipedia.org/wiki/Arjun_MBT',
  role: TankRole.MBT,
  year: 2004,
  origin: TankOrigin.India,
  count: 141,
  mass: 59,
  engine: 1400,
  range: { km: 450, mi: 280 },
  speed: { km: 70, mi: 43 },
};

// Iran: Type 72Z, Zulfiqar 1, Zulfiqar 3
export const Type72Z: Tank = {
  name: 'Type 72Z (Safir-74)',
  url: 'https://en.wikipedia.org/wiki/Type_72Z',
  role: TankRole.MBT,
  year: 1996,
  origin: TankOrigin.Iran,
  count: 400,
  mass: 36,
  engine: 780,
  range: { km: 440, mi: 275 },
  speed: { km: 65, mi: 40 },
};
export const Zulfiqar1: Tank = {
  name: 'Zulfiqar 1',
  url: 'https://en.wikipedia.org/wiki/Zulfiqar_(tank)',
  role: TankRole.MBT,
  year: 1993,
  origin: TankOrigin.Iran,
  count: 400,
  mass: 52,
  engine: 780,
  range: { km: 450, mi: 280 },
  speed: { km: 65, mi: 40 },
};
export const Zulfiqar3: Tank = {
  name: 'Zulfiqar 3',
  url: 'https://en.wikipedia.org/wiki/Zulfiqar_(tank)#Zulfiqar-3',
  role: TankRole.MBT,
  year: 1999,
  origin: TankOrigin.Iran,
  count: 750,
  mass: 44,
  engine: 1000,
  range: { km: 450, mi: 280 },
  speed: { km: 75, mi: 47 },
};

// New Zealand: Bob Semple
export const BobSemple: Tank = {
  name: 'Bob Semple tank',
  url: 'https://en.wikipedia.org/wiki/Bob_Semple_tank',
  role: TankRole.Light,
  year: 1940,
  origin: TankOrigin.NewZealand,
  count: 3,
  mass: 25,
  engine: 127,
  range: { km: 160, mi: 99 },
  speed: { km: 24, mi: 15 },
};

// Pakistan: Al-Zarrar, Al-Khalid
export const AlZarrar: Tank = {
  name: 'Al-Zarrar',
  url: 'https://en.wikipedia.org/wiki/Al-Zarrar_tank',
  role: TankRole.MBT,
  year: 2003,
  origin: TankOrigin.Pakistan,
  count: 750,
  mass: 44,
  engine: 730,
  range: { km: 450, mi: 280 },
  speed: { km: 65, mi: 40 },
};
export const AlKhalid: Tank = {
  name: 'Al-Khalid',
  url: 'https://en.wikipedia.org/wiki/Al-Khalid/VT-1A',
  role: TankRole.MBT,
  year: 2001,
  origin: TankOrigin.Pakistan,
  count: 1144,
  mass: 46,
  engine: 1200,
  range: { km: 500, mi: 310 },
  speed: { km: 72, mi: 45 },
};

// Poland: TKS, 7TP, PT-91
export const TKS: Tank = {
  name: 'TKS',
  url: 'https://en.wikipedia.org/wiki/TKS',
  role: TankRole.Tankette,
  year: 1931,
  origin: TankOrigin.Poland,
  count: 575,
  mass: 2,
  engine: 46,
  range: { km: 200, mi: 120 },
  speed: { km: 46, mi: 29 }
};
export const SevenTP: Tank = {
  name: '7TP',
  url: 'https://en.wikipedia.org/wiki/7TP',
  role: TankRole.Light,
  year: 1935,
  origin: TankOrigin.Poland,
  count: 149,
  mass: 10,
  engine: 110,
  range: { km: 150, mi: 93 },
  speed: { km: 37, mi: 23 },
};
export const PT91: Tank = {
  name: 'PT-91 Twardy',
  url: 'https://en.wikipedia.org/wiki/PT-91_Twardy',
  role: TankRole.MBT,
  year: 1993,
  origin: TankOrigin.Poland,
  count: 281,
  mass: 49,
  engine: 1000,
  range: { km: 650, mi: 400 },
  speed: { km: 70, mi: 43 },
};

// Romania: TR-85
export const TR85: Tank = {
  name: 'TR-85',
  url: 'https://en.wikipedia.org/wiki/TR-85',
  role: TankRole.MBT,
  year: 1986,
  origin: TankOrigin.Romania,
  count: 617,
  mass: 42,
  engine: 830,
  range: { km: 400, mi: 250 },
  speed: { km: 60, mi: 37 },
};

// S. Africa: Olifant
export const Olifant: Tank = {
  name: 'Olifant',
  url: 'https://en.wikipedia.org/wiki/Olifant_(tank)',
  role: TankRole.MBT,
  year: 1974,
  origin: TankOrigin.SouthAfrica,
  count: 224,
  mass: 58,
  engine: 650,
  range: { km: 100, mi: 62 },
  speed: { km: 34, mi: 21 },
};

// S. Korea: K1 (Type 88), K2 Black Panther
export const K1: Tank = {
  name: 'K1 (Type 88)',
  url: 'https://en.wikipedia.org/wiki/K1_tank',
  role: TankRole.MBT,
  year: 1985,
  origin: TankOrigin.SouthKorea,
  count: 1027,
  mass: 51,
  engine: 1200,
  range: { km: 500, mi: 310 },
  speed: { km: 65, mi: 40 },
};
export const K2: Tank = {
  name: 'K2 Black Panther',
  url: 'https://en.wikipedia.org/wiki/K2_Black_Panther',
  role: TankRole.MBT,
  year: 2008,
  origin: TankOrigin.SouthKorea,
  count: 260,
  mass: 56,
  engine: 1500,
  range: { km: 450, mi: 280 },
  speed: { km: 70, mi: 43 },
};

// Sweden: Stridsvagn 103 (S-Tank)
export const Strv103: Tank = {
  name: 'Stridsvagn 103 (S-Tank)',
  url: 'https://en.wikipedia.org/wiki/Stridsvagn_103',
  role: TankRole.MBT,
  year: 1963,
  origin: TankOrigin.Sweden,
  count: 290,
  mass: 42,
  engine: 780,
  range: { km: 390, mi: 240 },
  speed: { km: 60, mi: 37 },
};

// Switzerland: Panzer61, Panzer68
export const Panzer61: Tank = {
  name: 'Panzer 61',
  url: 'https://en.wikipedia.org/wiki/Panzer_61',
  role: TankRole.MBT,
  year: 1957,
  origin: TankOrigin.Switzerland,
  count: 150,
  mass: 39,
  engine: 630,
  range: { km: 250, mi: 160 },
  speed: { km: 55, mi: 34 },
};
export const Panzer68: Tank = {
  name: 'Panzer 68',
  url: 'https://en.wikipedia.org/wiki/Panzer_68',
  role: TankRole.MBT,
  year: 1971,
  origin: TankOrigin.Switzerland,
  count: 390,
  mass: 41,
  engine: 660,
  range: { km: 200, mi: 120 },
  speed: { km: 55, mi: 34 },
};

// Taiwan: CM-11, CM-12
export const CM11: Tank = {
  name: 'CM-11 Brave Tiger',
  url: 'https://en.wikipedia.org/wiki/CM-11_Brave_Tiger',
  role: TankRole.MBT,
  year: 1988,
  origin: TankOrigin.Taiwan,
  count: 450,
  mass: 50,
  engine: 750,
  range: { km: 480, mi: 300 },
  speed: { km: 48, mi: 30 },
};
export const CM12: Tank = {
  name: 'CM-12',
  url: 'https://en.wikipedia.org/wiki/CM-12_tank',
  role: TankRole.MBT,
  year: 1990,
  origin: TankOrigin.Taiwan,
  count: 100,
  mass: 49,
  engine: 750,
  range: { km: 203, mi: 100 },
  speed: { km: 48, mi: 30 },
};

// Turkey: Altay
export const Altay: Tank = {
  name: 'Altay',
  url: 'https://en.wikipedia.org/wiki/Altay_(main_battle_tank)',
  role: TankRole.MBT,
  year: 2024,
  origin: TankOrigin.Turkey,
  count: 7,
  mass: 65,
  engine: 1500,
  range: { km: 450, mi: 280 },
  speed: { km: 65, mi: 40 },
};

// Ukraine: T-84
export const T84: Tank = {
  name: 'T-84',
  url: 'https://en.wikipedia.org/wiki/T-84',
  role: TankRole.MBT,
  year: 1994,
  origin: TankOrigin.Ukraine,
  count: 425,
  mass: 51,
  engine: 1200,
  range: { km: 500, mi: 310 },
  speed: { km: 70, mi: 43 },
};

// Yugoslavia
export const M60APC: Tank = {
  name: 'OT M-60',
  url: 'https://en.wikipedia.org/wiki/OT_M-60',
  role: TankRole.APC,
  year: 1962,
  origin: TankOrigin.Yugoslavia,
  count: 790,
  mass: 9.2,
  engine: 150,
  range: { km: 400, mi: 250 },
  speed: { km: 45, mi: 28 },
};
export const M80: Tank = {
  name: 'M-80',
  url: 'https://en.wikipedia.org/wiki/M-80_IFV',
  role: TankRole.IFV,
  year: 1979,
  origin: TankOrigin.Yugoslavia,
  count: 850,
  mass: 14,
  engine: 320,
  range: { km: 500, mi: 310 },
  speed: { km: 65, mi: 40 },
};

export const M84: Tank = {
  name: 'M-84',
  url: 'https://en.wikipedia.org/wiki/M-84',
  role: TankRole.MBT,
  year: 1984,
  origin: TankOrigin.Yugoslavia,
  count: 652,
  mass: 42,
  engine: 1000,
  range: { km: 700, mi: 435 },
  speed: { km: 68, mi: 42 },
};
