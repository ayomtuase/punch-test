'use client'

import { Stripes } from "@/icons/stripes";
import Ensure from "./ensure";
import FAQ from "./faq";
import Footer from "./footer";
import Hero from "./hero";
import Journey from "./journey";
import MarketPlace from "./marketplace";
import Navbar from "./navbar";
import Testimonials from "./testimonials";
import Why from "./why";


export default function Home() {
  return (
    <>
      <Navbar />
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
