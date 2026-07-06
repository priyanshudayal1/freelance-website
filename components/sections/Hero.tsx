"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { BlueprintDiagram } from "@/components/workshop/BlueprintDiagram";
import { Crosshair } from "@/components/workshop/Crosshair";
import { DraftArrowRight } from "@/components/workshop/icons";
import { MicroTag } from "@/components/workshop/MicroTag";
import { SketchArrow } from "@/components/workshop/SketchArrow";
import { SketchUnderline } from "@/components/workshop/SketchUnderline";

export function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Construction grid, fading out towards the edges */}
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_25%,transparent_78%)]"
      />
      <Crosshair className="absolute left-16 top-24 hidden lg:block" />
      <Crosshair className="absolute bottom-10 right-6 hidden lg:block" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-7">
          <motion.div {...enter(0)}>
            <MicroTag>Cover sheet — Rev 28</MicroTag>
          </motion.div>

          <motion.h1
            {...enter(0.08)}
            className="mt-8 max-w-2xl font-display text-5xl leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Good software isn’t rushed. It’s{" "}
            <SketchUnderline delay={1}>refined</SketchUnderline>.
          </motion.h1>

          <motion.p
            {...enter(0.16)}
            className="mt-6 max-w-xl text-lg leading-8 text-graphite"
          >
            Clarix is a digital workshop — a small team of engineers who
            design, build, secure, and quietly keep improving the software
            your business runs on.
          </motion.p>

          <motion.div {...enter(0.24)} className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" size="lg">
              Start a project <DraftArrowRight />
            </Button>
            <Button href="#process" variant="secondary" size="lg">
              See how we work
            </Button>
          </motion.div>

          <motion.p
            {...enter(0.4)}
            className="mt-10 -rotate-1 font-hand text-2xl text-graphite/80"
          >
            measure twice, ship once.
          </motion.p>
        </div>

        <div
          className="group relative cursor-crosshair lg:col-span-5"
          title="Iteration 12 — earlier drafts had six boxes"
        >
          <motion.div {...enter(0.2)}>
            <BlueprintDiagram />
          </motion.div>

          <MicroTag className="absolute -top-3 right-0 bg-paper">
            Draft · Approved
          </MicroTag>

          {/* Handwritten observation, pointing back at the drawing */}
          <motion.div
            {...enter(1.6)}
            className="pointer-events-none absolute bottom-16 right-0 hidden flex-col items-end sm:flex"
          >
            <p className="max-w-40 -rotate-2 text-right font-hand text-xl leading-tight text-graphite">
              drawn before it’s built — always
            </p>
            <SketchArrow delay={1.9} className="-scale-x-100 mr-6 mt-1 rotate-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
