import React, { useState, useEffect } from "react"

export default function LetterAnimation({ letterMessage }) {
  const [displayedText, setDisplayedText] = useState("") // 當前顯示文字
  const [index, setIndex] = useState(0) // 當前字母索引
  const [isComplete, setIsComplete] = useState(false) // 判斷是否完成

  useEffect(() => {
    if (index < letterMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + letterMessage[index])
        setIndex((prev) => prev + 1) // 更新索引
      }, 200) // 每個字母間隔時間（單位：毫秒）
      return () => clearTimeout(timer) // 清理計時器
    } else {
      setIsComplete(true) // 動畫完成
    }
  }, [index, letterMessage])

  return (
    <>
      <p className="letterContent">
        {displayedText.split("").map((char, i) => (
          <span
            key={i}
            className="word"
            style={{
              borderRight:
                i === displayedText.length - 1 && !isComplete // 光標顯示在最後一個已顯示字母旁
                  ? "0.05em solid"
                  : "none", // 光標只顯示在當前字母旁
            }}
          >
            {char}
          </span>
        ))}
        {/* 當所有字母完成後，添加無限閃爍的光標 */}
        {isComplete && <span className="blinkingCursor">☃</span>}
      </p>
    </>
  )
}
