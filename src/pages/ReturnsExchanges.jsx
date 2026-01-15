import React from "react";

const ReturnsExchanges = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-gray-800">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        Returns & Exchanges
      </h1>

      <p className="text-base text-gray-600 text-center mb-8 max-w-3xl mx-auto">
        At <span className="font-medium text-gray-900">Fashion Style</span>, your
        satisfaction is important to us. Please read our Returns & Exchanges
        policy carefully before making a purchase.
      </p>

      {/* 1. Return Eligibility */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-1">
          1. Return Eligibility
        </h2>
        <p className="text-gray-700 leading-relaxed mt-0">
          You can request a return or exchange if the product is damaged,
          defective, incorrect, or does not fit properly.
        </p>
        <p className="text-gray-700 mt-1">
          Requests must be made within{" "}
          <span className="font-semibold">7 days</span> of delivery.
        </p>
      </section>

      {/* 2. Non-Returnable Items */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-1">
          2. Non-Returnable Items
        </h2>
        <ul className="list-disc ml-6 mt-1 text-gray-700 space-y-1">
          <li>Sale or clearance items</li>
          <li>Innerwear and accessories</li>
          <li>Items without original tags or packaging</li>
        </ul>
      </section>

      {/* 3. Exchange Policy */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-1">
          3. Exchange Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mt-0">
          Exchanges are allowed{" "}
          <span className="font-semibold">once per order</span> and are subject
          to stock availability. Size exchanges may not be guaranteed.
        </p>
      </section>

      {/* 4. Refund Process */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-1">
          4. Refund Process
        </h2>
        <p className="text-gray-700 leading-relaxed mt-0">
          Once the returned item is received and inspected, refunds will be
          processed within{" "}
          <span className="font-semibold">5–7 business days</span>.
        </p>
        <p className="text-gray-700 mt-1">
          Refunds will be credited to the original payment method used during
          checkout.
        </p>
      </section>

      {/* 5. How to Request */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-1">
          5. How to Request a Return
        </h2>
        <p className="text-gray-700 leading-relaxed mt-0">
          To request a return or exchange, please contact our support team with
          your <span className="font-semibold">Order ID</span> and reason for the
          request.
        </p>
      </section>

      {/* 6. Related Information */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-1">
          6. Related Information
        </h2>
        <ul className="list-disc ml-6 mt-1 text-gray-700 space-y-1">
          <li className="cursor-pointer hover:underline">Shipping Policy</li>
          <li className="cursor-pointer hover:underline">Size Guide</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-lg font-medium mb-1">
          7. Contact Us
        </h2>
        <p className="text-gray-700 mt-0">
          If you need help with returns or exchanges, feel free to reach out to
          us at:
        </p>
        <p className="mt-1 font-medium text-gray-900">
          returns@fashionstyle.com
        </p>
      </section>
    </div>
  );
};

export default ReturnsExchanges;
