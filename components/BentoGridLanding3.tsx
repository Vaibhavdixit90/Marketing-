import { useEffect, useState } from "react";
import Image from "next/image";

// Define types for API response
interface Feature {
  id: number;
  Section_Image: string;
  Section_Title: string;
  Section_Description: string;
}

interface APIResponse {
  data: {
    attributes: {
      Section_3_Heading: string;
      Section_3_Data: Feature[];
    };
  };
}

export default function BentoGridLanding3() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [heading, setHeading] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cms.flowautomate.io/api/meera-landing-page-3?populate=*"
        );
        const data: APIResponse = await response.json();

        // Extract section heading and features data
        setHeading(data.data.attributes.Section_3_Heading || "Our Features");
        setFeatures(data.data.attributes.Section_3_Data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex flex-col py-10 px-5">
      <h1
        className="text-center text-[34px] font-bold leading-tight  sm:leading-tight sm:text-7xl lg:text-[5.5rem]lg:leading-tight"
        dangerouslySetInnerHTML={{
          __html: heading,
        }}
      ></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="bg-[#ececec] dark:bg-[#1d1d1d] rounded-3xl p-7 shadow-xl transition-all duration-300"
          >
            <div className="relative mb-6 h-[200px] md:h-[300px]">
              <div className="absolute top-3 left-3 bg-white text-black font-bold px-5 py-2 rounded-full shadow-md z-20">
                {index + 1}
              </div>
              <Image
                src={feature.Section_Image || ""}
                alt={feature.Section_Title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-left">
                {feature.Section_Title}
              </h3>
              <p className="text-base leading-relaxed">
                {feature.Section_Description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
