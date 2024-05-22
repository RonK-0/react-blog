import React from "react";
import SectionHeader from "./SectionHeader";
import Card from "../partials/Card";
import Card_sm from "../partials/Card_sm";

const Trending = ({ isLoading, posts }) => {
  return (
    <>
      <section className="trending pt-10 pb-10">
        <div className="container">
          <SectionHeader title="Trending" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
            {/* <Card /> */}

            <div className="grid md:grid-cols-2 gap-10">
              {!isLoading &&
                posts?.data.map((item, key) => (
                  <Card_sm item={item} key={key} />
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
