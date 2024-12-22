import { useState } from "react"
import Image from "next/image"

export default function Candy({ candy }) {
  const [position, setPosition] = useState({
    top: 200,
    left: candy.left,
    rotation: candy.rotation,
    imageSrc: candy.image,
  })

  // 動畫執行效果
  useState(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newTop = prev.top + 5 // 垂直下降
        const newLeft = prev.left + candy.endX / 100 // 水平位移 (拋物線效果)
        const newRotation = prev.rotation + 5 // 持續旋轉
        const newImageSrc = prev.imageSrc

        if (newTop > 500) {
          clearInterval(interval) // 到達底部後停止動畫
          return prev // 結束動畫時保持位置
        }
        return {
          top: newTop,
          left: newLeft,
          rotation: newRotation,
          imageSrc: newImageSrc,
        }
      })
    }, 50) // 每 50ms 更新位置

    return () => clearInterval(interval)
  }, [candy])

  return (
    <>
      <div
        key={candy.id}
        className="absolute w-8 h-16 z-10"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: `rotate(${position.rotation}deg)`,
        }}
      >
        <Image
          src={`/image/candy0${position.imageSrc}.png`}
          alt="candy"
          width={100}
          height={200}
          className="w-full h-full object-cover z-30"
        />
      </div>
    </>
  )
}
