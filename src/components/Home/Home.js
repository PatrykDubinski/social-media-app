import React from "react";
import PostsController from "../PostsController/PostsController";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <PostsController />
    </div>
  );
};

export default Home;
