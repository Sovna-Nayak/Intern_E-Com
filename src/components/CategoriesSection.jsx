// import React from "react";

// const CategoriesSection = ({ categories }) => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Shop By Category</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">Browse through our exclusive collections</p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {categories.map((category, index) => (
//             <div 
//               key={index}
//               className="group bg-gray-50 p-6 rounded-xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-red-50 border border-gray-200 hover:border-red-200 transition-all cursor-pointer"
//             >
//               <div className="text-4xl mb-3">{category.icon}</div>
//               <h3 className="font-semibold text-gray-800 group-hover:text-red-600">{category.name}</h3>
//               <p className="text-sm text-gray-500 mt-1">{category.count} items</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;



// import React, { useState } from "react";

// const CategoriesSection = ({ categories }) => {
//   const [activeIndex, setActiveIndex] = useState(null);


//   return (
//     <section className="py-14 bg-white">
//       <div className="container mx-auto px-4">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-3">Shop By Category</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Browse through our exclusive collections
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 gap-x-16 gap-y-14 
//                 max-w-md mx-auto">

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`group w-40 p-6 rounded-2xl border cursor-pointer text-center transition-all duration-300
      
//                 ${
//                   activeIndex === index
//                   ? "bg-red-50 border-red-400 shadow-lg scale-105"
//                   : "bg-gray-50 border-gray-200"
//                 }
//                 hover:border-pink-300 hover:shadow-md`}
//                   //   hover:border-pink-300`}
//                   // style={{ minHeight: "100px" }}
//             >
//               {/* Icon */}
//               <div
//                 className={`text-4xl mb-2
//                   ${
//                     activeIndex === index
//                       ? "text-red-500"
//                       : "text-gray-700 group-hover:text-pink-500"
//                   }`}
//               >
//                 {category.icon}
//               </div>

//               {/* Name */}
//               <h3
//                 className={`font-semibold
//                   ${
//                     activeIndex === index
//                       ? "text-red-600"
//                       : "text-gray-800 group-hover:text-pink-600"
//                   }`}
//               >
//                 {category.name}
//               </h3>

//               {/* Count */}
//               <p className="text-sm text-gray-500">
//                 {category.count} items
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;





import React, { useState } from "react";

const CategoriesSection = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // 🎨 Background colors
  const bgColors = [
    "bg-pink-100 border-pink-400",
    "bg-blue-100 border-blue-400",
    "bg-purple-100 border-purple-400",
    "bg-green-100 border-green-400",
    "bg-yellow-100 border-yellow-400",
    "bg-red-100 border-red-400",
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our exclusive collections
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-14 max-w-md mx-auto">
          {categories.map((category, index) => {
            const colorClass = bgColors[index % bgColors.length];

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group w-40 p-6 rounded-2xl border cursor-pointer text-center
                  transition-all duration-300
                  ${
                    activeIndex === index
                      ? `${colorClass} shadow-lg scale-105`
                      : "bg-gray-50 border-gray-200"
                  }
                  hover:${colorClass.split(" ")[0]} hover:shadow-md`}
              >
                {/* Icon */}
                <div className="text-4xl mb-2 text-gray-700">
                  {category.icon}
                </div>

                {/* Name */}
                <h3 className="font-semibold text-gray-800">
                  {category.name}
                </h3>

                {/* Count */}
                <p className="text-sm text-gray-500">
                  {category.count} items
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;
