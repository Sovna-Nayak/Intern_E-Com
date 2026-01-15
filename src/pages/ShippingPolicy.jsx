// import React, { useState } from "react";

// const shippingData = [
//   {
//     q: "What shipping options are available?",
//     a: "FashionStyle offers standard and express shipping options. Availability may vary depending on your delivery location.",
//   },
//   {
//     q: "How long does shipping take?",
//     a: "Most domestic orders are delivered within 2–5 business days. International deliveries may take 7–14 business days depending on customs clearance.",
//   },
//   {
//     q: "Do you offer free shipping?",
//     a: "Yes, FashionStyle offers free shipping on orders above a minimum purchase value, which may vary during promotions.",
//   },
//   {
//     q: "Will I receive tracking information?",
//     a: "Yes, once your order is shipped, a tracking link will be shared via email or SMS so you can monitor delivery status.",
//   },
// ];

// const ShippingPolicy = () => {
//   const [active, setActive] = useState(null);

//   return (
//     <div className="bg-gray-50">
//       <div className="pt-16 pb-10 px-6 max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-3">
//           Shipping Policy
//         </h1>

//         <p className="text-gray-600 text-center mb-8">
//           Learn how orders are shipped and delivered at{" "}
//           <strong>FashionStyle</strong>.
//         </p>

//         <div className="space-y-3">
//           {shippingData.map((item, index) => (
//             <div key={index} className="bg-white border rounded-lg shadow-sm">
//               <button
//                 onClick={() => setActive(active === index ? null : index)}
//                 className="w-full flex justify-between items-center px-5 py-4 text-left font-medium"
//               >
//                 {item.q}
//                 <span className="text-xl font-bold">
//                   {active === index ? "−" : "+"}
//                 </span>
//               </button>

//               {active === index && (
//                 <div className="px-5 pb-4 text-gray-600">
//                   {item.a}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <p className="text-sm text-gray-500 text-center mt-8">
//           Last updated: 08/01/2026
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ShippingPolicy;



import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-gray-800">
      {/* Center Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        Shipping Policy
      </h1>

      <p className="text-base text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        At <span className="font-medium text-gray-900">Fashion Style</span>, we
        are committed to delivering your orders safely and on time. This Shipping
        Policy explains how orders are processed, shipped, and delivered.
      </p>

      {/* Shipping Locations */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-2">1. Shipping Locations</h2>
        <p className="leading-relaxed text-gray-700">
          Fashion Style currently ships across India. International shipping
          will be available in the future.
        </p>
      </section>

      {/* Processing Time */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-2">2. Order Processing Time</h2>
        <p className="leading-relaxed text-gray-700">
          All orders are processed within{" "}
          <span className="font-semibold">1–2 business days</span>. Orders placed
          on weekends or public holidays will be processed on the next working
          day.
        </p>
      </section>

      {/* Delivery Time */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-2">3. Delivery Time</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Metro cities: 3–5 business days</li>
          <li>Other locations: 5–7 business days</li>
        </ul>
        <p className="text-sm text-gray-500 mt-2">
          Delivery time may vary due to weather conditions, courier delays, or
          high order volume.
        </p>
      </section>

      {/* Shipping Charges */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-2">4. Shipping Charges</h2>
        <p className="leading-relaxed text-gray-700">
          Free shipping is available on orders above{" "}
          <span className="font-semibold">₹999</span>. Orders below this amount
          will be charged a flat shipping fee of{" "}
          <span className="font-semibold">₹99</span>.
        </p>
      </section>

      {/* Order Tracking */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-2">5. Order Tracking</h2>
        <p className="leading-relaxed text-gray-700">
          Once your order is shipped, you will receive a tracking link via email
          or SMS to monitor your shipment status.
        </p>
      </section>

      {/* Delayed Shipments */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-2">6. Delayed or Lost Shipments</h2>
        <p className="leading-relaxed text-gray-700">
          If your order is delayed, lost, or delivered to the wrong address,
          please contact our support team. We will investigate and assist you as
          soon as possible.
        </p>
      </section>

      {/* Related Pages */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-2">7. Related Information</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li className="cursor-pointer hover:underline">Returns & Exchanges</li>
          <li className="cursor-pointer hover:underline">Size Guide</li>
          <li className="cursor-pointer hover:underline">Privacy Policy</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-lg font-medium mb-2">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions regarding our Shipping Policy, feel free to
          reach out to us at:
        </p>
        <p className="mt-2 font-medium text-gray-900">
          support@fashionstyle.com
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
