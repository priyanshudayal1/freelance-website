import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WorkshopMargin } from "@/components/layout/WorkshopMargin";
import { Archive } from "@/components/sections/Archive";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";
import { Evidence } from "@/components/sections/Evidence";
import { Hero } from "@/components/sections/Hero";
import { Interlude } from "@/components/sections/Interlude";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Philosophy } from "@/components/sections/Philosophy";
import { Principles } from "@/components/sections/Principles";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { DebugMode } from "@/components/workshop/DebugMode";

export default function Home() {
  return (
    <>
      <Header />
      <WorkshopMargin />
      <DebugMode />
      <main id="main" className="flex-1">
        <Hero />
        <Philosophy />
        <WhatWeBuild />
        <HowWeWork />
        <Principles />
        <Evidence />
        <Interlude />
        <Archive />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
