import { useEffect, useRef, useState } from "react"

export default function ReverseClock() {
  const [secondsElapsed, setSecondsElapsed] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  const reverseSeconds = 3600 - secondsElapsed // 假設倒轉從 1 小時開始
  const hours = Math.floor(reverseSeconds / 3600) % 12
  const minutes = Math.floor((reverseSeconds % 3600) / 60)
  const seconds = reverseSeconds % 60

  const hourRotation = hours * 30 + minutes / 0.5 // 每小時30度，每分鐘增加2度
  const minuteRotation = minutes * 6 + seconds / 0.1 // 每分鐘6度，每秒增加10度

  return (
    <div className="absolute top-10 right-8 w-20 h-20 bg-orange-50/80 rounded-full border-4 border-slate-500 flex items-center justify-center">
      {/* 時針 */}
      <div
        className="absolute top-9 w-1 h-5 bg-slate-500 origin-top"
        style={{ transform: `rotate(${hourRotation}deg)` }}
      ></div>

      {/* 分針 */}
      <div
        className="absolute top-9 w-1 h-7 bg-slate-300 origin-top"
        style={{ transform: `rotate(${minuteRotation}deg)` }}
      >
        {/* Black Star */}
        <i className="absolute top-2 right-0 ri-star-fill text-sm text-slate-700"></i>
      </div>
    </div>
  )
}
