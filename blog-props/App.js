import React from "react";
import Header from "./Header";
import BlogList from "./BlogList";
import Footer from "./Footer";
import BlogPost from "./BlogPost";

function App() {
  const blogStuff = BlogList.map((blog) => (
    <BlogPost
      title={blog.title}
      subTitle={blog.subTitle}
      author={blog.author}
      date={blog.date}
    />
  ));
  return (
    <div className="App">
      <Header />
      {blogStuff}
      <Footer />
    </div>
  );
}

export default App;
