import React from "react";
import UIHeader from "../partials/UIHeader";
import UIFooter from "../partials/UIFooter";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { devBaseImgUrl, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hook/useQueryData";
import Markdown from "react-markdown";

const Single = () => {
  const id = getUrlParam().get("id");

  const {
    isLoading,
    isFetching,
    error,
    data: post,
  } = useQueryData(
    `/v1/posts/${id}`, // endpoint
    "get", // method
    "posts" // key
  );

  return (
    <>
      <UIHeader />
      {/* {post?.data.some((item) => (

      ))} */}
      <div className="banner mt-5 pb-10 bg-secondary">
        <div className="container">
        {/* {!projImg?.data.some((item) => item.project_id === project_aid) && (
          <>
            <Slider
              {...settingsMain}
              asNavFor={thumbsSlider}
              ref={(slider) => setMainSlider(slider)}
            >
              <h2>No Images Available at the Moment</h2>
            </Slider>
            <Slider
              {...settingsThumbs}
              asNavFor={mainSlider}
              ref={(slider) => setThumbsSlider(slider)}
            >
              <h2></h2>
            </Slider>
          </>
        )}
          {id != "" && post?.data.some((pst) => pst.posts_aid === id (
            <h1>{pst.posts_title}</h1>
          )) || 
          (<h2>ARTICLE NOT FOUND</h2>)} */}
          <h1 className="max-w-[800px] mx-auto py-10 px-5 bg-header bg-opacity-10 rounded-xl border-2 border-header border-opacity-40 mb-0 text-center text-2xl">
            {post?.data[0].posts_title}
          </h1>

          <div className="grid md:grid-cols-[2fr_1fr] gap-10 mt-5 ">
            <article className="bg-primary rounded-xl px-6 pt-4 pb-6">
              <img src={devBaseImgUrl + "/" + post?.data[0].posts_photo} alt="" />

              <small className="hover:bg-accent bg-stone-600 tracking-wider px-3 py-1 rounded-2xl text-white font-bold text-xs inline-block mb-3">
              {post?.data[0].category_title}
              </small>

              <h2>{post?.data[0].posts_title}</h2>

              <div className="flex justify-between items-center mt-4 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt=""
                    className="rounded-full object-cover size-10 mb-0"
                  />
                  <p className="mb-0 opacity-60">{post?.data[0].posts_author}</p>
                </div>
                <small className="opacity-60">{post?.data[0].posts_publish_date}</small>
              </div>

              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum maiores consequatur quia natus, aspernatur ratione id
                recusandae blanditiis eum odit.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque et cumque dolorum eum omnis molestias, perferendis
                distinctio iusto consequatur, facere saepe officiis ipsam?
                Corrupti accusantium consequuntur eligendi necessitatibus
                corporis doloremque.
              </p>

              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit perferendis aliquid placeat nam deserunt! Minima
                consequatur, quidem impedit, mollitia quisquam consequuntur
                nobis rerum delectus eos alias molestiae! Laudantium earum
                reprehenderit tenetur magnam ut tempore ducimus consequatur
                nostrum voluptatum labore quaerat ratione quos error accusantium
                culpa, vitae et quibusdam. Error, officiis.
              </p>
              <img src="https://via.placeholder.com/800x400" alt="" />

              <ul>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
                  nihil?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore deleniti repellendus officia!
                </li>
              </ul>
               */}
              <Markdown>
                {post?.data[0].posts_article}
              </Markdown>
            </article>
            <aside className="">
              <div className="md:sticky md:top-4">
                <div className="shadow-[0px_2px_10px_5px_rgba(0,0,0,0.1)] p-5 mb-5 rounded-2xl bg-primary">
                  <img
                    src="https://via.placeholder.com/50"
                    alt=""
                    className="rounded-full object-cover size-[120px] mx-auto mb-2"
                  />
                  <h4 className="text-center">{post?.data[0].posts_author}</h4>
                  <p className="text-center leading-snug mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod iusto minus perspiciatis optio sequi culpa incidunt
                    maxime dolor quidem saepe, earum delectus perferendis
                    necessitatibus? Ex sed ipsam molestiae sint aperiam.
                  </p>
                  <ul className="flex justify-center gap-6 my-8">
                    <li>
                      <Link to={"#"}>
                        <FaFacebookF className="text-xl" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <FaTwitter className="text-xl" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <FaInstagram className="text-xl" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <FaYoutube className="text-xl" />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="shadow-[0px_2px_10px_5px_rgba(0,0,0,0.1)] p-5 mb-5 rounded-2xl bg-primary">
                  <h2>Lastest Post</h2>
                  <div className="grid grid-cols-[50px_1fr] gap-3 mb-4">
                    <img
                      src="https://via.placeholder.com/80"
                      alt=""
                      className="rounded-md size-full object-cover"
                    />
                    <div>
                      <h4 className="mb-0">
                        Lorem ipsum dolor sit amet consectetur.
                      </h4>
                      <small>May 5, 2002</small>
                    </div>
                  </div>
                  <div className="grid grid-cols-[50px_1fr] gap-3 mb-4">
                    <img
                      src="https://via.placeholder.com/80"
                      alt=""
                      className="rounded-md size-full object-cover"
                    />
                    <div>
                      <h4 className="mb-0">
                        Lorem ipsum dolor sit amet consectetur.
                      </h4>
                      <small>May 5, 2002</small>
                    </div>
                  </div>
                  <div className="grid grid-cols-[50px_1fr] gap-3 mb-4">
                    <img
                      src="https://via.placeholder.com/80"
                      alt=""
                      className="rounded-md size-full object-cover"
                    />
                    <div>
                      <h4 className="mb-0">
                        Lorem ipsum dolor sit amet consectetur.
                      </h4>
                      <small>May 5, 2002</small>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <UIFooter />
    </>
  );
};

export default Single;
