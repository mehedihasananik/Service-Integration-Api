import Container from "@/Components/Container/Container";
import React from "react";

async function getMetadata() {
  const service = await fetch(
    `http://192.168.10.16:8000/api/refund_policy`
  ).then((res) => res.json());

  return service;
}

export async function generateMetadata() {
  const service = await getMetadata();
  // console.log(service?.meta?.seo_meta?.owner);

  return {
    title: `${
      service?.meta?.seo_meta?.title || service.basic.title
    } || Envobyte`,
    description: service?.meta?.seo_meta?.description,
    keywords: service?.meta?.seo_meta?.keywords,
    authors: [{ name: service?.meta?.seo_meta?.author }],
    robots: service?.meta?.seo_meta?.robots,
    other: {
      googlebot: service?.meta?.seo_meta?.googlebot,
      language: service?.meta?.seo_meta?.language,
      copyright: service?.meta?.seo_meta?.copyright,
      distribution: service?.meta?.seo_meta?.distribution,
      coverage: service?.meta?.seo_meta?.coverage,
      rating: service?.meta?.seo_meta?.rating,
      owner: service?.meta?.seo_meta?.owner,
      "google-site-verification":
        service?.meta?.seo_meta?.["google-site-verification"],
      "msvalidate.01": service?.meta?.seo_meta?.["msvalidate.01"],
      alexaVerifyID: service?.meta?.seo_meta?.alexaVerifyID,
      pinterest: service?.meta?.seo_meta?.pinterest,
      "yandex-verification": service?.meta?.seo_meta?.["yandex-verification"],
      baidu: service?.meta?.seo_meta?.baidu,
      facebook: service?.meta?.seo_meta?.facebook,
      "article:published_time":
        service?.meta?.seo_meta?.["article:published_time"],
    },
    openGraph: {
      title: service?.meta?.og?.title,
      description: service?.meta?.og?.description,
      type: service?.meta?.og?.type,
      siteName: service?.meta?.og?.site_name,
      url: service?.meta?.og?.url,
      images: [
        {
          url: service?.meta?.og?.image,
          width: 800,
          height: 600,
          alt: service?.meta?.og?.title,
        },
      ],
    },
    twitter: {
      card: service?.meta?.twitter?.card,
      site: service?.meta?.twitter?.site,
      title: service?.meta?.twitter?.title,
      description: service?.meta?.twitter?.description,
      images: [service?.meta?.twitter?.image],
    },
    alternates: {
      canonical: service?.meta?.seo_meta?.canonical,
    },
  };
}

const RefundPolicy = () => {
  return (
    <Container>
      <div className="bg-gray-100  px-8 mt-5 pb-8 pt-5">
        <h1 className="text-4xl font-bold mb-4 text-center pt-3">
          Refund Policy
        </h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
          <p className="mb-4">
            THE PRODUCTS AND SERVICES ARE PROVIDED on an “AS IS” and “AS
            AVAILABLE” BASIS AND ENVOBYTE EXPRESSLY DISCLAIMS ALL OTHER
            WARRANTIES, EXPRESS AND IMPLIED, INCLUDING BUT NOT LIMITED TO, THE
            IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
            PURPOSE.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-left">Refund Policy:</h3>

          <p className="mb-4">Envobyte will entertain refunds on:</p>

          <ul className="list-disc list-inside mb-4">
            <li>
              Once work on a project has commenced, any cancellation initiated
              by the client will result in a partial refund. The refund amount
              will be adjusted based on the proportion of work completed up to
              the point of cancellation.
            </li>
            <li>
              Service Requirements not met: If Envobyte can&apos;t complete
              project requirement, subject to clear, straightforward
              communication on part of the client, provided any and all
              pre-requisites including but not limited to content, graphics,
              specifications, and channels are mentioned. Any additional
              requirements made after the purchase will not be refunded. Before
              starting project, client will have to submit all requirement from
              Requirement Submit page. Any additional changes made during the
              process will not be included in the refund.
            </li>
            <li>
              Timeline is not met: Refunds can only be claimed if 2x of service
              timeline has been passed. In short, if the service has been given
              5 days timeline and 10 business day are gone, the user can claim
              Refund.
            </li>
            <li>
              Service Days and Business Days: Be advised that Service days
              include Monday thru Friday, whereas, Saturdays&Sundays are
              excluded from business days.
            </li>
          </ul>

          <div className="flex flex-col gap-y-2">
            <span className="py-4">
              Without Service or Timeline restrictions, if any user claims
              refund then Envobyte will settle the matter on merit of the
              validity of the claim. Envobyte reserves the right to accept or
              reject any claims, and the management decision will be considered
              final.
            </span>{" "}
            <span>
              NO REFUND WILL BE ENTERTAINED IF A PROJECT IS DELAYED AT THE
              REQUEST OF THE CLIENT, DUE TO THE CLIENT&apos;S INTERNAL
              PROCESSES, LACK OF COMMUNICATION, AND EXPLICIT INSTRUCTIONS ON
              PART OF THE CLIENT.{" "}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-4 text-left pt-3">
            Changes to payment and refund policy:
          </h3>

          <p>
            We reserve the right to change this refunds policy terms and
            conditions at any time. Any such changes will take effect when
            posted on the website.
          </p>
        </section>

        <section id="working_days" className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Our Working Days</h2>
          <p className="mb-4">
            All days are business days except Friday and Saturday.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default RefundPolicy;
