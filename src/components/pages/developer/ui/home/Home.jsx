import React from "react";
import UIHeader from "../partials/UIHeader";
import UIFooter from "../partials/UIFooter";
import BannerSlider from "./BannerSlider";
import Trending from "./Trending";
import Featured from "./Featured";
import Fashion from "./Fashion";
import useQueryData from "../../../../custom-hook/useQueryData";
// import { StoreContext } from "../../../../../store/StoreContext";

const Home = () => {
  // const { store, dispatch } = React.useContext(StoreContext);

  const {
    isLoading,
    isFetching,
    error,
    data: posts,
  } = useQueryData(
    "/v1/posts", // endpoint
    "get", // method
    "posts"
  );

  return (
    <>
      <UIHeader />
      <BannerSlider />
      <Trending posts={posts} isLoading={isLoading} />
      <Featured posts={posts} isLoading={isLoading}/>
      <Fashion/>
      <UIFooter />
    </>
  );
};

export default Home;
