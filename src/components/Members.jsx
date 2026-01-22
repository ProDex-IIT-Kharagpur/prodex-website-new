import React from "react";
import MemberCard from "./MemberCard";
import membersData from "../data/governing-batch-2025-26.json";
import { MdHorizontalRule } from "react-icons/md";

const Members = () => {
  return (
    <div className="container bg-black mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-white mb-0 tracking-wide">
        TEAM
      </h2>
      <div className="grid grid-cols-1 place-items-center w-full mt-0 mb-3">
        <hr className="w-36 col-start-1 row-start-1 border-gray-800" />
        <MdHorizontalRule
          color="#00f0ff"
          size="60px"
          className="col-start-1 row-start-1"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {membersData.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            designation={member.designation}
            department={member.department}
            years={member.years}
            linkedin={member.linkedin}
            email={member.email}
            imageName={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Members;
