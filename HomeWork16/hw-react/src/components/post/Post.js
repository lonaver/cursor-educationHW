import React from "react";
import "./Post.css";

const Post = ({
  author,
  content,
  imagePost,
  date,
  countComment,
  countLook,
  countLikes,
  countDownload,
  theme,
}) => {
  return (
    <div className={`post ${theme}`}>
      <div className="post_header">
        <div className="thumb_photo">
          <img src={author.photoNick} alt="photo author"></img>
        </div>
        <p className="header_name">{author.name}</p>

        <div className="header_date">{date}</div>
      </div>
      <h4 className="post_title">{content}</h4>
      <div className="block">
        <div className="post_image">
          <img src={imagePost} alt="image context"></img>
        </div>

        <form name="form_chat" class="form_chat">
          <div class="chat_comment">
            <label for="comment" class="chat_area">
              Comment
            </label>
            <textarea
              name="comment"
              rows="12"
              placeholder="Welcome"
              id="comment"
            ></textarea>
          </div>
          <button type="button" className="btn">
            WAW!
          </button>
        </form>
      </div>
      <div className="wrapper">
        <a className="wrapper_link comment" href="#">
          {countComment}
        </a>
        <a className="wrapper_link look" href="#">
          {countLook}
        </a>
        <a className="wrapper_link likes" href="#">
          {countLikes}
        </a>
        <a className="wrapper_link download" href="#">
          {countDownload}
        </a>
      </div>
    </div>
  );
};

export default Post;
