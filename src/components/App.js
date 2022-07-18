import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from './ArticleList'
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </>
    
  );
}

export default App;
