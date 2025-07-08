import React from 'react';
import NewsCard from './NewsCard';

function NewsList({ articles = [], loading = false }) {
  if (loading) {
    return <div className="text-center my-5">Loading news...</div>;
  }

  if (!articles.length) {
    return <div className="text-center text-muted my-5">There is no news updates here.</div>;
  }

  return (
    <div className="row">
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          source={article.source?.name}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  );
}

export default NewsList;