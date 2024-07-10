"use client";
import React from "react";
import Accordion from "@/Components/Accordion/Accordion";
import Container from "@/Components/Container/Container";

const QuestionService = ({ className, title, service }) => {
  const { services_faq } = service;

  return (
    <>
      <div className="md:max-w-[1520px] md:mx-auto px-[0%] md:px-[4%] lg:px-[8%] 4xl:px-[4%]">
        <div className={`py-6 md:py-10 ${className}`}>
          <div className="max-w-[1680px] mx-auto">
            <div className="text-center">
              <h3 className="text-[#0F172A] text-[24px] md:text-[30px] lg:text-[48px] font-bold font-Raleway pb-3 md:pb-5">
                {title}
              </h3>
            </div>
            <div className="py-4 md:py-8">
              <div className="rounded-lg">
                {services_faq.map((question, index) => (
                  <Accordion
                    key={index}
                    title={question.faq_questions}
                    answer={question.faq_answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionService;
