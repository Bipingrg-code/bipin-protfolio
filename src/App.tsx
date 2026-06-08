import LogoSection from './components/LogoSection'
import Navbar from './components/Navbar'
import './index.css'
import ExperienceSection from './sections/ExperienceSection'
import FeaturesCards from './sections/FeaturesCards'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeaturesCards />
      <ExperienceSection />
    </main>
  )
}