import pug from "../assets/pug.png";
import doberman from "../assets/doberman.png";
import React, { useState } from "react";

function Comments() {
  const [comments, setComments] = useState(["So cute pug💕", "I want you❤️"]);
  function handleSubmit(event) {
    event.preventDefault();
    const newComment = event.target.comment.value;
    setComments([newComment, ...comments]);
    console.log(comments);
    event.target.comment.value = "";
  }
  return (
    <div className="commentContainer flex-col ml-1 mb-3">
      <div className="commentTitle">
        <span className="font-bold">댓글 {comments.length}개</span>
      </div>
      <div className="commentInputContainer flex my-2">
        <img src={doberman} alt="doberman image" className="w-8 h-8 mr-1" />
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="comment"
              className="commentInput w-[300px] md:w-[768px]"
              placeholder="댓글 추가..."
            />
          </form>
          <hr className="w-[300px] md:max-w-[768px]" />
        </div>
      </div>
      <div className="commentsList">
        <ul>
          {comments.map((item, index) => (
            <li key={index}>
              <div className="commentItem flex my-2">
                <div className="commentProfileImg items-center">
                  <img src={doberman} alt="" className="w-9 h-9 mr-1" />
                </div>
                <div className="items-center">
                  <div className="commentProfileName font-bold text-xs">
                    Mr.Doberman
                  </div>
                  <div className="commentBody text-gray-600 text-xs">
                    {item}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Comments;
