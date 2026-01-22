import React, { useState } from "react";
import faqData from "../data/FAQ.json";
import { MdHorizontalRule } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container bg-black mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-white mb-0 tracking-wide">
        FAQ
      </h2>

      <div className="grid grid-cols-1 place-items-center w-full mt-0 mb-8">
        <hr className="w-24 col-start-1 row-start-1 border-gray-800" />
        <MdHorizontalRule
          color="#00f0ff"
          size="60px"
          className="col-start-1 row-start-1"
        />
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`border rounded-sm transition-colors duration-300 ${
                isOpen
                  ? "bg-[#0a0a0a] border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                  : "bg-[#0a0a0a] border-[#1f2937] hover:border-gray-600"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-medium transition-colors duration-300 ${
                    isOpen ? "text-[#00f0ff]" : "text-white"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`ml-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#00f0ff]" : "text-gray-400"
                  }`}
                >
                  <FaChevronDown />
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-gray-900/50">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
