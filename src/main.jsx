import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        // index: true,
        element: <Home></Home>
      }
      ,
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')

      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/* <App></App> */}
  </>
)
