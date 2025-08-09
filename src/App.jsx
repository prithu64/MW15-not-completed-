import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
     <div className='min-h-screen'>
       <BrowserRouter>
         <div className="top-0 left-0 w-full flex justify-between items-center p-4 z-[30] ">
           <h1 className="skew-x-[-12deg] font-bold italic text-sm md:text-2xl border p-2 text-white border-white/60">
              MW15
           </h1>
          <img  
           src='/nfsicon_white.png'  
           className='w-35 md:w-80 h-auto'  
          />
        </div>
        <Routes>
          <Route path ='/' element ={<Home/>} />
        </Routes>
       </BrowserRouter>
     </div>
    </>
  )
}

export default App
