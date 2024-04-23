import Container from "@/Components/Container/Container";
import React from "react";

const Terms = () => {
  return (
    <Container>
      <div className="bg-gray-100 mt-5 px-10">
        <div className="container mx-auto px-4 py-8">
          {/* general */}
          <div>
            <h1 className="text-4xl font-bold mb-8 text-center">
              Terms and conditions
            </h1>

            <p className="mb-4">
              Welcome to Envobyte Ltd . Our website offers 100% digital products
              and services under these terms and conditions. By accessing or
              using our site, you agree to be bound by these terms. In order to
              help make the Site a secure environment for the purchase and sale
              of Marketplace Offerings, all users are required to accept and
              comply with these Terms of Use. You agree that by accessing the
              Site and/or the Marketplace Offerings, you have read, understood,
              and agree to be bound by all of these Terms of Use
            </p>

            <h2 className="text-2xl font-bold mb-2">General Terms</h2>

            <p className="mb-4">We may collect the following information:</p>

            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">
                Use of Our Service:
              </span>
              By accessing and placing an order with Preline Labs Ltd, you
              confirm your agreement to our digital-only product policy. We are
              not liable for any indirect damages arising from your use or
              inability to use our site. We may change prices and policies at
              any time and will notify you of significant changes through email.
            </ul>

            <h2 className="text-2xl font-bold mb-2">User Account</h2>
            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">
                Account Responsibility:
              </span>
              By accessing and placing an order with Preline Labs Ltd, you
              confirm your agreement to our digital-only product policy. We are
              not liable for any indirect damages arising from your use or
              inability to use our site. We may change prices and policies at
              any time and will notify you of significant changes through email.
            </ul>
          </div>
          {/* Products and Services */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Products and Services</h2>

            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">
                Digital Product Delivery:
              </span>
              By accessing and placing an order with Preline Labs Ltd, you
              confirm your agreement to our digital-only product policy. We are
              not liable for any indirect damages arising from your use or
              inability to use our site. We may change prices and policies at
              any time and will notify you of significant changes through email.
            </ul>

            <h2 className="text-2xl font-bold mb-2">Order Cancellation</h2>
            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">
                Cancellation Rights:
              </span>
              We may cancel orders at any time for any reason. If this happens,
              we will notify you and issue a refund.
            </ul>
          </div>
          {/*Third-Party Links */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Third-Party Links</h2>

            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">External Sites:</span>
              Our website might have links to third-party sites. We aren&apos;t
              responsible for their content or practices. Please review their
              terms.
            </ul>

            <h2 className="text-2xl font-bold mb-2">
              Product Availability and Errors
            </h2>
            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">
                Information Accuracy:
              </span>
              We try to provide up-to-date information about our 100% digital
              products but errors in pricing and availability may occur. We
              reserve the right to correct any errors without liability.
            </ul>
          </div>
          {/* data rights */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Data Rights</h2>

            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">
                Data Modification and Deletion:
              </span>
              For details on how we handle data modification, deletion, and
              protect your privacy, please refer to our Privacy Policy.
            </ul>

            <h2 className="text-2xl font-bold mb-2">Changes to Terms</h2>
            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">Liability Cap:</span>
              We&apos;re not liable for data loss, lost profits, or any damages
              from using our site.
            </ul>
          </div>
          {/* govt query */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Governing Law and Jurisdiction
            </h2>

            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">Legal Framework:</span>
              These terms are governed by applicable federal laws and
              regulations. Any disputes arising from or relating to the terms
              shall be subject to the exclusive jurisdiction of the competent
              courts as determined by applicable law.
            </ul>

            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <ul className="list-disc list-inside mb-4">
              <span className="text-lg font-bold pr-2 ">Queries: </span>
              If you have questions about these terms, contact us via chat from
              our website.
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Terms;
