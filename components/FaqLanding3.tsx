"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface FaqItem {
  id: number;
  Question: string;
  Answer: string;
}

export default function FaqLanding3() {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const [sectionHeading, setSectionHeading] = useState<string>("");
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get(
          "https://cms.flowautomate.io/api/meera-landing-page-3?populate=*"
        );
        const data = response.data.data.attributes.Data;
        setFaqData(data);
        const sectionHeading = response.data.data.attributes.Section_7_Heading;
        setSectionHeading(sectionHeading || "");
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };
    fetchFaqData();
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {sectionHeading || "Frequently Asked Questions"}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto mt-8 space-y-4 md:mt-16">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="transition-all duration-200 bg-white dark:bg-[#1d1d1d] border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 rounded-[10px]"
          >
            <button
              type="button"
              onClick={() => toggleFaq(faq.id)}
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="w-full text-left text-lg font-semibold">
                {faq.Question}
              </span>

              <svg
                className={`w-6 h-6 text-gray-400 transform ${
                  openFaqId === faq.id ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openFaqId === faq.id && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>{faq.Answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
