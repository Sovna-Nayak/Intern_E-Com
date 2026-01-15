import React from "react";

export default function SizeGuide() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-5">
        <h1 className="text-3xl font-bold text-center mb-2">
          Size Guide
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Find your perfect fit at <b>FashionStyle</b>
        </p>

        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Size</th>
                <th className="border p-3">Bust (in)</th>
                <th className="border p-3">Waist (in)</th>
                <th className="border p-3">Hip (in)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["S", "34–36", "26–28", "36–38"],
                ["M", "38–40", "30–32", "40–42"],
                ["L", "42–44", "34–36", "44–46"],
                ["XL", "46–48", "38–40", "48–50"],
              ].map((row, i) => (
                <tr key={i} className="text-center">
                  {row.map((cell, j) => (
                    <td key={j} className="border p-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-gray-500 text-sm mt-4">
            Measurements may vary slightly. If you are between sizes, we recommend sizing up.
          </p>
        </div>
      </div>
    </section>
  );
}
