import React from "react";
import { getImageUrl } from "../utils/imageUtil";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const MemberCard = ({
  name,
  designation,
  department,
  years,
  linkedin,
  email,
  imageName,
}) => {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:items-start bg-[#0a0a0a] border border-[#1f2937] rounded-sm shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:border-[#00f0ff] hover:-translate-y-1 transform transition-all duration-300 p-6 h-full cursor-default group">
      <div className="shrink-0 mb-6 xl:mb-0 xl:mr-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)] mx-auto">
          <img
            src={getImageUrl(imageName, "governing-batch")}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/200";
            }}
          />
        </div>
      </div>

      <div className="flex flex-col grow text-center xl:text-left">
        <h2 className="text-2xl font-bold text-white tracking-wide">{name}</h2>
        <p className="font-medium text-lg mb-2 text-[#00f0ff]">{designation}</p>

        <div className="text-gray-400 text-sm mb-4 space-y-1">
          <p className="">{department}</p>
          <p className="text-gray-500">({years})</p>
        </div>

        <div className="flex gap-3 justify-center xl:justify-start mt-auto pt-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111] border border-[#333] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_10px_#00f0ff] transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-full bg-[#111] border border-[#333] text-gray-300 hover:bg-white hover:text-black hover:shadow-[0_0_10px_white] transition-all duration-300"
            >
              <FaEnvelope size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
