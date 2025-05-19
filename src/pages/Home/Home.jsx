import { Contact } from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import StarBackground from '../../components/StarBackground/StarBackground'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'
import AboutSection from '../../components/main/AboutSection/AboutSection'
import HeroSection from '../../components/main/HeroSection/HeroSection'
import ProjectSection from '../../components/main/ProjectSection/ProjectSection'
import SkillSection from '../../components/main/SkillSection/SkillSection'
import ContactSection from '../../components/main/ContactSection/ContactSection'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

      <ThemeToggle/>

      <StarBackground/>

      <Navbar />

      <main>

        <HeroSection />

        <AboutSection />

        <SkillSection />

        <ProjectSection />

        <ContactSection />
        
      </main>

      <Footer />

    </div>
  )
}

export default Home