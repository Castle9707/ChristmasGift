import { useState } from "react"

export default function Door({ isDoorOpen, handleOpenDoor }) {
  const [isClickGreen, setClickGreen] = useState(false)
  const [isClickPink, setClickPink] = useState(false)
  const [isClickBlue, setClickBlue] = useState(false)

  const handleSizeGreen = () => {
    setClickGreen(!isClickGreen)
    setClickPink(false)
    setClickBlue(false)
  }
  const handleSizePink = () => {
    setClickPink(!isClickPink)
    setClickBlue(false)
    setClickGreen(false)
  }
  const handleSizeBlue = () => {
    setClickBlue(!isClickBlue)
    setClickPink(false)
    setClickGreen(false)
  }

  return (
    <>
      {/* 開門時陰影 */}
      <div
        className={`absolute z-10 inset-0 transition-colors duration-5000 ${
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
          className="absolute right-8 top-1/2 -translate-y-1/2 h-8 w-8 bg-yellow-500 rounded-full drop-shadow-lg cursor-pointer hover:scale-110 active:scale-110 transition-transform"
        ></div>
        {/* 綠色便利貼 > 點擊後放大 */}
        <div
          onClick={handleSizeGreen}
          className={`absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 origin-center drop-shadow-2xl cursor-pointer transition-all duration-1000 overflow-hidden ${
            isClickGreen
              ? "h-32 w-32 p-4 z-10 bg-lime-200"
              : "h-16 w-16 p-2 bg-gradient-to-br from-lime-200 to-lime-200/60"
          }`}
        >
          <p
            className={`text-slate-700 text-xs transition-all delay-500 duration-1000 ${
              isClickGreen ? "opacity-100" : "opacity-0"
            }`}
          >
            {isClickGreen ? "音樂忘了關。。。" : ""}
          </p>
        </div>
        {/* 粉色便利貼 > 點擊後放大 */}
        <div
          onClick={handleSizePink}
          className={`absolute top-1/4 left-1/2 translate-x-1/3 -translate-y-1/2 origin-center drop-shadow-2xl cursor-pointer transition-all duration-1000 overflow-hidden ${
            isClickPink
              ? "h-32 w-32 p-4 z-10 bg-red-300"
              : "h-16 w-16 p-2 bg-gradient-to-br from-red-300 to-red-300/60"
          }`}
        >
          <p
            className={`text-slate-700 text-xs transition-all delay-500 duration-1000 ${
              isClickPink ? "opacity-100" : "opacity-0"
            }`}
          >
            {isClickPink ? "要敲門吧？" : ""}
          </p>
        </div>
        {/* 藍色便利貼 > 點擊後放大 */}
        <div
          onClick={handleSizeBlue}
          className={`absolute top-1/4 left-1/2 translate-y-32 origin-center drop-shadow-2xl cursor-pointer transition-all duration-1000 overflow-hidden ${
            isClickBlue
              ? "h-32 w-32 p-4 z-10 bg-blue-300"
              : "h-16 w-16 p-2 bg-gradient-to-br from-blue-300 to-blue-300/60"
          }`}
        >
          <p
            className={`text-slate-700 text-xs transition-all delay-500 duration-1000 ${
              isClickBlue ? "opacity-100" : "opacity-0"
            }`}
          >
            {isClickBlue ? "帶鑰匙了嗎？" : ""}
          </p>
        </div>
      </div>
    </>
  )
}
