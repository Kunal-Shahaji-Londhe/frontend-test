import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import ServiceOfferings from './components/ServiceOfferings/ServiceOfferings'
import FAQ from './components/FAQ/FAQ'
import DigitalLandscape from './components/DigitalLandscapes/DigitalLandscape'
import ConversionStrategies from './components/ConversionStrategies/ConversionStrategies'
import Expertise from './components/Expertise/Expertise'
import Testimonials from './components/Testimonials/Testimonials'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Hero/>
        <Features />
        <ServiceOfferings />
        <DigitalLandscape />
        <ConversionStrategies />
        <Expertise />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default App
