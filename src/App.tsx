import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Search from './pages/Search/Search'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
