import type { TConfig } from '$lib/types/config.types';
const config: TConfig = {
  name: 'April',
  locale: 'en',
  midgap: 24, // Gap between buttons and the time/weather (in Tailwind size units)
  colors: {
    baseBg: '#1E1E2E',
    darkBg: '#181825',
    accent: '#CBA6F7',
    textPrimary: '#CDDCF4',
    textSecondary: '#1E1E2E',
  },

  // Defines the buttons that get rendered.
  // Uses lucide for icons. Define up to 12.
  buttons: {
    gap: 6, // Gap between buttons (in Tailwind size units)
    buttons: [
      {
        name: 'Newt GitHub',
        href: 'https://github.com/arithefirst/newt',
        icon: 'github',
      },
      {
        name: 'Amazon',
        href: 'https://amazon.com',
        icon: 'shopping-cart',
      },
      {
        name: 'Gmail',
        href: 'https://mail.google.com',
        icon: 'mail',
      },
      {
        name: 'Google',
        href: 'https://google.com',
        icon: 'search',
      },
      {
        name: 'Google Calendar',
        href: 'https://calendar.google.com',
        icon: 'calendar',
      },
      {
        name: 'Spotify',
        href: 'https://open.spotify.com',
        icon: 'music',
      },
      {
        name: 'Twitch',
        href: 'https://twitch.tv',
        icon: 'twitch',
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com',
        icon: 'youtube',
      },
    ],
  },

  // Config for an optional background image
  image: {
    enabled: true,
    src: 'background-image.png',
  },

  // The greetings that get displayed
  // depending on the time of day
  greetings: {
    morning: 'Good morning',
    evening: 'Good afternoon',
    night: 'Good evening',
    late: 'Go to Sleep',
    punc: '!', // Punctiation at the end of the greeting (Use '' to disable)
  },

  // Date formatting options (Uses the same syntax as the
  // Date().toLocaleDateString() options)
  dateFormat: {
    month: 'short',
    day: 'numeric',
  },

  // Clock config
  time: {
    seconds: true,
    twelveHour: false,
  },

  // Weather config. Requires your geo coordinates and
  // an OpenWeatherMap API key (It's free!)
  weather: {
    coordinates: {
      // Find yout coordinates at https://www.latlong.net
      lat: '40.776676', // Your latitude
      long: '-73.971321', // Your longitude
    },
    units: 'metric', // metric = C°, imperial = F°, standard = K
  },
};

export default config;
