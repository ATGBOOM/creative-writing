import React from 'react';
import BlogPreview from './blog_preview'
import Header from './header'
import artimg from '../assets/articleimage.jpg';


function Home() {
  return (
    <>
        <Header></Header>
        <br/><br/>
        <BlogPreview
          author="Alexander Nguyen in Level Up Coding"
          title="The resume that got a software engineer a $300,000 job at Google."
          description="1-page. Well-formatted."
          imageUrl={artimg}
        />
        <BlogPreview
          author="Arnav"
          title="Binghcillere"
          description="The story of the 2 pandas"
          imageUrl="boombobmom"
        />
        <BlogPreview
          author="Arnav"
          title="Binghciller"
          description="The story of the 2 pandas"
          imageUrl="boombobmom"
        />
    </>
  );
}

export default Home;
