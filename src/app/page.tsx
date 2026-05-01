import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import Pain from "@/components/Pain";
import Virada from "@/components/Virada";
import Features from "@/components/Features";
import SplitFeatures from "@/components/SplitFeatures";
import ComoFunciona from "@/components/ComoFunciona";
import Comparativo from "@/components/Comparativo";
import ParaQuem from "@/components/ParaQuem";
import Depoimentos from "@/components/Depoimentos";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogosBar />
      <Pain />
      <Virada />
      <Features />
      <SplitFeatures />
      <ComoFunciona />
      <Comparativo />
      <ParaQuem />
      <Depoimentos />
      <CtaFinal />
      <Footer />
    </>
  );
}
