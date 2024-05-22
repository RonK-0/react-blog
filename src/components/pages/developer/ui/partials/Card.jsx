import React from "react";

const Card = ({ height = "lg" }) => {
  return (
    <>
      <div className="card_lg shadow-[0px_2px_10px_5px_rgba(0,0,0,0.1)] rounded-xl p-5 bg-white">
        <div
          className={`overflow-hidden rounded-2xl mb-5 -mt-10 ${
            height === "lg" ? "h-[500px]" : "h-[300px]"
          }`}
        >
          <img
            src="https://via.placeholder.com/300x500"
            alt=""
            className={`object-cover h-full rounded-2xl overflow-hidden hover:scale-110 transition-transform duration-700`}
          />
        </div>

        <small className="hover:bg-accent bg-stone-600 tracking-wider px-3 py-1 rounded-2xl text-white font-bold text-xs">
          Lifestyle
        </small>
        <h3 className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="line-clamp-3 text-balance">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, atque
          natus minus dolores dolorum, autem dolore sapiente doloribus, nihil
          numquam exercitationem laudantium quidem deserunt cupiditate quod.
          Commodi quisquam autem sint.
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/50"
              alt=""
              className="rounded-full object-cover size-10"
            />
            <p className="mb-0 opacity-60">Jhonny T Hale</p>
          </div>
          <small className="opacity-60">August 28, 2022</small>
        </div>
      </div>
    </>
  );
};

export default Card;
