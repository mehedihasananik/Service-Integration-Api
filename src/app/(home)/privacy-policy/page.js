import Container from "@/Components/Container/Container";
import JsonLd from "@/Components/Utilites/JsonLd/JsonLd";
import Link from "next/link";
import React from "react";

async function getMetadata() {
  const service = await fetch(
    `http://192.168.10.16:8000/api/privacy_policy`
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

// async function getServiceItems() {
//   const res = await fetch(`http://192.168.10.16:8000/api/privacy_policy`, {
//     next: { revalidate: 10 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const PrivacyPolicy = async () => {
  return (
    <>
      {/* <JsonLd data={serviceItems?.meta?.json_ld} /> */}
      <Container>
        <div className="bg-gray-100 mt-5 md:px-10 overflow-hidden">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Privacy Policy
            </h1>

            <h2 className="text-2xl font-bold mb-2"> INTRODUCTION</h2>
            <p className="mb-4">
              Envobyte collects and uses information through our website
              <Link
                target="_blank"
                className="text-[#FF693B]"
                href={"https://www.envobyte.com"}
              >
                {" "}
                https://www.envobyte.com
              </Link>{" "}
              or our online communications (such as email lists) for the
              purposes set forth within this policy. Information collected
              includes personal information provided in contact enquiries,
              purchases, or when an individual subscribes to our email list. We
              require your e-mail address at a minimum, however, in some cases
              we also ask for additional information to help us better service
              you and fulfil your request. We do not collect any personal
              information that you do not expressly provide. We value your
              privacy, and want to give you more control over how we collect
              your personal data. We will not sell, rent, or share your personal
              information to any third party for marketing purposes without your
              consent. Envobyte complies with the Data Protection Laws of the
              World, US and EU guidelines when dealing with personal
              information. Personal information is information about an
              identifiable individual (a natural person). This policy sets out
              how we will collect, use, disclose and protect your personal
              information. This policy does not limit or exclude any of your
              rights. If you wish to seek further information on the Data
              Protection Laws of the World, see
              <Link
                target="_blank"
                className="text-[#FF693B]"
                href={
                  " https://iapp.org/media/pdf/resource_center/Data-Protection-Full.pdf"
                }
              >
                {" "}
                https://iapp.org/media/pdf/resource_center/Data-Protection-Full.pdf
              </Link>
            </p>

            <h2 className="text-2xl font-bold mb-2">
              WHO DO WE COLLECT YOUR PERSONAL INFORMATION FROM?
            </h2>

            <p className="mb-4">We collect personal information about you:</p>
            <ul className="list-disc list-inside mb-4">
              <li>
                When you provide that personal information to us, including via
                the website and any related service, through any registration or
                subscription process, through any contact with us (e.g.
                telephone call or email), or when you buy or use our services
                and products or from third parties where you have authorised
                this or the information is publicly available. If possible, we
                will collect personal information and country location from you
                directly.
              </li>
              <li>
                When you visit this website we collect anonymous information
                such as your IP address or domain name to analyze site traffic
                for “visits” but this information is not tied to a given
                user&apos;s personal information. This information is collected
                and stored via Google Analytics.
              </li>
              <li>
                When you make a purchase on our website certain types of
                sensitive information, such as financial information, may be
                collected. We do not receive or retain copies of this
                information on our server. We redirect visitors to a secure
                server to complete these transactions and all data is both
                collected and stored by these processors. Current payment
                gateways in user are maintained by 2Checkout.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">
              HOW WE USE YOUR PERSONAL INFORMATION
            </h2>

            <p className="mb-4">We will use your personal information:</p>

            <ul className="list-disc list-inside mb-4">
              <li>to verify your identity.</li>
              <li>to provide services and products to you.</li>
              <li>
                to market our services and products to you, including contacting
                you electronically (e.g. by phone, text or email for this
                purpose)
              </li>
              <li>
                to improve the services and products that we provide to you.
              </li>
              <li>to undertake credit checks of you (if necessary)</li>
              <li>
                to bill you and to collect money that you owe us, including
                authorising and processing credit card transactions.
              </li>
              <li>
                to conduct research and statistical analysis (on an anonymised
                basis)
              </li>
              <li>
                to protect and/or enforce our legal rights and interests,
                including defending any claim.
              </li>
              <li>for any other purpose authorised by you or The Act.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">
              DISCLOSING YOUR PERSONAL INFORMATION
            </h2>

            <p className="mb-4">
              We endeavour to limit the transfer of your personal information to
              only that information that pertains to the service being provided
              by the third party.
            </p>
            <p className="mb-4">
              We may disclose your personal information to:
            </p>

            <ul className="list-disc list-inside mb-4">
              <li>
                {" "}
                any business that supports our services and products, including
                any person that hosts or maintains any underlying IT system or
                data centre that we use to provide the website or other services
                and products{" "}
              </li>
              <li>
                As previously stated: when you make a purchase on our website
                certain types of sensitive information, such as financial
                information, may be collected. We do not receive or retain
                copies of this information on our server. We redirect visitors
                to a secure server to complete these transactions and all data
                is both collected and stored by these processors. Current
                payment gateways in user are maintained by 2Checkout.
              </li>

              <li>
                a credit reference agency for the purpose of credit checking you
              </li>
              <li>
                a credit reference agency for the purpose of credit checking you
              </li>
              <li>
                a person who can require us to supply your personal information
                (e.g. a regulatory authority)
              </li>
              <li>
                any other person authorised by the Act or another law (e.g. a
                law enforcement agency)
              </li>
              <li>any other person authorised by you.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">
              PROTECTING YOUR PERSONAL INFORMATION
            </h2>

            <p>
              We will take reasonable steps to keep your personal information
              safe from loss, unauthorised activity, or other misuse.
            </p>
            <div id="datadeletioninstructions">
              <h2
                className="text-2xl font-bold mb-2 mt-4"
                name="datadeletioninstructions"
              >
                Data Deletion Instructions
              </h2>

              <p>
                At Envobyte, we value your privacy and are committed to ensuring
                the security of your personal information. If you wish to delete
                your data from our systems, please follow the instructions
                below:
              </p>

              <div style={{ listStyle: "none" }}>
                <li>
                  1. Email Us: Send an email to our support team at
                  <Link
                    target="_blank"
                    className="text-[#FF693B] pl-1"
                    href={"https://www.envobyte.com"}
                  >
                    support@envobyte.com.
                  </Link>
                </li>
                <li>
                  2. Subject Line: Include &apos;&apos;Data Deletion
                  Request&apos;&apos; in the subject line of your email.
                </li>
                <li>
                  {" "}
                  3. Account Information: In the body of the email, provide the
                  following information to help us process your request
                  efficiently:
                </li>
                <ul style={{ listStyle: "circle" }} className="px-[35px]">
                  {" "}
                  <li> Your full name</li>
                  <li> Your email address associated with the account</li>
                  <li>
                    {" "}
                    Any relevant account details (e.g., username, user ID)
                  </li>
                </ul>
                <li>
                  4. Verification: Our support team may contact you to verify
                  your identity and confirm your request.
                </li>
                <li>
                  {" "}
                  5. Confirmation: Once your request is verified, we will delete
                  your data from our systems and send you a confirmation email.
                </li>
              </div>
              <div className="pt-3">
                Please note that data deletion is a permanent action and cannot
                be undone. Ensure you have backed up any important information
                before requesting deletion. If you have any questions or need
                further assistance, feel free to contact us at{" "}
                <Link
                  target="_blank"
                  className="text-[#FF693B] pl-1"
                  href={"https://www.envobyte.com"}
                >
                  support@envobyte.com.
                </Link>
                Thank you for choosing Envobyte. We are here to support you.
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-2 mt-4">
              ACCESSING, CORRECTING OR DELETING YOUR PERSONAL INFORMATION
            </h2>

            <p>
              Subject to certain grounds for refusal set out in the Data
              Protection Laws of the World, you have the right to access your
              readily retrievable personal information that we hold and to
              request a correction to your personal information. Before you
              exercise this right, we will need evidence to confirm that you are
              the individual to whom the personal information relates. In
              respect of a request for correction, if we think the correction is
              reasonable and we are reasonably able to change the personal
              information, we will make the correction. If we do not make the
              correction, we will take reasonable steps to note on the personal
              information that you requested the correction. If you want to
              exercise either of the above rights, email us at
              <Link
                target="_blank"
                className="text-[#FF693B] pl-1"
                href={"https://www.envobyte.com"}
              >
                support@envobyte.com.
              </Link>{" "}
              Your email should provide evidence of who you are and set out the
              details of your request (e.g. the personal information, or the
              correction, that you are requesting). We may charge you our
              reasonable costs of providing to you copies of your personal
              information or correcting that information.
            </p>

            <p>
              The way they can delete their accounts by sending a deleting
              request email to
              <Link
                target="_blank"
                className="text-[#FF693B] pl-1"
                href={"https://www.envobyte.com"}
              >
                support@envobyte.com
              </Link>{" "}
              where we handle these requests.
            </p>

            <h2 className="text-2xl font-bold mb-2 mt-4">INTERNET USE</h2>

            <p>
              While we take reasonable steps to maintain secure internet
              connections, if you provide us with personal information over the
              internet, the provision of that information is at your own risk
            </p>

            <ul className="list-disc list-inside mb-4">
              <li>
                If you post your personal information on the website&apos;s blog
                posts, message board or chat room, you acknowledge and agree
                that the information you post is publicly available.
              </li>
              <li>
                If you follow a link on our website to another site, the owner
                of that site will have its own privacy policy relating to your
                personal information. We suggest you review that site&apos;s
                privacy policy before you provide personal information.
              </li>
            </ul>

            <p>
              We use cookies (an alphanumeric identifier that we transfer to
              your computer&apos;s hard drive so that we can recognise your
              browser) to monitor your use of the website.
            </p>
            <p>
              An internet “cookie” is a small piece of code which is placed on
              the your local computer when you visit our website. This helps us
              learn which areas of the website are useful to you and most used
              by our visitors.
            </p>
            <p>
              You can choose whether to accept cookies by changing the settings
              within your browser. If you disable cookies by changing the
              settings on your browser, this may mean that you cannot use all of
              the features of the website.
            </p>

            <h2 className="text-2xl font-bold mb-2 mt-2">
              CHANGES TO THIS POLICY
            </h2>

            <p>
              We may change this policy by uploading a revised policy onto the
              website. The change will apply from the date that we upload the
              revised policy.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
