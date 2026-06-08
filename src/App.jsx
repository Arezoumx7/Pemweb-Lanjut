// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import StatsStrip from './components/sections/StatsStrip'
import FleetSection from './components/sections/FleetSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import ServicesSection from './components/sections/ServicesSection'
import CTABanner from './components/sections/CTABanner'
import FleetPricePage from './pages/FleetPricePage'
import ProfilePage from './pages/ProfilePage'
import CarDetailPage from './pages/CarDetailPage'
import ContactPage from './pages/ContactPage'  // ← IMPORT HALAMAN CONTACT

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <FleetSection />
      <HowItWorksSection />
      <ServicesSection />
      <CTABanner />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fleet-price" element={<FleetPricePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />  {/* ← TAMBAHKAN RUTE CONTACT */}
      </Routes>
      <Footer />
    </Router>
  )
}