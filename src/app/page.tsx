import { Stripes } from "@/icons/stripes";
import Ensure from "./ensure";
import Hero from "./hero";
import Journey from "./journey";
import MarketPlace from "./marketplace";
import Testimonials from "./testimonials";
import Why from "./why";
import Footer from "./footer";
import { LogoMark } from "@/icons/logo-mark";
import FAQ from "./faq";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Stripes className="w-full h-auto" />
      <MarketPlace />
      <Testimonials />
      <Ensure />
      <Journey />
      <Why />
      <FAQ />
      <Footer />
    </>
  );
}
