import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Home from './components/home/Home'
import Blog from './components/blog/Blog'
import BlogPost from './components/blog/BlogPost'

function App() {
  return (
    <Router basename="/portfolio/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App