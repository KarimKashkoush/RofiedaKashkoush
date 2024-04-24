import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ScrollTop from "./components/home/ScrollTop"
import Loading from "./components/loading/Loading"

import { useState, useEffect } from "react"

const LoadingIndicator = () => {
  return (<Loading />);
};


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate loading


    const timer = setTimeout(() => {
      setIsLoading(false);
      window.onload = () => {
        setIsLoading(false);
      };
    }, 6000);


    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? <LoadingIndicator /> : (
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
      )}
    </>
  )
}

export default App
