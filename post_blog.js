import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './user_context';
import { useDropzone } from 'react-dropzone';
import './blog.css';
import Header from './header';

const BlogPost = () => {
  const { username, setRedirectPath } = useContext(UserContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username) {
      setRedirectPath('/post-blog');
      navigate('/signup');
      return;
    }
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', subtitle);
    formData.append('username', username.username);
    formData.append('data', content);
    if (image) {
      formData.append('image', image);
    }
  
  
  
    try {
      const response = await axios.post('http://localhost:8000/writeup/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 201) {
        alert('Blog posted successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error posting blog:', error);
      if (error.response) {
        console.log('Response data:', error.response.data);
      }
      alert('Failed to post blog.');
    }
  };
  return (
    <>
      <Header />
      <div className="blog-post-container">
        <form onSubmit={handleSubmit} className="blog-post-form">
          <input
            type="text"
            className="blog-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="blog-subtitle"
            placeholder="Subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <textarea
            className="blog-content"
            placeholder="Write your blog..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {image ? <p>{image.name}</p> : <p>Drag 'n' drop an image, or click to select one</p>}
          </div>
          <button type="submit" className="submit-button">
            Post Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogPost;
