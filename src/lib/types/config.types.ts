import type { TLanguageCode } from './language.types';

type TBackgroundImage = {
  enabled: boolean;
  src?: string;
};

type TButton = {
  gap: number;
  buttons: {
    name: string;
    icon: string;
    href: string;
  }[];
};

type TColors = {
  baseBg: string;
  darkBg: string;
  accent: string;
  textPrimary: string;
  textSecondary: string;
};

type TGreetings = {
  morning: string;
  evening: string;
  night: string;
  late: string;
  punc: '.' | '!' | '';
};

type TTime = {
  seconds: boolean;
  twelveHour: boolean;
};

type TWeather = {
  coordinates: {
    lat: string;
    long: string;
  };
  units: 'imperial' | 'metric' | 'standard';
};

type TConfig = {
  buttons: TButton;
  colors: TColors;
  dateFormat: Intl.DateTimeFormatOptions;
  greetings: TGreetings;
  image: TBackgroundImage;
  locale: TLanguageCode;
  midgap: number;
  name: string;
  time: TTime;
  weather: TWeather;
};

export type { TConfig, TButton };
