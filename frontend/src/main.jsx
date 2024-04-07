import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import App from './App.jsx';
import Contact from './pages/Contact.jsx';
import Reviews from './pages/Reviews.jsx';
import Videos from './pages/Videos.jsx';
import Products from './pages/Products.jsx';
import Blogs from './pages/Blogs.jsx';
import Login from './pages/Login.jsx';
// import Carts from './pages/Carts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/products',
    element: <Products></Products>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/reviews',
    element: <Reviews></Reviews>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/videos',
    element: <Videos></Videos>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/blogs',
    element: <Blogs></Blogs>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/contact',
    element: <Contact></Contact>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/login',
    element: <Login></Login>,
    errorElement: <ErrorPage></ErrorPage>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
