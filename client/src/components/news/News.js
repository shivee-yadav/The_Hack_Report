import React, {useState, useEffect} from 'react';
import "./News.css";
import "./NewsCard";
import NewsCard from './NewsCard';
import { newsList } from './data';

const News = () => {

  const [news , setNews ] = useState([]);

  const fetchNews = () => {
    fetch("http://hn.algolia.com/api/v1/search?query=cybersecurity")
    .then(result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  });
  return (
    <section id='news'>
    <div className="container news">
      <div className="new u-title">
        <h2>our platform</h2>
        <p className="out-title">
        delivers latest news related to Cyber Security
        </p>
      </div>
      
        <div className="news-right">
          {
           news.map((n, i) => (
            (i<4 ? <NewsCard key={i} heading={n.title}  /> : null )
            
           ))
          }
        </div>
     
    </div>
  </section>
  )
}

export default News
