import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { TrendingSection } from "@/components/trending-section"
import { StudioSection } from "@/components/studio-section"
import { DesignersSection } from "@/components/designers-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <TrendingSection />
      <StudioSection />
      <DesignersSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
