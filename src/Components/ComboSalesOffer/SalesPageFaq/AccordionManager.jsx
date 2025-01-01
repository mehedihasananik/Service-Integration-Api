"use client";
import React, { useState } from "react";
import SalePageAccodion from "./SalePageAccodion";
import UserLoading from "@/Components/Utilites/UserLoading/UserLoading";

const AccordionManager = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-4 md:py-8 lg:px-[15%]">
      <div className="rounded-lg">
        {questions.length === 0 ? (
          <UserLoading />
        ) : (
          questions.map((question, index) => (
            <SalePageAccodion
              key={question.id}
              index={index}
              title={question.title}
              answer={question.details}
              isOpen={activeIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AccordionManager;
