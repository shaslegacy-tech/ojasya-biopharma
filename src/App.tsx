import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services1'
import ServicesPage from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import PharmaSupplies from './pages/PharmaSupplies'
import InjectionsDevices from './pages/InjectionsDevices'
import HospitalDelivery from './pages/HospitalDelivery'
import PartnersPage from './pages/PartnerPage'
import BlogPage from './pages/Blog'
import SingleBlogPage from './pages/SingleBlogPage'
import PrivacyPolicyPagePremium from './pages/PrivacyPolicyPagePremium'
import TermsPage from './pages/TermsPage'
import CareersPage from './pages/CareersPage'
import SingleCareerPage from './pages/SingleCareerPage'

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/our-partners" element={<PartnersPage />} />
            <Route path="/services" element={<ServicesPage />}>
              <Route path="pharma-supplies" element={<PharmaSupplies />} />
              <Route path="injections" element={<InjectionsDevices />} />
              <Route path="delivery" element={<HospitalDelivery />} />
            </Route>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:id" element={<SingleCareerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPagePremium   />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
