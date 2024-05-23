import React from "react";
// import { Link } from "react-router-dom";

interface BlogcardProps {
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  content: string;
  //   link: string;
}

const Blogcard: React.FC<BlogcardProps> = ({
  imageSrc,
  author,
  date,
  title,
  content,
  //   link,
}) => {
  return (
    // <Link to={link} className="blog-link">
    <div className="blog">
      <div className="image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="texts">
        <div className="meta">
          <div className="author">{author}</div>
          <div className="date">{date}</div>
        </div>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
    </div>
    // </Link>
  );
};

export default Blogcard;
