import React from "react";
import { MdHorizontalRule } from "react-icons/md";

const About = () => {
  return (
    <div className="container bg-black mx-auto px-4 py-10">

      <h2 className="text-4xl font-bold text-center text-white mb-0 tracking-wide uppercase">
        About Us
      </h2>

      <div className="grid grid-cols-1 place-items-center w-full mt-0 mb-8">
        <hr className="w-24 col-start-1 row-start-1 border-gray-800" />
        <MdHorizontalRule
          color="#00f0ff"
          size="60px"
          className="col-start-1 row-start-1"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
      </div>
    </div>
  );
};

export default About;