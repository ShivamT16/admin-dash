import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Products } from './pages/Products';
import { Customers } from './pages/Customers';
import { Error } from './pages/Error';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    { path: "/", element: <Products /> },
    { path: "/customers", element: <Customers /> },
    { path: "/error", element: <Error /> },
    { path: "/errora", element: <Error /> },
    { path: "/errorb", element: <Error /> }
    ],  
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);