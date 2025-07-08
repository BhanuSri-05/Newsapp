// // import React, { useState, useEffect } from 'react';

// // //import Navigation from './Navigation';
// // import NewsList from './NewsList';
// // import Pagination from './Pagination';
// // import { Link } from 'react-router-dom';

// // function App() {
// //   const [news, setNews] = useState([]);
// //   const [category, setCategory] = useState('all');
// //   const [country, setCountry] = useState('us');
// //   const [page, setPage] = useState(1);
// //   const [pageSize, setPageSize] = useState(15);
// //   const [mode, setMode] = useState('light');

// // //   useEffect(() => {
// // //     const fetchNews = async () => {
// // //       let url = '';
// // //       if (category === 'all') {
// // //         url = `https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=${pageSize}`;
// // //       } else if (country) {
// // //         url = `https://news-app-seven-delta.vercel.app/country/${country}?page=${page}&pageSize=${pageSize}`;
// // //       } else {
// // //         url = `https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=${page}&pageSize=${pageSize}`;
// // //       }
// // //       const response = await fetch(url);
// // //       const data = await response.json();
// // //       setNews(data);
// // //     };
// // //     fetchNews();
// // //   }, [category, country, page, pageSize]);
// // //  const toggleMode = () => {
// // //     setMode(mode === 'light' ? 'dark' : 'light');
// // //   };
// // useEffect(() => {
// //   const fetchNews = async () => {
// //     try {
// //       let url = '';
// //       if (category === 'all') {
// //         url = `https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=${pageSize}`;
// //       } else if (country) {
// //         url = `https://news-app-seven-delta.vercel.app/country/${country}?page=${page}&pageSize=${pageSize}`;
// //       } else {
// //         url = `https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=${page}&pageSize=${pageSize}`;
// //       }

// //       const response = await fetch(url);
// //       const data = await response.json();
// //       setNews(data.articles || []); // ✅ FIXED
// //     } catch (error) {
// //       console.error("Failed to fetch news:", error);
// //       setNews([]);
// //     }
// //   };

// //   fetchNews();
// // }, [category, country, page, pageSize]);

// //   return (
// //     <div className={mode}>
// //       {/* <Navigation
// //         category={category}
// //         setCategory={setCategory}
// //         country={country}
// //         setCountry={setCountry}
// //         toggleMode={toggleMode}
// //       /> */}
// //       <NewsList news={news} />
// //       <Pagination page={page} setPage={setPage} />
// //     </div>
// //   );
// // }

// // export default App;





// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
// // import { useParams } from 'react-router-dom';
// // import './App.css';
// // import AllNews from './AllNews';
// // import HeadLines from './HeadLines';
// // import Country from './Country';
// // import News from './News';


// // function App() {
// //   const categories = ['business', 'science', 'sports', 'health', 'technology'];
// // const countries = ['us', 'in', 'gb', 'au', 'ca'];

// //   //const { page } = useParams();
// //    const [news, setNews] = useState([]);
// //   const [category, setCategory] = useState('all');
// //   const [country, setCountry] = useState('us');
// //   const [page, setPage] = useState(1);
// //   const [pageSize, setPageSize] = useState(15);
// //  // const [mode, setMode] = useState('light');







// //    const [mode, setMode] = useState('light');

// // //   useEffect(() => {
// // //     const storedMode = localStorage.getItem('mode');
// // //     if (storedMode) {
// // //       setMode(storedMode);
// // //     }
// // //   }, []);

// // //   const toggleMode = () => {
// // //     const newMode = mode === 'light' ? 'dark' : 'light';
// // //     setMode(newMode);
// // //     localStorage.setItem('mode', newMode);
// // //   };
// // useEffect(() => {
// //   const fetchNews = async () => {
// //     try {
// //       let url = '';
// //       if (category === 'all') {
// //         url = `https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=${pageSize}`;
// //       } else if (Country) {
// //         url = `https://news-app-seven-delta.vercel.app/country/${country}?page=${page}&pageSize=${pageSize}`;
// //       } else {
// //         url = `https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=${page}&pageSize=${pageSize}`;
// //       }

// //       const response = await fetch(url);
// //       const data = await response.json();
// //       setNews(data.articles || []); // ✅ FIXED
// //     } catch (error) {
// //       console.error("Failed to fetch news:", error);
// //       setNews([]);
// //     }
// //   };

// //   fetchNews();
// // }, [category, country, page, pageSize]);




// //   return (
// //     <BrowserRouter>
// //       <div className="app">
// //          {/* <header className="header">
// //           <h1>News App</h1>
// //           <nav>
// //             <ul>
// //               <li><Link to="/all-news">All News</Link></li>
// //               <li><Link to="/top-headlines">Top Headlines</Link></li>
// //               <li><Link to="/country">Country</Link></li>
// //             </ul>
// //           </nav>
// //         </header>  */}
// //          <nav class="navbar navbar-expand-lg bg-body-tertiary ">
// //                         <div class="container-fluid ">
// //                             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
// //                                 <span class="navbar-toggler-icon"></span>
// //                             </button>
// //                             <div class="collapse navbar-collapse ps-5" id="navbarTogglerDemo01">

// //                                 <a class="navbar-brand text-primary ps-5" href="#">
// //                                     <h3>News App</h3>
// //                                 </a>


// //                                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //                                     <li class="nav-item">
// //                                         <a class="nav-link active" aria-current="page" href="#"></a>
// //                                     </li>
// //                                     <li class="nav-item">
// //                                         <a class="nav-link" href="#"></a>
// //                                     </li>
// //                                     <li class="nav-item">
// //                                         <a class="nav-link disabled" aria-disabled="true"></a>
// //                                     </li>
// //                                 </ul>
// //                                 <form class="d-flex " >
// //                                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //                                         <li class="nav-item pe-4">
// //                                             <a class="nav-link active pe-4" aria-current="page" href="/all-news">
// //                                                 <h6>All News</h6></a>
// //                                         </li>
// //                                         <li class="nav-item pe-4">
// //                                             <a class="nav-link active pe-4" aria-current="page" href="HeadLines.js">
// //                                                 <h6>Top HeadLines</h6></a>
// //                                         </li>
// //                                         {/* <li className="nav-item dropdown">
// //                                             <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
// //                                                 Top Headlines
// //                                             </span>
// //                                             <ul className="dropdown-menu">
// //                                                 {categories.map((cat) => (
// //                                                     <li key={cat}>
// //                                                         <Link className="dropdown-item" to={`/top-headlines`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link>
// //                                                     </li>
// //                                                 ))}
// //                                             </ul>
// //                                         </li> */}
// //                                         <li class="nav-item pe-4">
// //                                             <a class="nav-link active pe-4" aria-current="page" href="#">
// //                                                 <h6>Country</h6></a>


// //                                          </li>
// //                                         {/* <li className="nav-item dropdown">
// //                                             <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
// //                                                 Country
// //                                             </span>
// //                                             <ul className="dropdown-menu">
// //                                                 {countries.map((code) => (
// //                                                     <li key={code}>
// //                                                         <Link className="dropdown-item" to={`/country`}>{code.toUpperCase()}</Link>
// //                                                     </li>
// //                                                 ))}
// //                                             </ul>
// //                                         </li> */}



// //                                         <li class="nav-item  toggle-button mode">
// //                                                     <a class="nav-link active " aria-current="page" href="">

// //                                                         <h6>Dark Mode</h6></a>
// //                                                     {/* <button onClick={toggleMode}>Toggle Mode</button> */}
// //                                                 </li> 

// //                                         {/* <div className="form-check form-switch text-nowrap">
// //                                             <input
// //                                                 className="form-check-input"
// //                                                 type="checkbox"
// //                                                 checked={darkMode}
// //                                                 onChange={toggleDarkMode}
// //                                                 id="darkModeSwitch"
// //                                             />
// //                                             <label className="form-check-label" htmlFor="darkModeSwitch">
// //                                                 {darkMode ? 'Dark Mode' : 'Light Mode'}
// //                                             </label>
// //                                         </div> */}
// //                                         </ul>
// //                                   </form>  







// //                 </div>
// //                             </div >
// //                     </nav >

// //                       <div>
// //        {/* News list content */}

// //      </div>

// //          <Routes>
// //            <Route path="/all-news" component={AllNews} />
// //            <Route path="/top-headlines" component={HeadLines} />
// //            <Route path="/country" component={Country} />
// //          </Routes>
// //        </div>
// //    </BrowserRouter>

// //   );
// // }
// // export default App;




// // // // import React,{ useState } from 'react';
// // // // import { BrowserRouter,Routes,Route } from 'react-router-dom';
// // // // import News from './News';
// // // // import AllNews from './AllNews';
// // // //     function App(){

// // // //         return (
// // // //                 <BrowserRouter>
// // // //                      <Routes>

// // // //                         <Route path='/' element={<News/>}/>
// // // //                      </Routes>
// // // //                     </BrowserRouter>
// // // //         )
// // // //     }
// // // //     export default App;
// // // import React, { useState, useEffect } from 'react';
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // // import News from './News';
// // // //import './App.css';

// // // function App() {
// // //   const [darkMode, setDarkMode] = useState(() => {
// // //     const savedMode = localStorage.getItem('darkMode');
// // //     return savedMode === 'true' ? true : false;
// // //   });

// // //   useEffect(() => {
// // //     document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
// // //     localStorage.setItem('darkMode', darkMode);
// // //   }, [darkMode]);

// // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // //   return (
// // //     <Router>
// // //       {/* <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
// // //       <div className="container mt-3">
// // //         <Routes>
// // //           <Route path="/" element={<Navigate to="/AllNews" />} />
// // //           <Route path="/all-news" element={<News type="AllNews" />} />
// // //           <Route path="/top-headlines/:category" element={<News type="top" />} />
// // //           <Route path="/country/:countryCode" element={<News type="country" />} />
// // //           <Route path="*" element={<h4>404 - Page Not Found</h4>} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;

































































// // // // import React,{ useState } from 'react';
// // // // import { BrowserRouter,Routes,Route } from 'react-router-dom';
// // // // import Home from './Home';
// // // // import Login from './Login';
// // // // import Register from './Register';
// // // // import ProductDetails from './ProductDetails';
// // // // import Todo from './Todo';
// // // // import Cart from './Cart'
// // // // import Products from './Products'
// // // // import { Link } from "react-router-dom";
// // // // import { CartProvider } from './CartContext';
// // // // // import Navbar from './Navbar1'

// // // //  function App (){


// // // //   // const [show,setShow] = useState(true);
// // // //   // const [cart, setCart] = useState([]);

// // // //   // const handleClick = (item) => {
// // // //   //   let isPresent = false;
// // // //   //   cart.forEach((product) => {
// // // //   //     if(item.id === product.id)
// // // //   //       isPresent = true;
// // // //   //   })
// // // //   //   setCart([...cart,item]);
// // // //   // }
// // // //   // const handleChange = (item, d) => {
// // // //   //   let ind = -1;
// // // //   //   cart.forEach((tem,index) => {
// // // //   //     item.id(item.productid === item.id);
// // // //   //     ind = index;
// // // //   //   })

// // // //   //   const tempArr = cart;
// // // //   //   tempArr[ind] += d;
// // // //   //   if(tempArr[ind].amount === 0)
// // // //   //     tempArr[ind].amount = 1;
// // // //   //   setCart([...tempArr])
// // // //   // }

// // // //   // Function to handle adding items to the cart
// // // //   // const addToCart = (product) => {
// // // //   //   setCartItems([...cartItems, product]);
// // // //   // };
// // // //   const[cart,setCart] = useState([]);
// // // //   const addToCart = (product) => {
// // // //     setCart([...cart,product]);
// // // //   }

// // // //   const calculateTotal = () => {
// // // //     return cart.reduce((total,item) => total + item.price,0);
// // // //   }


// // // //   return(
// // // //     <>
// // // //     <BrowserRouter>



// // // //     <Routes>








// // // //       <Route path='/products' element={<Home/>}/>
// // // //       <Route path ='/' element={<Login/>}/>

// // // //       <Route path ='/register' element={<Register/>}/>

// // // //       <Route path ='/product-description/:productId' element={<ProductDetails/>}/>
// // // //       <Route path ='/todos' element={<Todo/>}/>
// // // //       {/* <Route path = '/cart' element={<Cart/>}/> */}


// // // //          {/* <Navbar size = {cart.length} 

// // // //          show : <Cart cart = {cart} setCart={setCart} /> 
// // // //          */}
// // // //       <Route
// // // //       path='/home'
// // // //       element = {
// // // //         <Home
// // // //         cart = {cart}
// // // //         setCart={setCart}
// // // //         addToCart={addToCart}
// // // //         calculateTotal={calculateTotal}
// // // //         />

// // // //       }
// // // //       />
// // // //       <Route
// // // //       path='/cart'
// // // //       element={<Cart cart={cart} calculateTotal={calculateTotal}/>}
// // // //       />


// // // //     </Routes>

// // // //     </BrowserRouter>



// // // //     </>


// // // //   )
// // // // }


// // // // export default App;











// // // // {/*import React from 'react';
// // // // import Home from './Home';



// // // //   function App() {
// // // //     return(
// // // //      <>

// // // //      <Home/>

// // // //      </>
// // // //     );
// // // // }
// // // // export default App;*/}



// // // // /*import { BrowserRouter,Routes,Route } from 'react-router-dom';
// // // // import Home from './Home';
// // // // import Login from './Login';
// // // // import Register from './Register';
// // // // import ProductDetails from './ProductDetails';


// // // //  function App() {
// // // //   return(
// // // //     <>
// // // //     <BrowserRouter>

// // // //     <Routes>

// // // //       <Route path ='/' element={<Home />}/>
// // // //       <Route path ='/Login' element={<Login />}/>
// // // //       <Route path ='/Register' element={<Register />}/>
// // // //       <Route path ='/product-description/:productId' element={<ProductDetails />}/>



// // // //     </Routes>

// // // //     </BrowserRouter>



// // // //     </>


// // // //   )
// // // //  }
// // // // export default App;*/
// // import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
// // import { initializeApp } from 'firebase/app';
// // import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
// // import { getFirestore } from 'firebase/firestore'; // Import getFirestore even if not directly used for news data

// // --- Bootstrap CSS CDN (Added for styling) ---
// // You would typically link this in your public/index.html, but for a self-contained immersive,
// // we'll assume it's available or would be linked externally.
// // For demonstration purposes, conceptually: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

// // --- Firebase Initialization (Mandatory for all React apps) ---
// // These global variables are provided by the Canvas environment.

// import React, { useContext, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import AllNews from './AllNews';
// import TopHeadlines from './TopHeadlines';
// import Country from './Country';

// import { ThemeProvider, ThemeContext } from './ThemeContext';
// import './App.css'; // optional for global styles

// function ThemedApp() {
//   const { darkMode } = useContext(ThemeContext);

//   useEffect(() => {
//     document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
//   }, [darkMode]);

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/all-news" />} />
//         <Route path="/all-news" element={<AllNews />} />
//         <Route path="/headlines/:category" element={<TopHeadlines />} />
//         <Route path="/country/:countryCode" element={<Country />} />
//         <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
//       </Routes>
//     </Router>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemedApp />
//     </ThemeProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllNews from './pages/AllNews';
//import CategoryNews from './pages/TopHeadlines';
import CountryNews from './pages/Country';
import { ThemeProvider } from './context/ThemeContext';
import CategoryNews from './pages/TopHeadlines';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<AllNews />} />
          <Route path="/all-news" element={<AllNews />} />

          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:code" element={<CountryNews />} /> */}

          <Route path="/all-news" element={<AllNews />} />
          {/* <Route path="/category/:category" element={<TopHeadlines />} /> */}
          <Route path="/top-headlines/:category" element={<CategoryNews />} />

          <Route path="/country/:code" element={<CountryNews />} />
          <Route path="/" element={<AllNews />} /> {/* Optional default */}
        </Routes>


      </Router>
    </ThemeProvider>
  );
}

export default App;









