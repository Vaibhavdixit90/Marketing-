import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { LinkPreview } from "./ui/link-preview";
import { RainbowButton } from "./ui/rainbow-button";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";
import { VideoDialogLanding2 } from "./VideoDialogLanding2";

// Define the expected API response type
interface HeroData {
  Top_Heading: string;
  Third_Heading: string;
  Secound_Heading: string;
  Hero_Video_Preview_Link: string;
  Hero_Video_Link: string;
  Hero_Get_Start_Button_Href: string; // Added this field
}

const HeroLanding2 = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(
          "https://cms.flowautomate.io/api/meera-landing-page-2"
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
    <div className="overflow-hidden">
      <section className="pt-6 sm:pt-12 lg:pt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1
              className="px-0 sm:px-6 text-lg mt-14 mx-auto max-w-[90%] sm:max-w-[70%]"
              dangerouslySetInnerHTML={{
                __html: heroData.Top_Heading,
              }}
            ></h1>
            <div
              dangerouslySetInnerHTML={{ __html: heroData.Secound_Heading }}
            />
            <h1
              className="px-0 sm:px-6 text-lg mt-5 sm:mt-14 mx-auto max-w-[90%] sm:max-w-[70%]"
              dangerouslySetInnerHTML={{
                __html: heroData.Third_Heading,
              }}
            ></h1>

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
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1.5em"
                  width="1.5em"
                  className="mr-3"
                >
                  <path d="M14.5 3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" />
                  <path d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-1-5a.5.5 0 11-1 0 .5.5 0 011 0zM4 8a.5.5 0 11-1 0 .5.5 0 011 0zm0 2.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                </svg>
                Book a Consultation
              </Button>
              <div>
                <LinkPreview>
                  <RainbowButton
                    href={heroData.Hero_Get_Start_Button_Href || ""}
                    className="px-14 py-6 font-bold"
                  >
                    Get Started Now
                  </RainbowButton>
                </LinkPreview>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-3 sm:pb-12">
          <VideoDialogLanding2 />
        </div>

        {/* Buttons (Visible only on mobile) */}
        <div className="flex flex-col items-center space-y-4 sm:hidden">
          <Button
            data-cal-namespace={calOptions.namespace}
            data-cal-link={CONSTANTS.CALCOM_LINK}
            data-cal-config={`{"layout":"${calOptions.layout}"}`}
            as="button"
            variant="primary"
            className="flex items-center px-5 py-3 text-center text-base dark:bg-white dark:text-black"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1.5em"
              width="1.5em"
              className="mr-3"
            >
              <path d="M14.5 3a.5.5.0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" />
              <path d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-1-5a.5.5 0 11-1 0 .5.5 0 011 0zM4 8a.5.5 0 11-1 0 .5.5 0 011 0zm0 2.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            </svg>
            Book a Consultation
          </Button>
          <div>
            <LinkPreview>
              <RainbowButton
                href={heroData.Hero_Get_Start_Button_Href || ""}
                className="px-14 py-3 font-bold"
              >
                Get Started Now
              </RainbowButton>
            </LinkPreview>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroLanding2;
