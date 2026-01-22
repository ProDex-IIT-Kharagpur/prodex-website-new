import React from "react";
import MentorCard from "./MentorCard";
import mentorsData from "../data/mentors.json";
import { MdHorizontalRule } from "react-icons/md";

const Mentors = () => {
  return (
    <div className="container bg-black mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-white mb-0 tracking-wide">
        MENTORS
      </h2>

      <div className="grid grid-cols-1 place-items-center w-full mt-0 mb-3">
        <hr className="w-48 col-start-1 row-start-1 border-gray-800" />
        <MdHorizontalRule
          color="#00f0ff"
          size="60px"
          className="col-start-1 row-start-1"
        />
      </div>

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
