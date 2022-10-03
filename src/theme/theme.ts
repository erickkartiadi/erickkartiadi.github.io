import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#fcedf1',
      100: '#ec9db0',
      200: '#df5577',
      300: '#de5074',
      400: '#d74a6d',
      500: '#cc4668',
      600: '#b13d5a',
      700: '#9b354e',
      800: '#7f2c40',
      900: '#692435'
    }
  },
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Inter", sans-serif'
  }
});

export default theme;
