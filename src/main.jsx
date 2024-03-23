// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider,} from 'react-router-dom'
import { router } from './routes/Routes'
// import Home from './pages/Home.jsx'
// import Blogs from './pages/Blogs.jsx'
// import Bookmarks from './pages/Bookmarks.jsx'
// import MainLayouts from './layouts/MainLayouts.jsx'
// import Blog from './pages/Blog.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/* <App></App> */}
  </>
)
