import React, { useEffect, useState } from "react";
import Image from "next/image";

interface StepData {
  id: number;
  Section_Title: string;
  Section_Description: string;
  Section_Image: string;
}

const StepsCardAgainLanding1: React.FC = () => {
  const [steps, setSteps] = useState<StepData[]>([]);
  const [heading, setHeading] = useState<string>("");

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch(
          "https://cms.flowautomate.io/api/meera-landing-page-3?populate[Section_5_Data][populate]=Section_Image"
        );
        const data = await response.json();
        setHeading(data.data.attributes.Section_5_Heading || "");

        // Add base URL for images in the response
        const baseUrl = "https://cms.flowautomate.io"; // Base URL for images
        const stepsWithFullImageUrl = data.data.attributes.Section_5_Data.map(
          (step: any) => ({
            ...step,
            Section_Image: baseUrl + step.Section_Image.data.attributes.url, // Construct full image URL
          })
        );

        setSteps(stepsWithFullImageUrl);
      } catch (error) {
        console.error("Error fetching steps:", error);
      }
    };

    fetchSteps();
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex flex-col px-4 py-20 md:px-8">
      <h1
        className="text-center text-[28px] font-bold leading-tight md:leading-tight md:text-5xl lg:text-[72px] lg:leading-tight"
        dangerouslySetInnerHTML={{
          __html: heading,
        }}
      ></h1>
      <div className="flex flex-col md:flex-row gap-8 w-full mt-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-5 sm:p-7 rounded-2xl shadow-xl flex-1 bg-[#ececec] dark:bg-[#1d1d1d]"
          >
            <Image
              src={step.Section_Image}
              alt={step.Section_Title}
              width={600}
              height={600}
              loading="lazy"
              className="mx-auto mb-6 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-4 text-left">
              {step.Section_Title}
            </h3>
            <p className="text-base text-left">{step.Section_Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsCardAgainLanding1;
