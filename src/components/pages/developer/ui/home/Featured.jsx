import React from "react";
import Card from "../partials/Card";
import SectionHeader from "./SectionHeader";

const Featured = ({ isLoading, posts }) => {
  const getFeatured = () =>
    posts?.data.filter((item) => item.posts_category_id === 4);


    
  return (
    <>
      <section className="featured pb-10">
        <div className="container">
          <SectionHeader title="Featured Now" hasLink="true" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* {!isLoading &&
                posts?.data.map((item, key) => (
                  <Card height="sm" item={item} key={key} />
                ))} */}
            {!isLoading &&
              getFeatured().map((item, key) => (<Card height="sm" item={item} key={key} />))}
            {/* <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
