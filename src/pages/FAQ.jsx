import React, { useState } from "react";

const faqData = [
  {
    q: "How can I track my order?",
    a: "Once your order is confirmed and shipped, FashionStyle will send you a tracking link via email or SMS. You can track your order status in real time.",
  },
  {
    q: "What are the delivery timelines?",
    a: "Delivery time depends on your location and shipping method. Most domestic orders are delivered within 2–5 business days. International shipping may take longer.",
  },
  {
    q: "What payment methods does FashionStyle accept?",
    a: "FashionStyle accepts credit/debit cards, UPI, net banking, and selected digital wallets. All payments are secured with industry-standard encryption.",
  },
  {
    q: "Can I cancel or return my order?",
    a: "Orders can be cancelled before dispatch. Returns and refunds follow FashionStyle’s Returns & Exchanges policy.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      <div className="pt-16 pb-10 px-6 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Quick answers to common questions about shopping on{" "}
          <strong>FashionStyle</strong>.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium"
              >
                {item.q}
                <span className="text-xl font-bold">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="px-5 pb-4 text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-500 text-center mt-8">
          Last updated: 08/01/2026
        </p>
      </div>
    </div>
  );
};

export default FAQ;
