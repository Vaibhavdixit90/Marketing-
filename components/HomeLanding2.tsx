"use client";
import Testimonial from "@/components/TestimonialSingle";
import { Testimonials } from "@/components/Testimonials";
import { InView } from "@/components/in-view";
import DemoStoreCard from "@/components/DemoStoreCard";
import HeroLanding2 from "./HeroLanding2";
import StepsCardLanding2 from "./StepsCardLanding2";
import { HowItWorksLanding2 } from "./HowItWorkLanding2";
import StepsCardAgainLanding2 from "./StepsCardAgainLanding2";
import BentoGridLanding2 from "./BentoGridLanding2";
import FaqLanding2 from "./FaqLanding2";
import PricingLanding2 from "./PricingLanding2";
import { CtaLanding2 } from "./CtaLanding2";

export default function HomeLanding2() {
  return (
    <main>
      <HeroLanding2 />
      <StepsCardLanding2 />
      <HowItWorksLanding2 />
      <StepsCardAgainLanding2 />
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
        <BentoGridLanding2 />
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
        <PricingLanding2 />
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
        <FaqLanding2 />
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
        <CtaLanding2 />
      </InView>
    </main>
  );
}
