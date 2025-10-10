import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { OurWork } from "@/components/our-work"
import { Pricing } from "@/components/pricing"
import { Reviews } from "@/components/reviews"
import { BeforeAfter } from "@/components/before-after"
import { ContactForm } from "@/components/contact-form"
import { Clients } from "@/components/clients"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <OurWork />
      <Pricing />
      <Reviews />
      <BeforeAfter />
      <ContactForm />
      <Clients />
    </main>
  )
}
