import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppProvider } from './context/Contexts'
import RollToTopButton from './components/ScrollToTop/ScrollToTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Nice from './pages/Home/testhome'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative">
      <AppProvider>
        <RollToTopButton />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route>

              <Route path="/" element={<Home />} />
              <Route path="/trang-chu" element={<Home />} />
              <Route path="/nice" element={<Nice />} />

              

            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}

export default App
