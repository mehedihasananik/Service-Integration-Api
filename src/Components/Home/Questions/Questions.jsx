"use client";
import React, { useState, useEffect } from "react";
import Accordion from "@/Components/Accordion/Accordion";
import { faqApi } from "@/config/apis";

const Questions = ({ className, title }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`${faqApi}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);
  // console.log(questions.FaqDataArray);

  return (
    <div className="max-w-[1520px] mx-auto px-[0%] md:px-[4%] lg:px-[8%] 4xl:px-[4%]  md:mt-0">
      <div className={`py-6 md:pt-0 md:pb-10 ${className}`}>
        <div className="max-w-[1680px] mx-auto">
          <div className="text-center">
            <h3 className="text-[#0F172A] text-[24px] md:text-[30px] lg:text-[48px] font-bold font-Raleway pb-3 md:pb-5 md:pt-3">
              {title}
            </h3>
            <div className="flex justify-center">
              <p className="text-[#0F172A] text-[14px] md:text-[16px] w-full md:w-2/3 lg:w-1/2">
                Here, you&apos;ll find answers to the most common questions and
                concerns our clients have. We&apos;ve compiled this
                comprehensive resource to provide you with the information you
                need, right at your fingertips.
              </p>
            </div>
          </div>
          <div className="py-4 md:py-8">
            <div className="rounded-lg">
              {questions?.FaqDataArray?.map((question) => (
                <Accordion
                  key={question.id}
                  title={question.title}
                  answer={question.details}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
