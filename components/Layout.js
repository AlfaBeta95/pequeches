import { globalStyles } from '../styles/styles.js'
import styles from '../styles/Global.module.css'
import Head from 'next/head'
import ResponsiveAppBar from './MUI_navbar.js'
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomFooter from './CustomFooter.js';

const theme = createTheme({
  palette: {
    primary: {
      main: red[200],
    },
    secondary: {
      main: red[400],
    },
  },
  typography: {
    fontFamily: [
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function Layout({ children }) {
  return <>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Pequechés</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Ludoteca Pequechés" />
        {/* Importo Tailwind */}
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`min-h-screen`}>
        <div className={`sticky top-0 left-0 z-50`}>
          <header className={`${styles.header}`}>
            <ResponsiveAppBar />
          </header>
        </div>
        <main className={`${styles.main} mt-24 mb-6`}>
          <div className={`${styles.content} w-full mx-52`}>
            {children}
          </div>
        </main>
      </div>
      <CustomFooter customStyle={styles.custom_footer} />
    </ThemeProvider>
    <style jsx global>{globalStyles}</style>
  </>
}
