import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
  // return <Component {...pageProps} /> // Es como estaba este componente padre por defecto
}

export default MyApp
