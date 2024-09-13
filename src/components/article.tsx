'use client'
import React, { useState } from 'react';

const HoverCard = ({ img }: { img: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-96 border border-gray-300 rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 이미지 섹션 */}
      <div
        className={`absolute top-0 z-10 rounded-lg w-full transition-all duration-300 ease-in-out ${isHovered ? 'h-2/3' : 'h-full'
          }`}
      >
        <img
          src={img}
          alt="Placeholder"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* 텍스트 섹션 */}
      <div
        className={`absolute bottom-0 w-full bg-white p-4 transition-all duration-300 ease-in-out 'h-1/3 opacity-100'`}
      >
        <h2 className="text-lg font-semibold">Title of the Card</h2>
        <p className="text-gray-600">This is a description that appears when you hover over the card.</p>
      </div>
    </div>
  );
};

export default HoverCard;
