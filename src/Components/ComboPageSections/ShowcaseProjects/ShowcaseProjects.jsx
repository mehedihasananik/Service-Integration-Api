import React from "react";

export default function ShowcaseProjects() {
  // Statistics Data
  const statisticsData = [
    {
      id: 1,
      count: "200+",
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
      count: "34+",
      label: "Team members",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/c7f49d7df514be5c977631e7fbc60f0b4edc5d270f61a232fe26a0f4a8633ecd?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
    {
      id: 4,
      count: "100+",
      label: "Amazing clients",
      icon: "https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/f218d0b1d33ddf7902c976efd34a38b1b49bdeb88758c4b1f48441eb00b85ae3?apiKey=e7a246693dbe47b68ba0a6f099060cf8&",
    },
  ];

  // Divider Component Inline
  const Divider = () => (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/e7a246693dbe47b68ba0a6f099060cf8/ee01a84e227f2db953da6a0313985be5cccd0397c8e4071e174dc15ffe69e167?apiKey=e7a246693dbe47b68ba0a6f099060cf8&"
      alt=""
      className="object-contain shrink-0 w-px aspect-[0.02] stroke-[1px] stroke-gray-400"
    />
  );

  return (
    <section className="showcase_section flex overflow-hidden flex-col justify-center items-center px-10 py-14 rounded-lg max-md:px-5 ">
      {/* Title */}
      <h2 className="text-4xl font-extrabold leading-none text-center text-blue-900 max-md:max-w-full">
        Numbers that showcase our success
      </h2>
      {/* Subtitle */}
      <p className="mt-6 text-base leading-6 text-center text-slate-500 w-[656px] max-md:max-w-full">
        Over the years, we've transformed countless businesses, delivering
        measurable growth and unmatched customer satisfaction. See the impact
        we've made!
      </p>
      {/* Statistics */}
      <div className="containerStats flex flex-wrap gap-5 justify-between px-16 py-10 mt-6 w-full font-semibold text-white rounded-xl  max-w-[1106px] max-md:px-5 max-md:max-w-full">
        {statisticsData.map((stat, index) => (
          <React.Fragment key={stat.id}>
            {/* Statistic Card Inline */}
            <article className="flex gap-4 items-center">
              <img
                loading="lazy"
                src={stat.icon}
                alt={stat.label}
                className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
              />
              <div className="flex flex-col self-stretch my-auto">
                <p className="text-2xl leading-none">{stat.count}</p>
                <p className="mt-2 text-base leading-none">{stat.label}</p>
              </div>
            </article>
            {/* Divider */}
            {index < statisticsData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
