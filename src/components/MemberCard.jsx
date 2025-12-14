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
    <div className="flex flex-col xl:flex-row items-center xl:items-start bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 p-6 h-full cursor-default">
      <div className="shrink-0 mb-6 xl:mb-0 xl:mr-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner mx-auto">
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
        <h2 className="text-2xl font-bold text-[#37517e]">{name}</h2>
        <p className="font-medium text-lg mb-2">{designation}</p>

        <div className="text-gray-600 text-sm mb-4 space-y-1">
          <p className="">{department}</p>
          <p className="text-gray-500">({years})</p>
        </div>

        <div className="flex gap-3 justify-center xl:justify-start mt-auto pt-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
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
