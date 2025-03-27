import React from "react";

import Title from "../components/Text/Title";

function SpotPage() {
  return (
    <div className="flex flex-col h-screen grow space-y-4 p-4">
      <Title>PARKING SPOT</Title>
      <div className="grid grid-cols-8 grid-rows-3 gap-2 h-full">
        {[...Array(24)].map((_, index) => (
          <div
            key={index}
            className={`${
              [0, 5, 12, 18, 22].includes(index)
                ? "bg-green-700"
                : "bg-gray-800"
            } flex items-center justify-center text-white font-bold text-2xl rounded-lg h-full`}
          >
            A - {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpotPage;
