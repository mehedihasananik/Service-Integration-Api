import React from "react";

export default function ShowcaseProjects() {
  // Statistics Data
  const statisticsData = [
    {
      id: 1,
      count: "800+",
      label: "Websites build",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/26684aa8f35edd61be877ff82151124536ee8424f36a37ab1faf0c3c4399c33c?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
    {
      id: 2,
      count: "97%",
      label: "Client satisfaction",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/50c23cc415af792a0c9a33b7ab5287dd8097257f5c3123eec52067efb305a390?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
    {
      id: 3,
      count: "25+",
      label: "Team members",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/c7f49d7df514be5c977631e7fbc60f0b4edc5d270f61a232fe26a0f4a8633ecd?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
    {
      id: 4,
      count: "300+",
      label: "Amazing clients",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/f218d0b1d33ddf7902c976efd34a38b1b49bdeb88758c4b1f48441eb00b85ae3?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
  ];

  // Divider Component Inline
  const Divider = () => (
    <img loading="lazy" src="/assets/Divider.png" alt="" className="" />
  );

  return (
    <div className="">
      <section className="showcase_section  flex overflow-hidden flex-col justify-center items-center px-10 py-14 rounded-lg max-md:px-5 md:pt-[0%]">
        {/* Title */}
        <h2 className="text-[20px] md:text-4xl font-extrabold leading-none text-center text-[#0A2C8C] max-md:max-w-full">
          Numbers that showcase our success
        </h2>
        {/* Subtitle */}
        <p className="mt-2 combo_des w-[656px] max-md:max-w-full">
          Over the years, we&apos;ve transformed countless businesses,
          delivering measurable growth and unmatched customer satisfaction. See
          the impact we&apos;ve made!
        </p>
        {/* Statistics */}
        <div className="containerStats flex flex-wrap space-y-5 md:space-y-0 md:gap-5 justify-between px-16 py-10 mt-6 w-full font-semibold text-white rounded-xl max-w-[1340px]">
          {statisticsData.map((stat, index) => (
            <React.Fragment key={stat.id}>
              {/* Statistic Card Inline */}
              <article className="flex space-x-5 items-center">
                <img
                  loading="lazy"
                  src={stat.icon}
                  alt={stat.label}
                  className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <p className="text-[24px] font-semibold leading-none font-Inter">
                    {stat.count}
                  </p>
                  <p className="mt-2 text-[16px] font-semibold text-base leading-none font-Inter">
                    {stat.label}
                  </p>
                </div>
              </article>
              {/* Divider */}
              <div className="hidden md:block">
                {index < statisticsData.length - 1 && <Divider />}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
