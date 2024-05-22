import React from "react";
import Card from "../partials/Card";
import SectionHeader from "./SectionHeader";

const Fashion = () => {
  return (
    <>
      <section className="fashion pb-10">
        <div className="container">
          <SectionHeader title="Fashion & Style" hasLink="true" />
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
            <Card height="sm"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fashion;
