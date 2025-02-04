import { useEffect, useState } from "react";
import HeroVideoDialog from "./magicui/HeroVideoDialog";

export function HowItWorksLanding2() {
  const [videoSrc, setVideoSrc] = useState("");
  const [videoPreviewSrc, setVideoPreviewSrc] = useState("");
  const [videoHeading, setVideoHeading] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cms.flowautomate.io/api/meera-landing-page-2"
        );
        const data = await response.json();

        const videoSrc = data?.data?.attributes?.How_It_Works_Video;
        const videoPreviewSrc =
          data?.data?.attributes?.How_It_Works_Video_Preview;
        const videoHeading = data?.data?.attributes?.How_It_Works_Heading;

        if (videoSrc) setVideoSrc(videoSrc);
        if (videoPreviewSrc) setVideoPreviewSrc(videoPreviewSrc);
        if (videoHeading) setVideoHeading(videoHeading);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl my-[50px] ">
      <div className="mx-auto max-w-7xl">
        <h1
          className="text-4xl font-bold leading-tight sm:leading-tight sm:text-7xl lg:text-[5.5rem]lg:leading-tight text-center"
          dangerouslySetInnerHTML={{
            __html: videoHeading,
          }}
        ></h1>
      </div>
      <HeroVideoDialog
        videoSrc={videoSrc}
        videoPreviewSrc={videoPreviewSrc}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
