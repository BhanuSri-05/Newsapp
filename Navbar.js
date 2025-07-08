// // import React, { useState, useEffect } from 'react';

// // import NewsList from './NewsList';
// // import Pagination from './Pagination';

// // function AllNews() {
// //   const [news, setNews] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [pageSize, setPageSize] = useState(15);

// //   useEffect(() => {
// //     const fetchNews = async () => {
// //       const response = await fetch(https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=${pageSize});
// //       const data = await response.json();
// //       setNews(data);
// //     };
// //     fetchNews();
// //   }, [page, pageSize]);

// //   return (
// //     <div>
// //       <NewsList news={news} />
// //       <Pagination page={page} setPage={setPage} />
// //     </div>
// //   );
// // }

// // export default AllNews;






// // import React, { useState, useEffect } from 'react';

// // function AllNews() {
// //   const [news, setNews] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [pageSize, setPageSize] = useState(15);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchNews = async () => {
// //       try {
// //         const response = await fetch(https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=${pageSize});
// //         const data = await response.json();
// //         setNews(data);
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchNews();
// //   }, [page, pageSize]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       {news.map((article, index) => (
// //         <div key={index}>
// //           <h2>{article.title}</h2>
// //           <p>{article.description}</p>
// //         </div>
// //       ))}
// //       {/* <button onClick={() => setPage(page - 1)}>Previous</button>
// //       <button onClick={() => setPage(page + 1)}>Next</button> */}
// //     </div>
// //   );
// // }

// // export default AllNews;








// // import React, { useState, useEffect } from 'react';

// // function AllNews() {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchNews = async () => {
// //       try {
// //         const response = await fetch('https://your-api-url.com/all-news');
// //         const data = await response.json();
// //         setNews(data.data.articles);
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchNews();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// // return (
// //     <div className="news-grid">
// //       {news.map((article, index) => (
// //         <div key={index} className="news-card">
// //           <h2>{article.title}</h2>
// //           <p>{article.description}</p>
// //           <img src={article.urlToImage} alt={article.title} />
// //           <a href={article.url}>Read more</a>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default AllNews;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import NewsCard from './NewsCard';

// // function AllNews() {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [page, setPage] = useState(1);
// //   const [pageSize, setPageSize] = useState(15);

// //    useEffect(() => {
// //     const fetchNews = async () => {
// //       try {
// //         const response = await axios.get(https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=${pageSize});
// //         if (response.data.success) {
// //           setNews(response.data.articles);
// //         } else {
// //           setError(response.data.message);
// //         <div>Error: {response.data.message}</div>;
// //       }
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }}, [page, pageSize]
// // );


// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className="news-grid">
// //       {news.map((article, index) => (
// //         <NewsCard key={index} article={article} />
// //       ))}
// //     </div>
// //   );
// // }



// // export default AllNews;












// // import React, { useState, useEffect } from 'react';

// // function AllNews() {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //  useEffect(() => {
// //     const fetchNews = async () => {
// //       try {
// //         const response = await fetch('https://news-app-seven-delta.vercel.app/all-news?page=1&pageSize=15');
// //         if (response.ok && response.status === 200) {
// //           const data = await response.json();
// //           setNews(data.articles);
// //         } else {
// //           setError(Error: ${response.status});
// //         }
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

   
// //     fetchNews();
// //   }, []);

// //  if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className="news-grid">
// //       {news.map((article, index) => (
// //         <div key={index} className="news-card">
// //           <h3>{article.title}</h3>
// //           <p>{article.description}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// // export default AllNews;




// // // // AllNews.js
// // // import React from 'react';
// // // import News from './News';

// // // const AllNews = () => {
// // //   return <News type="AllNews" />;
// // // };

// // // export default AllNews;





// // // import React, { useEffect, useState } from 'react'
// // // import { useParams } from 'react-router-dom';

// // // function AllNews() {

// // //     const { CardId } = useParams();

// // //     const [Card, setCard] = useState({})

// // //     const fetechCard = async () => {

// // //         const response = await fetch(https://news-app-seven-delta.vercel.app/all-news?page=1&pageSize=15);

// // //         console.log(response, "resp")

// // //         const data = await response.json()

// // //         console.log(data, "data")

// // //         setCard(data)
// // //     }
// // //     console.log(Card, "Card")

// // //     useEffect(
// // //         () => {
// // //             fetechCard()
// // //         }, []
// // //     )
// // //     return (
// // //         <div class="p-3 mb-2 bg-secondary text-white">

// // //                 <h1 class='text-bg-info p-3'>{Card.title}</h1>

// // //                 <img src={Card.image} alr="image" width={300} />

// // //                 <p class='text-bg-success p-3'>{Card.description}</p>

// // //                 <p class='text-bg-success p-3'>{Card.URL}</p>

// // //                 <p class='text-bg-success p-3'>{Card.Source}</p>

// // //                 <p class='text-bg-success p-3'>{Card.Author}</p>

// // //                 <p class='text-bg-success p-3'>{Card.date}</p>




                



                

// // //             </div>
// // //                 )

// // // }
// // // export default AllNews;










// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import News from './News';

// // // const AllNews = () => {
// // //     const [articles, setArticles] = useState([]);

// // //     useEffect(() => {
// // //        axios.get('https://news-app-seven-delta.vercel.app/all-news?page=1&pageSize=15')
// // //            .then(response => setArticles(response.data.articles || []))
// // //            .catch(error => console.error('Error fetching news:', error));
// // //     }, []);

// // //     return (
// // //         <div className="container mt-5">
// // //             {articles.length === 0 ? (
// // //                 <h4 className="text-center">There is no news updates here.</h4>
// // //             ) : (
// // //                 articles.map((article, index) => (
// // //                     <News
// // //                         key={index}
// // //                         title={article.title}
// // //                         description={article.description}
// // //                         imageUrl={article.urlToImage}
// // //                         url={article.url}
// // //                         source={article.source?.name}
// // //                         author={article.author}
// // //                         publishedAt={article.publishedAt}
// // //                     />
// // //                 ))
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default AllNews;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import NewsCard from './NewsCard';
// import Pagination from './Pagination';
// import { useSearchParams } from 'react-router-dom';

// function AllNews() {
//   const [news, setNews] = useState([]);
//   const [totalResults, setTotalResults] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const pageSize = 15;

//   // Get page from URL or default to 1
//   const currentPage = parseInt(searchParams.get('page')) || 1;

//   const fetchAllNews = async () => {
//     setLoading(true);
//     setError(null);
// //     console.log("📡 Fetching All News...");
// // console.log("API Response:", response.data);

//     try {
//       const response = await axios.get(https://news-app-seven-delta.vercel.app/all-news, {
        
//         params: {
//           page: currentPage,
//           pageSize: pageSize,
//         },
//       });

//       if (response.data && response.data.articles) {
//         setNews(response.data.articles);
//         setTotalResults(response.data.totalResults || 0);
//       } else {
//         setNews([]);
//         setTotalResults(0);
//       }
//     } catch (err) {
//       setError('Failed to fetch news. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllNews();
// //     console.log("📡 Fetching All News...");
// // console.log("API Response:", response.data);

//   }, [currentPage]);

//   const handlePageChange = (newPage) => {
//     setSearchParams({ page: newPage });
//   };

//   return (
//     <div className="container py-4">
//       <h2 className="mb-4 text-center">All News</h2>

//       {loading && <div className="text-center">Loading news...</div>}
//       {error && <div className="alert alert-danger text-center">{error}</div>}

//       {!loading && !error && news.length === 0 && (
//         <div className="text-center text-muted">There is no news updates here.</div>
//       )}

//       <div className="row">
//         {news.map((item, index) => (
//           <NewsCard
//             key={index}
//             title={item.title}
//             description={item.description}
//             url={item.url}
//             urlToImage={item.urlToImage}
//             source={item.source?.name}
//             publishedAt={item.publishedAt}
//           />
//         ))}
//       </div>

//       {!loading && news.length > 0 && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={Math.ceil(totalResults / pageSize)}
//           onPageChange={handlePageChange}
//         />
//       )}
//     </div>
//   );
// }

// export default AllNews;

import React, { useContext } from 'react';
//import { Link, NavLink } from 'react-router-dom';
import { Link, useNavigate, NavLink } from 'react-router-dom';

//import { ThemeContext } from './ThemeContext';
import { ThemeContext } from '../context/ThemeContext';

// function Navbar() {
//   const { darkMode, toggleDarkMode } = useContext(ThemeContext);
const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const categories = ['Business', 'Science', 'Sports', 'Entertainment', 'General', 'Health', 'Technology'];
  const countries = ['us', 'in', 'gb', 'au'];

  

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid ps-5">
        <Link className="navbar-brand ps-5 text-primary" to="/"><h4>NewsApp</h4></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className='d-flex'>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item pe-5">
              <NavLink className="nav-link pe-5" to="/all-news">All News</NavLink>
            </li>

            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle pe-5" href="#" id="headlineDropdown" role="button" data-bs-toggle="dropdown">
                Top Headlines
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/headlines/business">Business</Link></li>
                <li><Link className="dropdown-item" to="/headlines/science">Science</Link></li>
                <li><Link className="dropdown-item" to="/headlines/sports">Sports</Link></li>
                <li><Link className="dropdown-item" to="/headlines/technology">Technology</Link></li>
              </ul>
            </li> */}

             <li className="nav-item dropdown pe-5">
              {/* Changed <span> to <a> for Bootstrap dropdown toggle */}
              <a className="nav-link dropdown-toggle pe-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Top Headlines
              </a>
              <ul className="dropdown-menu">
                {categories.map(cat => (
                  <li key={cat}>
                    {/* Changed <span> to <a> for dropdown items */}
                    <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); navigate(`/top-headlines/${cat}`); }}>
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle pe-5" href="#" id="countryDropdown" role="button" data-bs-toggle="dropdown">
                Country
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/country/us">United States</Link></li>
                <li><Link className="dropdown-item" to="/country/in">India</Link></li>
                <li><Link className="dropdown-item" to="/country/gb">UK</Link></li>
                <li><Link className="dropdown-item" to="/country/au">Australia</Link></li>
              </ul>
            </li> */}

             <li className="nav-item dropdown pe-5">
              {/* Changed <span> to <a> for Bootstrap dropdown toggle */}
              <a className="nav-link dropdown-toggle pe-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </a>
              <ul className="dropdown-menu">
                {countries.map(code => (
                  <li key={code}>
                    {/* Changed <span> to <a> for dropdown items */}
                    <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); navigate(`/country/${code}`); }}>
                      {code.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

          </ul>

          {/* Dark Mode Toggle */}
          {/* <div className="form-check form-switch text-nowrap">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div> */}
          <button className="pe-5" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

        </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
