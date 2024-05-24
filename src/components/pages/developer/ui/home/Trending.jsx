import React from "react";
import SectionHeader from "./SectionHeader";
import Card from "../partials/Card";
import Card_sm from "../partials/Card_sm";
import { Link } from "react-router-dom";
import {devBaseImgUrl} from "../../../../helpers/functions-general"

const Trending = ({ isLoading, posts }) => {

  // posts?.data.some((item) => ( item.posts_category_id === 4 && 
  //   console.log(item)
  // ))

  const getTrending = ()=> posts?.data.filter(item => item.posts_category_id === 4);

  // console.log(getTrending())

  return (
    <>
      <section className="trending pt-10 pb-10">
        <div className="container">
          <SectionHeader title="Trending" />
          <div className="grid md:grid-cols-[1fr_2fr] mt-10 gap-10">
            <Card />

            <div className="grid md:grid-cols-2 gap-10">
              {!isLoading &&
                getTrending().slice(0, 4).map((item, key) => (
                  // <Card_sm item={item} key={key} />

                  <div
                    className="card_lg shadow-[0px_2px_10px_5px_rgba(0,0,0,0.1)] rounded-xl p-5 bg-white"
                    key={key}
                  >
                    <div
                      className={`overflow-hidden rounded-2xl mb-5 -mt-10 h-[300px]`}
                    >
                      <Link to={`/single?id=${item.posts_aid}`}>
                        <img
                          src={devBaseImgUrl + "/" + item.posts_photo}
                          alt=""
                          className={`object-cover h-full rounded-2xl overflow-hidden hover:scale-110 transition-transform duration-700`}
                        />
                      </Link>
                    </div>

                    <small className="hover:bg-accent bg-stone-600 tracking-wider px-3 py-1 rounded-2xl text-white font-bold text-xs">
                      {item.category_title}
                    </small>
                    <Link to={`/single?id=${item.posts_aid}`}>
                      <h3 className="my-4">
                        {item.posts_title}
                      </h3>
                    </Link>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://via.placeholder.com/50"
                          alt=""
                          className="rounded-full object-cover size-10"
                        />
                        <p className="mb-0 opacity-60">{item.posts_author}</p>
                      </div>
                      <small className="opacity-60">{item.posts_publish_date}</small>
                    </div>
                  </div>
                ))}
              {/* <Card_sm/>
              <Card_sm/>
              <Card_sm/>
              <Card_sm/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
