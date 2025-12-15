import React from "react";
import MentorCard from "./MentorCard";
import mentorsData from "../data/mentors.json";
import { MdHorizontalRule } from "react-icons/md";

const Mentors = () => {
  return (
    <div className="container bg-[#f3f5fa] mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-[#37517e] mb-0">
        MENTORS
      </h2>

      {/* Divider */}
      <div className="grid grid-cols-1 place-items-center w-full mt-0 mb-3">
        <hr className="w-48 col-start-1 row-start-1 text-[#ddd]" />
        <MdHorizontalRule
          color="#47b2e4"
          size="60px"
          className="col-start-1 row-start-1"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {mentorsData.map((mentor, index) => (
          <MentorCard
            key={index}
            name={mentor.name}
            designation={mentor.designation}
            department={mentor.department}
            institution={mentor.institution}
            linkedin={mentor.linkedin}
            email={mentor.email}
            imageName={mentor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
