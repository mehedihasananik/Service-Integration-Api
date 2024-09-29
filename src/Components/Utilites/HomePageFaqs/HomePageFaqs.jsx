import React from "react";
import Accordion from "@/Components/Accordion/Accordion";
import { faqApi } from "@/config/apis";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";
import { fetchData } from "@/config/fetchData"; // Import fetchData

const HomePageFaqs = async ({ className, title }) => {
  const data = await fetchData(faqApi); // Use fetchData instead

  // Filter the questions to include those with featured: "1" or 1
  const questions = data.FaqDataArray.filter(
    (question) => question.featured === "1" || question.featured === 1
  );

  return (
    <div className="max-w-[1520px] mx-auto px-[0%] md:px-[4%] lg:px-[8%] 4xl:px-[4%] md:mt-0">
      <div className={`md:py-6 md:pt-0 md:pb-6 ${className}`}>
        <div className="max-w-[1680px] mx-auto">
          <div className="text-center">
            <h3 className="text-[#0F172A] text-[20px] md:text-[30px] lg:text-[48px] font-bold font-Raleway pb-3 md:pb-5 md:pt-5 lg:pt-0">
              {title}
            </h3>
            <div className="flex justify-center">
              <p className="text-[#0F172A] text-[16px] md:text-[16px] w-full md:w-2/3 lg:w-1/2 px-4 md:px-0 ">
                Here, you&apos;ll find answers to the most common questions and
                concerns our clients have. We&apos;ve compiled this
                comprehensive resource to provide you with the information you
                need, right at your fingertips.
              </p>
            </div>
          </div>
          <div className="py-4 md:py-8">
            <div className="rounded-lg">
              {questions.length === 0 ? (
                <UserLoading />
              ) : (
                questions.map((question) => (
                  <Accordion
                    key={question.id}
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

export default HomePageFaqs;
