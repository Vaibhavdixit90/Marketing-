import React, { useEffect, useState } from "react";
import { HeroVideoDialogDemo } from "./HeroVideoDialog";
import { Button } from "./button";
import { LinkPreview } from "./ui/link-preview";
import { RainbowButton } from "./ui/rainbow-button";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";

// Define the expected API response type
interface HeroData {
  Hero_Top_Heading: string;
  Hero_Secound_Heading: string;
  Hero_Video_Preview_Link: string;
  Hero_Video_Link: string;
  Hero_Description: string;
}

const NewHero = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(
          "https://cms.flowautomate.io/api/meera-landing-page"
        );
        const data = await response.json();
        setHeroData(data.data.attributes);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  const calOptions = useCalEmbed({
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    styles: {
      branding: {
        brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
      },
    },
    hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
    layout: CONSTANTS.CALCOM_LAYOUT,
  });

  if (!heroData) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="overflow-x-hidden">
      <section className="pt-12 sm:pt-24 lg:pt-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="px-6 text-lg mt-14">{heroData.Hero_Top_Heading}</h1>
            <p
              className="mt-5 text-[2rem] font-bold leading-tight sm:leading-tight sm:text-7xl lg:text-[5.5rem] lg:leading-tight"
              dangerouslySetInnerHTML={{
                __html: heroData.Hero_Secound_Heading,
              }}
            ></p>

            <div className="mt-10 flex-shrink-0 px-4 flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0 sm:items-center sm:justify-center sm:space-x-5 md:px-8">
              <Button
                data-cal-namespace={calOptions.namespace}
                data-cal-link={CONSTANTS.CALCOM_LINK}
                data-cal-config={`{"layout":"${calOptions.layout}"}`}
                as="button"
                variant="primary"
                className="flex items-center px-5 md:px-14 py-3 text-center text-base dark:bg-white dark:text-black"
              >
                Book a Consultation
              </Button>
              <div>
                <LinkPreview>
                  <RainbowButton href="#" className="px-14 py-3 font-bold">
                    Get Started Now
                  </RainbowButton>
                </LinkPreview>
              </div>
            </div>

            <p className="mt-8 text-base">{heroData.Hero_Description}</p>
          </div>
        </div>

        <div className="pb-12">
          <HeroVideoDialogDemo />
        </div>
      </section>
    </div>
  );
};

export default NewHero;
