import React, { useEffect, useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa"; // Added icons for the header
import "./Blog.css"; // We'll put all the styles here

// 🌟 Component: Header Section (Matching the pattern of About/Career pages)
const BlogHeader = () => (
  <div
    className="blog-header-section"
    // IMPORTANT: Replace the image path with a suitable banner image
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

// 💻 Component: Article Card
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

  // NOTE: You must update the API key for this to work in production
  const API_KEY = "3adbf3b44f424eeca8a10ed79f7dceb8";

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setArticles(data.articles || []);
        } else {
          console.error("Error fetching news:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

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
