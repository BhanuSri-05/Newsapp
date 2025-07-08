// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   return (
//     <nav>
//       <ul className="pagination justify-content-center">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
//           <li key={num} className={`page-item ${num === currentPage ? 'active' : ''}`}>
//             <button className="page-link" onClick={() => onPageChange(num)}>{num}</button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <nav>
      <ul className="pagination justify-content-center ">
        <li className={`page-item pe-5${currentPage === 1 && 'disabled'}`}> 
          <button className="page-link text-primary" onClick={() => onPageChange(currentPage - 1)}>Previous </button>
        </li>
        <li className={`page-item ps-5  ${currentPage === totalPages && 'disabled'}`}>
          <button className="page-link text-primary" onClick={() => onPageChange(currentPage + 1)}> Next</button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;