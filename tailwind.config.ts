import type { Config } from 'tailwindcss';
import siteConfig from './src/lib';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        base: siteConfig.colors.baseBg,
        dark: siteConfig.colors.darkBg,
        accent: siteConfig.colors.accent,
        primarytext: siteConfig.colors.textPrimary,
        secondarytext: siteConfig.colors.textSecondary,
      },
    },
  },
};

export default config;
