import '../styles/tailwind/output.css'
import Nav from "/components/Nav.js"
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (

    <>
    <Nav></Nav>
  <Component {...pageProps} />
  <Footer></Footer>
  </>
  )
}

export default MyApp
