import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetBlog() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/writeup/');
      setArticles(response.data);
      console.log('Articles fetched successfully:', response.data);

    } catch (error) {
      console.error('There was an error fetching the articles:', error);
    
    }
  };


  return (
    <div>
     
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>{article.data}</p>
            <small>By {article.username}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetBlog;
