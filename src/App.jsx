import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ScrollTop from "./components/home/ScrollTop"
function App() {

  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollTop />
      </main>
    </>
  )
}

export default App
