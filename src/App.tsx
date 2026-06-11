import LogoSection from './components/LogoSection'
import Navbar from './components/Navbar'
import './index.css'
import Contact from './sections/Contact'
import ExperienceSection from './sections/ExperienceSection'
import FeaturesCards from './sections/FeaturesCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import TechSkills from './sections/TechSkills'
import Testimonials from './sections/Testimonials'

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeaturesCards />
      <ExperienceSection />
      <TechSkills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}