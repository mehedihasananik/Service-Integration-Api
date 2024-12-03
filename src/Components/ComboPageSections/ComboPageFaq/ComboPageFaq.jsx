import React from "react";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { fetchData } from "@/config/fetchData";
import { faqApi } from "@/config/apis";
import ComboPageAccodion from "./ComboPageAccodion";

const ComboPageFaq = async ({ className, title, containerClass }) => {
  const data = await fetchData(faqApi); // Use fetchData instead

  // Filter the questions to include those with featured: "1" or 1
  const questions = data.FaqDataArray.filter(
    (question) => question.featured === "1" || question.featured === 1
  );
  console.log(className);

  return (
    <div
      className={`max-w-[1520px] mx-auto px-[0%] md:px-[4%] lg:px-[8%] 4xl:px-[4%] md:mt-0`}
    >
      <div className={`md:py-6 md:pt-0 md:pb-6 ${className}`}>
        <div className="max-w-[1680px] mx-auto">
          <div className="text-center">
            <h2 className="headings pb-3 md:pb-5 md:pt-5 lg:pt-0">{title}</h2>
            <div className="flex justify-center">
              <p className="text-[#0F172A] text-paragraph w-full md:w-2/3 lg:w-[38%] px-4 md:px-0 ">
                Got questions about SEO and website development? Explore our
                FAQs for clear, actionable insights tailored to you!
              </p>
            </div>
          </div>
          <div className="py-4 md:py-8 lg:px-[15%]">
            <div className="rounded-lg">
              {questions.length === 0 ? (
                <UserLoading />
              ) : (
                questions.map((question, index) => (
                  <ComboPageAccodion
                    key={question.id}
                    index={index}
                    title={question.title}
                    answer={question.details}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboPageFaq;
