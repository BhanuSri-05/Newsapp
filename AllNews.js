// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
function AllNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;
  const pageSize = 15;

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=${pageSize}`)
      .then(res => {
        setNews(res.data.articles || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching all news:", err);
        setError("Failed to load news. Please try again later.");
        setNews([]);
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return <div className="container mt-4 text-center">Loading news...</div>;
  }

  if (error) {
    return <div className="container mt-4 alert alert-danger text-center">{error}</div>;
  }

  return (
    
    <div className="container mt-4 bg-info">
      {news.length > 0 ? (
        // Use Bootstrap grid for a better layout with the h-100 cards
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {news.map((item, idx) => (
            <div className="col" key={idx}>
              <NewsCard {...item} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">There is no news updates here.</p>
      )}
      <Pagination currentPage={page} totalPages={10} onPageChange={(p) => setSearchParams({ page: p })} />
    </div>
  );
}

export default AllNews;