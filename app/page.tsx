import { getServerSession } from "next-auth";
import { CTASection } from "./components/cta-section";
import { FeaturesSection } from "./components/features";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { HowItWorks } from "./components/how-it-works";
import { Navbar } from "./components/navbar";

export default async function LandinPage() {


  return (


    <main>
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <FeaturesSection/>
      <CTASection/>
      <Footer/>
    </main>
  );
}
