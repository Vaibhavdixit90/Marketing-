"use client";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import React, { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { animate, stagger, useInView } from "framer-motion";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function PlayfulHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="w-full">
      <div className="grid grid-cols-1">
        <div className="lg:col-span-2 py-10  px-4 md:px-0">
          <RoughNotationGroup show={isInView}>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight  text-center",
                manrope.className
              )}
              style={{ lineHeight: 1.3 }}
            >
              Earn{" "}
              <RoughNotation
                type="highlight"
                animationDuration={2000}
                iterations={3}
                color="#facc1580"
                multiline
              >
                <span className="text-currentColor"> $100 </span>
              </RoughNotation>
              on referral and{" "}
              <RoughNotation
                type="underline"
                animationDuration={2000}
                iterations={3}
                color="#facc15"
              >
                <span className="text-currentColor"> 10% </span>
              </RoughNotation>
              on all future transactions -
              <RoughNotation
                type="underline"
                animationDuration={2000}
                iterations={3}
                color="#facc15"
              >
                &nbsp; Perpetually
              </RoughNotation>
            </h2>
          </RoughNotationGroup>
        </div>
      </div>
    </div>
  );
}
