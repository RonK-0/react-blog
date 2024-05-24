import React from "react";

const Card_sm = ({item}) => {
  return (
    <>
      <div className="card_sm shadow-[0px_2px_10px_5px_rgba(0,0,0,0.1)] rounded-xl p-5 bg-white">
        <div className="rounded-2xl overflow-hidden h-[250px] mb-5 -mt-10">
          <img
            src="https://via.placeholder.com/300"
            alt=""
            className="object-cover object-center h-[300px] rounded-2xl overflow-hidden hover:scale-110 transition-transform duration-700"
          />
          {/* <Markdown>{item.posts_photo}</Markdown> */}
        </div>
        <small className="hover:bg-accent bg-stone-600 tracking-wider px-3 py-1 rounded-2xl text-white font-bold text-xs">
          {/* {item.posts_category} */}
          Lifestyle
        </small>
        <h3 className="mt-4">
          {/* {item.posts_title} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>
    </>
  );
};

export default Card_sm;
