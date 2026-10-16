import { LangProvider } from "./components/Lang";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import Houses from "./components/Houses";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Estimate from "./components/Estimate";
import Footer from "./components/Footer";
import StickyCta from "./components/StickyCta";

export default function Page() {
  return (
    <LangProvider>
      <SmoothScroll />
      <div className="pageBg">
        <div className="gridLines" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <Hero />
        <Houses />
        <Services />
        <WhyUs />
        <Process />
        <Reviews />
        <Faq />
        <Estimate />
        <Footer />
        <StickyCta />
      </div>
    </LangProvider>
  );
}
