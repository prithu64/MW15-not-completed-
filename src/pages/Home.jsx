import CarLable from "../components/CarLable"
import Footer from "../components/Footer"
import { Blacklist } from "../data/Blacklist"

function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
        
        <video src="/nfsbg.mp4" className="absolute w-full h-full object-cover object-center z-10"
        autoPlay
        loop
        playsInline
        muted/>
        
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"/>

        <div className="absolute flex flex-col z-20 p-3 mx-auto mt-10">

            <div className="flex flex-col md:flex-row max-w-7xl justify-between space-y-5 space-x-4 items-center">

                <div className="text-white ">
                  <h1 className="font-bold  text-3xl lg:text-8xl md:text-5xl mb-3">Relive the legends,explore in full 3D</h1>
                  <p className="text-sm md:text-xl italic"><span className="text-2xl md:text-3xl  font-bold text-amber-500">NFS Most Wanted</span> was a big part of my childhood,the races, the cars, the thrill. This is my small tribute to those memories and for everyone who’s ever chased the Blacklist.</p>
                </div>
                
                <div className="md:w-[60%] mt-6 text-white overflow-hidden mask-fade">
                   <div className="md:h-80 h-40 px-5  marquee-vertical  scrollbar-hide  ">
                      {
                        Blacklist.map((cars)=>{
                          return(
                            <CarLable key={cars.id} name={cars.name} id={cars.id}/>
                          )  
                        })
                      }
                          {
                        Blacklist.map((cars)=>{
                          return(
                            <CarLable key={cars.id} name={cars.name} id={cars.id}/>
                          )  
                        })
                        }
                       
                      
                   </div>
                </div>

               
            </div>
            <Footer/>
        </div>

    </div>
  )
}

export default Home