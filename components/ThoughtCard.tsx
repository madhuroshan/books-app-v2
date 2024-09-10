"use client";

import React from "react";

const ThoughtCard = ({ thought }: { thought: Thought }) => {
  return (
    <div className="p-2 border border-black rounded-lg max-w-[300px]">
      <h2 className="text-lg font-semibold">{thought.title}</h2>
      <p className="text-sm text-gray-500">{thought.author}</p>
      <p className="text-sm mt-2 line-clamp-5">{thought.content}</p>
    </div>
  );
};

export default ThoughtCard;
