import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Home from './components/home/Home'
import Blog from './components/blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename="/portfolio/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App