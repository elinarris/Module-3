import React from "react";

function BlogPost(props) {
  return (
    <div className="BlogPost">
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <h2>{props.author}</h2>
      <p>{props.date}</p>
    </div>
  );
}

export default BlogPost;
