"use client";
import React, { useState, useEffect } from "react";
import Accordion from "@/Components/Accordion/Accordion";
import Container from "@/Components/Container/Container";
import { faqApi } from "@/config/apis";

const QuestionService = ({ className, title, service }) => {
  const { services_faq } = service;

  return (
    <Container>
      <div className={`pt-6 ${className}`}>
        <div className="max-w-[1680px] mx-auto">
          <>
            <div className="text-center">
              <h3 className="text-[#0F172A] text-[30px] md:text-[48px] font-bold font-Raleway pb-0">
                {title}
              </h3>
            </div>
            <div className="py-5 md:pb-5">
              <div className="md:pt-0 rounded-lg">
                {services_faq.map((question, index) => (
                  <Accordion
                    key={index}
                    title={question.faq_questions}
                    answer={question.faq_answer}
                  />
                ))}
              </div>
            </div>
          </>
        </div>
      </div>
    </Container>
  );
};

export default QuestionService;
