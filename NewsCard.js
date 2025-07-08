// // import React from 'react';

// // function NewsCard({ article }) {
// //   return (
// //     <div>
// //       <h2>{article.title}</h2>
// //       <p>{article.description}</p>
// //       <img src={article.urlToImage} alt={article.title} />
// //     </div>
// //   );
// // }

// // export default NewsCard;







// // import React from 'react';
// // import newsacard from './newscard.css';
// // function NewsCard({ article }) {
// //   return (
// //     <div className="news-card">
// //       <h3>{article.title}</h3>
// //       <p>{article.description}</p>
// //       <img src={article.urlToImage} alt={article.title} />
// //       <a href={article.url} target="_blank" rel="noopener noreferrer">
// //         Read more
// //       </a>
// //     </div>
// //   );
// // }

// // export default NewsCard;







// // // NewsCard.js
// // import React from 'react';

// // const NewsCard = ({ article }) => {
// //   const {
// //     title,
// //     description,
// //     url,
// //     urlToImage,
// //     source,
// //     publishedAt
// //   } = article;

// //   const defaultImage = 'https://via.placeholder.com/300x180?text=No+Image';

// //   return (
// //     <div className="card h-100 shadow-sm">
// //       <img
// //         src={urlToImage || defaultImage}
// //         className="card-img-top"
// //         alt="news"
// //         style={{ height: '180px', objectFit: 'cover' }}
// //       />
// //       <div className="card-body d-flex flex-column">
// //         <h5 className="card-title">{title}</h5>
// //         <p className="card-text flex-grow-1">{description ? description.slice(0, 100) + '...' : 'No description available.'}</p>
// //         <p className="card-text">
// //           <small className="text-muted">
// //             {source?.name || 'Unknown Source'} | {new Date(publishedAt).toLocaleDateString()}
// //           </small>
// //         </p>
// //         <a href={url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
// //           Read More
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewsCard;
// import React from 'react';

// function NewsCard({ title, description, url, urlToImage, source, publishedAt }) {
//   // Use fallback image if none is provided
//   const image = urlToImage || 'https://via.placeholder.com/400x200?text=No+Image';

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card h-100 shadow-sm">
//         <img
//           src={image}
//           className="card-img-top"
//           alt={title}
//           style={{ height: '200px', objectFit: 'cover' }}
//         />
//         <div className="card-body d-flex flex-column">
//           <h5 className="card-title">{title || 'No Title Available'}</h5>
//           <p className="card-text">
//             {description ? description.slice(0, 120) + '...' : 'No description available.'}
//           </p>
//           <p className="card-text mt-auto">
//             <small className="text-muted">
//               Source: {source || 'Unknown'} | {new Date(publishedAt).toLocaleDateString()}
//             </small>
//           </p>
//           <a
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-primary mt-2"
//           >
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewsCard;


// import React from 'react';

// const NewsCard = ({ title, description, url, urlToImage }) => {
//   return (
//     <div className="card mb-3">
//       {urlToImage && <img src={urlToImage} className="card-img-top" alt="news" />}
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;

import React from 'react';

const NewsCard = ({ title, description, url, urlToImage }) => {
  return (
    <div className="card h-100 shadow-sm">
      {urlToImage && (
        <img src={urlToImage} className="card-img-top" alt="news" style={{ maxHeight: '200px', objectFit: 'cover' }} />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
