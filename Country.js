// // // import React, { useEffect, useState } from 'react';
// // import { useParams, useSearchParams } from 'react-router-dom';
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import NewsCard from '../components/NewsCard';
// // import Pagination from '../components/Pagination';

// // function CountryNews() {
// //   const { code } = useParams();
// //   const [news, setNews] = useState([]);
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const page = parseInt(searchParams.get('page')) || 1;
// //   const pageSize = 15;

// //   useEffect(() => {
// //     axios.get(`https://news-app-seven-delta.vercel.app/country/${code}?page=${page}&pageSize=${pageSize}`)
// //       .then(res => setNews(res.data.articles || []))
// //       .catch(err => setNews([]));
// //   }, [code, page]);

// //   return (
// //     <div className="container mt-4">
// //       {news.length > 0 ? news.map((item, idx) => (
// //         <NewsCard key={idx} {...item} />
// //       )) : <p>There is no news updates here.</p>}
// //       <Pagination currentPage={page} totalPages={10} onPageChange={(p) => setSearchParams({ page: p })} />
// //     </div>
// //   );
// // }

// // export default CountryNews;
// import React, { useEffect, useState } from 'react';
// import { useParams, useSearchParams } from 'react-router-dom';
// import axios from 'axios';
// import NewsCard from '../components/NewsCard';
// import Pagination from '../components/Pagination';

// function CategoryNews() {
//   const { category } = useParams();
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const page = parseInt(searchParams.get('page')) || 1;
//   const pageSize = 15;

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     axios.get(`https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=${page}&pageSize=${pageSize}`)
//       .then(res => {
//         setNews(res.data.articles || []);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching category news:", err);
//         setError(`Failed to load ${category} news. Please try again later.`);
//         setNews([]);
//         setLoading(false);
//       });
//   }, [category, page]);

//   if (loading) {
//     return <div className="container mt-4 text-center">Loading {category} news...</div>;
//   }

//   if (error) {
//     return <div className="container mt-4 alert alert-danger text-center">{error}</div>;
//   }

//   return (
//     <div className="container mt-4">
//       {news.length > 0 ? (
//         // Use Bootstrap grid for a better layout with the h-100 cards
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           {news.map((item, idx) => (
//             <div className="col" key={idx}>
//               <NewsCard {...item} />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center">There is no news updates for {category} category.</p>
//       )}
//       <Pagination currentPage={page} totalPages={10} onPageChange={(p) => setSearchParams({ page: p })} />
//     </div>
//   );
// }

// export default CategoryNews;

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';

function CountryNews() {
  const { code } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;
  const pageSize = 15;

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`https://news-app-seven-delta.vercel.app/country/${code}?page=${page}&pageSize=${pageSize}`)
      .then(res => {
        setNews(res.data.articles || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching country news:", err);
        setError(`Failed to load news for ${code.toUpperCase()}. Please try again later.`);
        setNews([]);
        setLoading(false);
      });
  }, [code, page]);

  if (loading) {
    return <div className="container mt-4 text-center">Loading news for {code.toUpperCase()}...</div>;
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
        <p className="text-center">There is no news updates for {code.toUpperCase()}.</p>
      )}
      <Pagination currentPage={page} totalPages={10} onPageChange={(p) => setSearchParams({ page: p })} />
    </div>
  );
}

export default CountryNews;