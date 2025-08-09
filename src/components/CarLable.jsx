function CarLable({key,name,id}) {
  return (
    <div key={key} className="max-w-xs md:max-w-xl mb-4 flex hover:scale-105 trasition duration-300 ease-in-out justify-between items-center px-4 py-2 shadow-lg border skew-x-[-12deg] text-white cursor-pointer bg-gray-500">
        <span className="text-yellow-400 font-bold skew-x-[12deg]">
            Blacklist {id}
        </span>
        <span className="font-semibold skew-x-[12deg]">{name}</span>
    </div>
  )
}

export default CarLable