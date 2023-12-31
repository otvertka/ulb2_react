import React from "react";

const PostItem = (props) => {
  console.log(props);
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>1. {props.post.title}</strong>
        </div>
        <div>{props.post.body}</div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
