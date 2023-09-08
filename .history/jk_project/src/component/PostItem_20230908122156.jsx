import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  console.log(props);
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}.{props.post.title}
          </strong>
        </div>
        <div>{props.post.body}</div>
        <div className="post__btns">
          <MyButton> Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
