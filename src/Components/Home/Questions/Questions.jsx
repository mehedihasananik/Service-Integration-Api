"use client";

import React, { useState, useEffect } from "react";
import Accordion from "@/Components/Accordion/Accordion";
import { faqApi } from "@/config/apis";
import Loading from "@/Components/Utilites/Loading/Loading";

const Questions = ({ className, title }) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${faqApi}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);
  // console.log(questions.FaqDataArray)

  return (
    <div className="max-w-[1520px] mx-auto px-[0%] md:px-[4%] lg:px-[8%] 4xl:px-[4%] heading-space">
      <div className={`md:py-6 md:pt-0 md:pb-6 ${className}`}>
        <div className="max-w-[1680px] mx-auto">
          <div className="text-center">
            <h1 className="text-[#0F172A] text-[24px] md:text-[30px] lg:text-[48px] font-bold font-Raleway pb-3 md:pb-5 md:pt-5 lg:pt-0">
              {title}
            </h1>
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
              {isLoading ? (
                <Loading />
              ) : (
                questions?.FaqDataArray?.map((question) => (
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

export default Questions;
