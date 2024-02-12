// app/providers.tsx
import { green, orange } from '@mui/material/colors';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import EN from '@app/translation/en/global.json';
import AR from '@app/translation/ar/global.json';
import TN from '@app/translation/tn/global.json';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: EN,
    },
    ar: {
      global: AR,
    },
    tn: {
      global: TN,
    },
  },
});

export function ProviderAll({ children }: { children: React.ReactNode }) {
  const mode = useSelector((state: any) => state.theme.mode);
  const dir = useSelector((state: any) => state.lang.dir);

  const theme = createTheme({
    palette: {
      mode: mode,
      // primary: {
      //   main: '#FF5733',
      //   // light: will be calculated from palette.primary.main,
      //   // dark: will be calculated from palette.primary.main,
      //   // contrastText: will be calculated to contrast with palette.primary.main
      // },
      // secondary: {
      //   main: '#E0C2FF',
      //   light: '#F5EBFF',
      //   // dark: will be calculated from palette.secondary.main,
      //   contrastText: '#47008F',
      // },
    },
  });
  const themOne = createTheme({
    palette: {
      primary: {
        main: orange[500],
        light: '#ed6c02',
        dark: '#e65100',
      },
    },
  });

  const themeTwo = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <NextUIProvider>
        <NextThemesProvider
          attribute='class'
          defaultTheme='dark'
          themes={['light', 'dark', 'customTheme']}
        >
          <ThemeProvider theme={themOne}>
            <CssBaseline />
            <div dir={dir}>{children}</div>
          </ThemeProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </I18nextProvider>
  );
}
