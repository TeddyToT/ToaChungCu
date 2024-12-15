import React from 'react';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
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
import Introduction from './pages/Introduction/Introduction'
import RoomModel from './pages/RoomModel/RoomModel'
import Search from './pages/Search/Search';
import Details from './pages/Home/Details';
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
              <Route path="/gioi-thieu" element={<Introduction />} />
              <Route path="/chi-tiet-phong" element={<RoomModel />} />
              <Route path="/dang-nhap" element={<Login />} />
              <Route path="/dang-ky" element={<SignUp />} />
              <Route path="/tim-kiem" element={<Search />} />
              <Route path="/tim-kiem/:id" element={<Details />} />
              

            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}

export default App