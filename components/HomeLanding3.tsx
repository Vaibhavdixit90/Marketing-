"use client";
import Testimonial from "@/components/TestimonialSingle";
import { Testimonials } from "@/components/Testimonials";
import { InView } from "@/components/in-view";
import DemoStoreCard from "@/components/DemoStoreCard";
import HeroLanding3 from "./HeroLanding3";
import StepsCardLanding3 from "./StepsCardLanding3";
import { HowItWorksLanding3 } from "./HowItWorkLanding3";
import StepsCardAgainLanding3 from "./StepsCardAgainLanding3";
import BentoGridLanding3 from "./BentoGridLanding3";
import FaqLanding3 from "./FaqLanding3";
import PricingLanding3 from "./PricingLanding3";
import { CtaLanding3 } from "./CtaLanding3";

export default function HomeLanding3() {
  return (
    <main>
      <HeroLanding3 />
      <StepsCardLanding3 />
      <HowItWorksLanding3 />
      <StepsCardAgainLanding3 />
      <BentoGridLanding3 />
      <DemoStoreCard />
      <InView
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <PricingLanding3 />
      </InView>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)", // Adjust blur amount as needed
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <Testimonial />
      </InView>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)", // Adjust blur amount as needed
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <Testimonials />
      </InView>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)", // Adjust blur amount as needed
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <FaqLanding3 />
      </InView>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)", // Adjust blur amount as needed
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <CtaLanding3 />
      </InView>
    </main>
  );
}
