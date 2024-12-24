import { useEffect, useRef, useState } from "react"

export default function ReverseClock() {
  const [initialTime, setInitialTime] = useState(null) // 儲存初始時間（秒數
  const [secondsElapsed, setSecondsElapsed] = useState(0) // 倒數用的經過秒數
  const intervalRef = useRef(null)

  useEffect(() => {
    // 取得當前時間，轉換為總秒數
    const now = new Date()

    const initialHours = now.getHours() % 12 // 取 12 小時制
    const initialMinutes = now.getMinutes()
    const initialSeconds = now.getSeconds()
    setInitialTime({
      hours: initialHours,
      minutes: initialMinutes,
      seconds: initialSeconds,
    })

    // 啟動每秒更新
    intervalRef.current = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  if (!initialTime) return null // 等待初始時間讀取完成

  // 計算初始角度
  const initialHourRotation = initialTime.hours * 30 + initialTime.minutes * 0.5 // 時針角度
  const initialMinuteRotation =
    initialTime.minutes * 6 + initialTime.seconds * 0.1 // 分針角度

  // 動態更新角度（逆時針旋轉）
  const hourRotation =
    (initialHourRotation - secondsElapsed * (3600 / 3600) + 360) % 360 // 時針每秒逆轉 30/3600°
  const minuteRotation =
    (initialMinuteRotation - secondsElapsed * 10 + 360) % 360 // 分針每秒逆轉 10°

  return (
    <div className="absolute top-10 right-8 w-20 h-20 bg-orange-50/80 rounded-full border-4 border-red-300 flex items-center justify-center">
      {/* 時針 */}
      <div
        className="absolute top-4 w-1 h-5 bg-red-300 origin-bottom"
        style={{
          transform: `rotate(${hourRotation}deg)`,
        }}
      ></div>

      {/* 分針 */}
      <div
        className="absolute top-2 w-1 h-7 bg-red-200 origin-bottom"
        style={{
          transform: `rotate(${minuteRotation}deg)`,
        }}
      >
        {/* Black Star */}
        <i className="absolute top-0 right-0 ri-star-fill text-sm text-slate-700"></i>
      </div>
    </div>
  )
}
