import React from "react";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
import { Link } from "react-router-dom";

const Card = ({ height = "lg", item }) => {
  console.log(item);
  return (
    <>
      <div className="card_lg shadow-[0px_2px_10px_5px_rgba(0,0,0,0.1)] rounded-xl p-5 bg-white">
        <div
          className={`overflow-hidden rounded-2xl mb-5 -mt-10 ${
            height === "lg" ? "h-[500px]" : "h-[300px]"
          }`}
        >
          <Link to={`/single?id=${item?.posts_aid}`}>
            <img
              src={devBaseImgUrl + "/" + item?.posts_photo}
              alt=""
              className={`object-cover h-full rounded-2xl overflow-hidden hover:scale-110 transition-transform duration-700`}
            />
          </Link>
        </div>

        <small className="hover:bg-accent bg-stone-600 tracking-wider px-3 py-1 rounded-2xl text-white font-bold text-xs">
          {item?.category_title}
        </small>
        <Link to={`/single?id=${item?.posts_aid}`}>
          <h3 className="my-4">{item?.posts_title}</h3>
        </Link>
        <p className="line-clamp-3 text-balance">{item?.posts_article}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/50"
              alt=""
              className="rounded-full object-cover size-10"
            />
            <p className="mb-0 opacity-60">{item?.posts_author}</p>
          </div>
          <small className="opacity-60">{item?.posts_publish_date}</small>
        </div>
      </div>
    </>
  );
};

export default Card;
