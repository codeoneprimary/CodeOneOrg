import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHome, FaChevronRight } from "react-icons/fa";
import "./Blog.css";

// Header component
const BlogHeader = () => (
  <div
    className="blog-header-section"
    style={{ backgroundImage: "url('/path-to-your-blog-banner-image.jpg')" }}
  >
    <div className="header-overlay"></div>
    <div className="header-content-v2">
      <h1 className="header-main-title-v2">Tech Insights & News</h1>
      <div className="header-breadcrumb-v2">
        <FaHome style={{ marginRight: "5px" }} /> CodeOne Technologies
        <FaChevronRight style={{ margin: "0 8px" }} /> Blog
      </div>
    </div>
  </div>
);

// Article card component
const ArticleCard = ({ article, index }) => (
  <article className="blog-article-card" key={index}>
    {article.urlToImage && (
      <div className="card-image-wrapper">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="card-image"
        />
      </div>
    )}
    <div className="card-content">
      <h2 className="card-title">{article.title}</h2>
      <p className="card-description">{article.description}</p>
      <p className="card-source">Source: {article.source.name}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-read-more"
      >
        Read the full story →
      </a>
    </div>
  </article>
);

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use Vite env variable here
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`
      )
      .then((res) => {
        if (res.data.status === "ok") {
          setArticles(res.data.articles || []);
        } else {
          console.error("Error fetching news:", res.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [API_KEY]);

  return (
    <div className="blog-page-container">
      <BlogHeader />
      <section className="blog-content-section">
        <div className="content-wrapper">
          <h2 className="section-title text-center"></h2>

          {loading ? (
            <p className="loading-message">Loading today's tech news...</p>
          ) : articles.length > 0 ? (
            <div className="articles-grid">
              {articles.map((article, index) => (
                <ArticleCard key={index} article={article} index={index} />
              ))}
            </div>
          ) : (
            <p className="no-news-message">
              No news available at this moment. Please check back later.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
