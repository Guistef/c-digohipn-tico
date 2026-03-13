import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Carousel } from './components/Carousel'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Carousel />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
