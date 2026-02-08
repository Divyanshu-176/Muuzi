import { getServerSession } from "next-auth";
import { CTASection } from "./components/cta-section";
import { FeaturesSection } from "./components/features";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { HowItWorks } from "./components/how-it-works";
import { Navbar } from "./components/navbar";
import { Redirect } from "./components/Redirect";

export default async function LandinPage() {


  return (


    <main>
      <Navbar/>

      <Redirect/>

      <HeroSection/>
      <HowItWorks/>
      <FeaturesSection/>
      <CTASection/>
      <Footer/>
    </main>
  );
}
