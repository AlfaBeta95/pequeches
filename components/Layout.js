import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import ResponsiveAppBar from './MUI_navbar.js'
import CustomFooter from './CustomFooter.js';
import CookieConsent from "react-cookie-consent";
import Head from 'next/head'
import Link from 'next/link';
import { globalStyles } from '../styles/styles.js'
import styles from '../styles/Global.module.css'

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
    <CookieConsent
      location="bottom"
      buttonText="Acepto"
      cookieName="pequeches_cookie"
      style={{ background: "orange", color: "black" }}
      buttonStyle={{ color: "#4e503b", fontSize: "1em", borderRadius: "1.8em" }}
      contentStyle={{ borderRadius: "15px" }}
      expires={150}
    >
      <strong>Utilizamos cookies propias para obter información estadística. </strong>
      <Link href='/politica-cookies'><a target='_blank'><span style={{ fontSize: "0.9em", textDecoration: "underline" }}>Máis información</span></a></Link>
    </CookieConsent>
    <style jsx global>{globalStyles}</style>
  </>
}
