import { useEffect, useState } from "react";
import HeroVideoDialog from "./magicui/HeroVideoDialog";

export function HowItWorks() {
  const [videoSrc, setVideoSrc] = useState("");
  const [videoPreviewSrc, setVideoPreviewSrc] = useState("");
  const [videoHeading, setVideoHeading] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cms.flowautomate.io/api/meera-landing-page"
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
    <div className="relative mx-auto max-w-7xl">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-10 leading-10 lg:leading-[7rem]">
          {videoHeading || ""}
        </h1>
      </div>
      <HeroVideoDialog
        videoSrc={videoSrc}
        videoPreviewSrc={videoPreviewSrc}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
