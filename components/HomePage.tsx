"use client";
import Testimonial from "@/components/TestimonialSingle";
import { FooterCta } from "@/components/FooterCta";
import { Testimonials } from "@/components/Testimonials";
import { InView } from "@/components/in-view";
import DemoStoreCard from "@/components/DemoStoreCard";
import Cta from "./Cta";
import FaqPage from "./FaqPage";
import StepsCard from "./StepsCard";
import BentoGrid from "./BentoGrid";
import Pricing from "./Pricing";
import { HowItWorks } from "./HowItWork";
import NewHero from "./NewHero";
import StepsCard2 from "./StepsCard2";

export default function HomePage() {
  return (
    <main>
      <NewHero />
      {/* <Cta /> */}

      <StepsCard />

      <HowItWorks />
      <StepsCard2 />
      <DemoStoreCard />

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
        <BentoGrid />
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
        <Pricing />
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
        <FaqPage />
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
        <FooterCta />
      </InView>
    </main>
  );
}
