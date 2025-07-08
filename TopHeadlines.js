// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import NewsCard from '../components/NewsCard';
// // import Pagination from '../components/Pagination';
// // import React, { useState, useEffect } from 'react';
// // const TopHeadlines = () => {
// //   const { category } = useParams();
// //   const [news, setNews] = useState([]);
// //   const [page, setPage] = useState(1);

// //   useEffect(() => {
// //     axios.get(`https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=${page}&pageSize=15`)
// //       .then(res => setNews(res.data.articles || []))
// //       .catch(() => setNews([]));
// //   }, [category, page]);

// //   return (
// //     <div className="container mt-4">
// //       {news.length ? news.map((item, i) => <NewsCard key={i} {...item} />) : <p>There is no news updates here.</p>}
// //       <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
// //     </div>
// //   );
// // };

// // export default TopHeadlines;
// import React, { useState, useEffect } from 'react';
// //import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import NewsCard from '../components/NewsCard';
// import Pagination from '../components/Pagination';

// import { useParams, useSearchParams } from 'react-router-dom';
// const Headlines = () => {
//   const { category } = useParams();
//   const [news, setNews] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
// const [searchParams, setSearchParams] = useSearchParams();
//  const pageSize = 15;
//   useEffect(() => {
//     setPage(1);
//   }, [category]);

// //   useEffect(() => {
// //     //axios.get(`https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=${page}&pageSize=15`)
// //     axios.get(`https://newsapi.org/v2/top-headlines?country=${category}&page=${page}&pageSize=15&apiKey=YOUR_API_KEY`)

// //       .then(res => {
// //         console.log("API Response:", res.data); // 👈 Add this
// //         const articles = res.data.articles || [];
// //         setNews(articles);
// //         setTotalPages(Math.ceil((res.data.totalResults || articles.length) / 15));
// //       })
// //       .catch(() => setNews([]));
// //   }, [category, page]);
// useEffect(() => {
//   axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=15&apiKey=YOUR_API_KEY`)
//     .then(res => {
//          console.log("API Response:", res.data); // 👈 Add this
//       const articles = res.data.articles || [];
//       setNews(articles);
//       setTotalPages(Math.ceil((articles.length || 1) / 15));
//     })
//     .catch(() => setNews([]));
// }, [category, page]);

//   return (
//     <div>
//       {news.length === 0 ? <p>There is no news updates here.</p> : news.map((n, i) => (
//         <NewsCard key={i} {...n} />
//       ))}
//       {/* <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} /> */}
//       <Pagination currentPage={page} totalPages={10} onPageChange={(p) => setSearchParams({ page: p })} />
//     </div>
//   );
// };

// export default Headlines;


import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';

function CategoryNews() {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;
  const pageSize = 15;

  // useEffect(() => {
  //   axios.get(`https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=${page}&pageSize=${pageSize}`)
  //     .then(res => setNews(res.data.articles || []))
  //     .catch(err => setNews([]));
  // }, [category, page]);
  useEffect(() => {
    axios.get(`https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=${pageSize}`)
      .then(res => {
        console.log('API Response:', res.data);
        setNews(res.data.articles || []);
      })
      .catch(err => {
        console.error('API Error:', err);
        setNews([]);
      });
  }, [page]);

  return (
    <div className="container mt-4 bg-info">
      {news.length > 0 ? news.map((item, idx) => (
        <NewsCard key={idx} {...item} />
      )) : <p>There is no news updates here.</p>}
      <Pagination currentPage={page} totalPages={10} onPageChange={(p) => setSearchParams({ page: p })} />
    </div>
  );
}

export default CategoryNews;