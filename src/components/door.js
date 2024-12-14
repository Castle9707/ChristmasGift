import { useState } from "react"

export default function Door() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={`relative flex items-center justify-center h-screen w-screen transition-colors duration-1000 
      ${isOpen ? "bg-white" : "bg-black"}`}
      >
        {/* 門的容器 */}
        <div
          className={`relative h-96 w-64 bg-gray-800 transition-transform duration-1000 transform-origin-left 
        ${isOpen ? "rotate-y-90" : "rotate-y-0"}`}
        >
          {/* 門把 */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-yellow-500 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
          ></div>
        </div>
      </div>
    </>
  )
}
