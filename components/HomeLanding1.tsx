"use client";
import Testimonial from "@/components/TestimonialSingle";
import { Testimonials } from "@/components/Testimonials";
import { InView } from "@/components/in-view";
import DemoStoreCard from "@/components/DemoStoreCard";
import HeroLanding1 from "./HeroLanding1";
import StepsCardLanding1 from "./StepsCardLanding1";
import { HowItWorksLanding1 } from "./HowItWorkLanding1";
import StepsCardAgainLanding1 from "./StepsCardAgainLanding1";
import BentoGridLanding1 from "./BentoGridLanding1";
import FaqLanding1 from "./FaqLanding1";
import PricingLanding1 from "./PricingLanding1";
import { CtaLanding1 } from "./CtaLanding1";

export default function HomeLanding1() {
  return (
    <main>
      <HeroLanding1 />
      <StepsCardLanding1 />
      <HowItWorksLanding1 />
      <StepsCardAgainLanding1 />
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
        <BentoGridLanding1 />
      </InView>
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
        <PricingLanding1 />
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
        <FaqLanding1 />
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
        <CtaLanding1 />
      </InView>
    </main>
  );
}
