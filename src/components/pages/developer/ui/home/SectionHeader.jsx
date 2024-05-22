import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const SectionHeader = ({ title = "Trending", hasLink = false, link="#" }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl border-l-8 border-l-red-500 pl-2">
          {title}
        </h3>
        {hasLink && (
          <Link to={link} className="border rounded-md bg-transparent border-stone-500 px-2 py-1 flex items-center">
            View All <RxDoubleArrowRight />
          </Link>
        )}
      </div>
    </>
  );
};

export default SectionHeader;
