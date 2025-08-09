import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <div className='relative min-h-screen'>
      <BrowserRouter>
        {/* Header */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-3 md:p-4 z-[30]">
          <h1 className="skew-x-[-12deg] font-bold italic text-xs sm:text-sm md:text-xl lg:text-2xl border px-2 py-1 md:px-4 md:py-2 text-white border-white/60">
            MW15
          </h1>
          <img  
            src='/nfsicon_white.png'  
            className='w-20 sm:w-28 md:w-48 lg:w-64 h-auto object-contain'  
            alt='NFS Most Wanted Logo'
          />
        </div>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

