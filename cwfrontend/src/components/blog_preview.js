import React from 'react';
import './comp.css';


const BlogPreview = ({ author, title, description, imageUrl }) => {

  return (
    <div className="blog-preview">
      <div className="text-content">
        <h3 className="author-name">{author}</h3>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="image-content">
        <img src={imageUrl} alt="Blog" className="article-image" />
      </div>
    </div>
  );
};

export default BlogPreview;
