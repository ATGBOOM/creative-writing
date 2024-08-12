import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPreview from './blog_preview';
import Header from './header';
import artimg from '../assets/articleimage.jpg';

const Home = () => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [search, articles]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/writeup/');
      setArticles(response.data);
      console.log('Articles fetched successfully:', response.data);
    } catch (error) {
      console.error('There was an error fetching the articles:', error);
    }
  };

  const filterArticles = () => {
    if (!search) {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.description.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <br /><br />
      {filteredArticles.map((article) => (
        <BlogPreview
          key={article.writeupid}
          author={article.username}
          title={article.title}
          description={article.description}
          imageUrl={'http://127.0.0.1:8000' + article.image || artimg}
        />
      ))}
    </>
  );
};

export default Home;
