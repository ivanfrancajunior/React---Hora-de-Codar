import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterProvider } from './context/CounterContext.jsx';
import { TitleColorProvider } from './context/TitleColorContex.jsx';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Reducer from './pages/Reducer.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>😩 Oops...</h1>,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/reducer',
        element: <Reducer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <TitleColorProvider>
        <RouterProvider router={route} />
      </TitleColorProvider>
    </CounterProvider>
  </React.StrictMode>,
);
