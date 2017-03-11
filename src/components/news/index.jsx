import React from 'react';

import Blog from '../blog';

import Blogs from '../../stores/blogs.json'



const news = (props) => {
  const {localization} = props;
  var time = new Date().toLocaleTimeString();

  return <div className = "news-container">
    <h2>{localization.news.title}</h2>
      {
        Blogs.blogs.map((blog, i)=>
        <Blog key={i} blog={blog} />
      )
      }
    </div>;
}

export default news;
