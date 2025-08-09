function CarLable({key, name, id }) {
  return (
    <div key={key} className="w-full max-w-xs sm:max-w-sm md:max-w-xl mb-3 sm:mb-4 flex justify-between items-center px-3 sm:px-4 py-2 shadow-lg border skew-x-[-12deg] text-white cursor-pointer bg-gray-500 hover:scale-105 transition duration-300 ease-in-out">
      <span className="text-yellow-400 font-bold skew-x-[12deg] text-sm sm:text-base md:text-lg">
        Blacklist {id}
      </span>
      <span className="font-semibold skew-x-[12deg] text-sm sm:text-base md:text-lg">
        {name}
      </span>
    </div>
  )
}

export default CarLable
