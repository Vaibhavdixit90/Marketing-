import React, { useEffect, useState } from "react";
import { HeroVideoDialogDemo } from "./HeroVideoDialog";
import { Button } from "./button";
import { LinkPreview } from "./ui/link-preview";
import { RainbowButton } from "./ui/rainbow-button";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";

// Define the expected API response type
interface HeroData {
  Top_Heading_Page_1: string;
  Secound_Heading_Page_1: string;
  Hero_Video_Preview_Link: string;
  Hero_Video_Link: string;
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
      <section className="pt-6 sm:pt-12 lg:pt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="px-6 text-lg mt-14">{heroData.Top_Heading_Page_1}</h1>
            <p
              className="mt-5 text-[2rem] font-bold leading-tight sm:leading-tight sm:text-7xl lg:text-[5.5rem] lg:leading-tight"
              dangerouslySetInnerHTML={{
                __html: heroData.Secound_Heading_Page_1,
              }}
            ></p>

            {/* Buttons (Hidden on mobile) */}
            <div className="mt-10 flex-shrink-0 px-4 flex-col items-center space-y-5 sm:flex-row sm:space-y-0 sm:items-center sm:justify-center sm:space-x-5 md:px-8 hidden sm:flex">
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
          </div>
        </div>

        <div className="pb-5 sm:pb-12">
          <HeroVideoDialogDemo />
        </div>

        {/* Buttons (Visible only on mobile) */}
        <div className="mt-6 flex flex-col items-center space-y-4 sm:hidden">
          <Button
            data-cal-namespace={calOptions.namespace}
            data-cal-link={CONSTANTS.CALCOM_LINK}
            data-cal-config={`{"layout":"${calOptions.layout}"}`}
            as="button"
            variant="primary"
            className="flex items-center px-5 py-3 text-center text-base dark:bg-white dark:text-black"
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
      </section>
    </div>
  );
};

export default NewHero;
