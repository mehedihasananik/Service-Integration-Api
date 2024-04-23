import Accordion from "@/Components/Accordion/Accordion";
import Container from "@/Components/Container/Container";
import { faqApi } from "@/config/apis";
import { List } from "react-content-loader";

async function getQuestionContent() {
  const res = await fetch(`${faqApi}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Questions = async ({ className, title }) => {
  const questions = await getQuestionContent();

  return (
    <Container>
      <div className={`py-10 ${className}`}>
        <div className="max-w-[1680px] mx-auto ">
          <>
            <div className="text-center">
              <h3 className="text-[#0F172A] text-[32px] md:text-[48px] font-bold font-Raleway pb-5">
                {title}
              </h3>
              <p className=" text-[#0F172A] text-[16px]  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> Lorem Ipsum has been the{" "}
              </p>
            </div>
            <div className="py-10">
              <div className="p-4  rounded-lg">
                {questions.map((question) => {
                  return (
                    <Accordion
                      title={question.title}
                      answer={question.details}
                      key={question.id}
                    />
                  );
                })}
              </div>
            </div>
          </>
        </div>
      </div>
    </Container>
  );
};

export default Questions;
