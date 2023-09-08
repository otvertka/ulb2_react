import React from "react";

const PostItem = (props) => {
  console.log(props);
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
        </div>
        <div>Javascript - мова програмування</div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
