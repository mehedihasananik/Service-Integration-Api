import Container from "@/Components/Container/Container";
import React from "react";

const RefundPolicy = () => {
  return (
    <Container>
      <div className=" pb-8 pt-5">
        <h1 className="text-4xl font-bold mb-4 text-center">Return Policy</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="mb-4">
            Thank you for shopping with us! If you are unsatisfied with your
            purchase, we are here to help.
          </p>
          <p className="mb-4">
            All regular-priced items are eligible for refunds and exchanges
            within the first 30 days of purchase. No items will be accepted
            after the 30-day time period has lapsed.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Refund and Exchange Policy
          </h2>
          <p className="mb-4">
            We must receive the item unused and in the same condition as it was
            delivered.
          </p>
          <p className="mb-4">The items must be in the original packaging.</p>
          <p className="mb-4">
            A receipt or proof of purchase is required. We may ask for an email
            for online orders.
          </p>
          <p className="mb-4">
            Items on final sale are not eligible for refunds or exchanges.
          </p>
          <p className="mb-4">
            Items purchased via gift cards will receive an equivalent gift card
            credit in return.
          </p>
          <p className="mb-4">
            Exchanges are only allowed if the item is deemed to be defective or
            damaged.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Exemptions</h2>
          <p className="mb-4">
            The following items will not be eligible for any refunds:
          </p>
          <ul className="list-disc pl-6">
            <li>Gift Cards</li>
            <li>Personal Care Items</li>
            <li>Customized Items</li>
            <li>Final Sale and Clearance Items</li>
            <li>Items Not in Original Condition</li>
            <li>Damaged Items</li>
            <li>Items Beyond the 30-Day Return Window</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Refund Processing Timeline
          </h2>
          <p className="mb-4">
            We aim to process all refunds within two weeks. The amount will be
            refunded back to the original card used for payment, and timelines
            for that depend on the payment processor.
          </p>
          <p className="mb-4">
            All returns received in-store are inspected and processed the same
            day. Online order returns shipped to our warehouse will take a
            maximum of two weeks, but we aim to finish this quicker.
          </p>
          <p className="mb-4">
            All customers will be shown their return status via email and order
            tracking on the store website.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Missing Refunds</h2>
          <p className="mb-4">
            If we have approved a refund but it has nt reflected on your bank
            account yet, please contact your bank or credit card company first.
            It can take up to two weeks for the refund to process seamlessly.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Shipping Costs</h2>
          <p className="mb-4">
            For online orders, we will generate a shipping label for you. Please
            do not send us items of your own accord as the shipping label
            generates a tracking link that we use.
          </p>
          <p className="mb-4">
            If the item is found to be defective or in a non-returnable
            condition, we may recover shipping costs.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p>
            If you have further questions, please contact our customer support
            center where one of our representatives will be happy to assist you.
          </p>
          <p className="font-semibold">
            Customer Service Contact Number: 1-800-OURSTORE
          </p>
          <p className="font-semibold">
            Customer Service Email:{" "}
            <a href="mailto:support@storename.com">support@storename.com</a>
          </p>
          <p className="font-semibold">Customer Service Hours:</p>
          <p>Americas: 8am-5pm EST, Monday to Friday</p>
          <p>Europe: 9am-5pm, Monday to Friday</p>
        </section>
      </div>
    </Container>
  );
};

export default RefundPolicy;
