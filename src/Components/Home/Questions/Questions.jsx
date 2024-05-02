"use client";
import React, { useState, useEffect } from "react";
import Accordion from "@/Components/Accordion/Accordion";
import Container from "@/Components/Container/Container";
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

  return (
    <Container>
      <div className={`md:py-10 ${className}`}>
        <div className="max-w-[1680px] mx-auto">
          <>
            <div className="text-center">
              <h3 className="text-[#0F172A] text-[30px] md:text-[48px] font-bold font-Raleway pb-5">
                {title}
              </h3>
              <p className="text-[#0F172A] text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> Lorem Ipsum has been the
              </p>
            </div>
            <div className="py-5 md:py-10">
              <div className="md:p-4 rounded-lg">
                {questions.map((question) => (
                  <Accordion
                    key={question.id}
                    title={question.title}
                    answer={question.details}
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

export default Questions;
