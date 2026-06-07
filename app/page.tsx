import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TalentPassport from "@/components/TalentPassport";
import PassportImpact from "@/components/PassportImpact";
import Architecture from "@/components/Architecture";
import Consumers from "@/components/Consumers";
import ProductLayers from "@/components/ProductLayers";
import Clubs from "@/components/Clubs";
import Investors from "@/components/Investors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <TalentPassport />
      <PassportImpact />
      <Architecture />
      <Consumers />
      <ProductLayers />
      <Clubs />
      <Investors />
      <Footer />
    </main>
  );
}