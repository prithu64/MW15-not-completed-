import CarLable from "../components/CarLable"
import Footer from "../components/Footer"
import { Blacklist } from "../data/Blacklist"

function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      {/* Video Background */}
      <video
        src="/nfsbg.mp4"
        className="absolute w-full h-full object-cover z-10"
        autoPlay
        loop
        playsInline
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Content */}
      <div className="absolute flex flex-col z-20 p-4 sm:p-6 w-full">
        <div className="flex flex-col md:flex-row max-w-7xl justify-between   items-center md:space-x-6 space-y-6 md:space-y-0">
          
          {/* Left - Text */}
          <div className="text-white text-center md:text-left max-w-lg">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 leading-tight">
              Relive the legends, explore in full 3D
            </h1>
            <p className="text-sm sm:text-base md:text-lg italic">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-500">
                NFS Most Wanted
              </span>{" "}
              was a big part of my childhood ,the races, the cars, the thrill.
              This is my small tribute to those memories and for everyone who’s ever
              chased the Blacklist.
            </p>
          </div>

          {/* Right - Car List */}
          <div className="w-full md:w-[55%] mt-4 text-white overflow-hidden mask-fade">
            <div className="h-60 sm:h-72 md:h-80 px-3 sm:px-5 marquee-vertical scrollbar-hide space-y-3">
              {[...Blacklist, ...Blacklist].map((cars) => (
                <CarLable key={cars.id} name={cars.name} id={cars.id} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
