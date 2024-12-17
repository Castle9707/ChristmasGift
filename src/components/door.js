export default function Door({ isDoorOpen, handleOpenDoor }) {
  return (
    <>
      {/* 開門時陰影 */}
      <div
        className={`absolute z-10 inset-0 transition-colors duration-[5000ms] ${
          isDoorOpen ? "bg-transparent" : "bg-black"
        }`}
      ></div>
      {/* 門的容器 */}
      <div
        className={`absolute h-full w-full bg-gray-800 transition-transform duration-[3000ms] origin-left z-30 
        ${isDoorOpen ? "door-open" : "rotate-y-0"}`}
      >
        {/* 門把 */}
        <div
          onClick={handleOpenDoor}
          className="absolute right-8 top-1/2 -translate-y-1/2 h-8 w-8 bg-yellow-500 rounded-full shadow-lg cursor-pointer hover:scale-110 active:scale-110 transition-transform"
        ></div>
      </div>
    </>
  )
}
