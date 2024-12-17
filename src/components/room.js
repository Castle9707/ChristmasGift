import { useEffect, useRef, useState } from "react"
import LetterAnimation from "./letterAnimation"
import Door from "./door"
import Tree from "./tree"
import FirePlace from "./firePlace"

export default function Room() {
  const [isDoorOpen, setDoorOpen] = useState(false) // 門是否被打開
  const [isLightOn, setLightOn] = useState(false) // 爐火是否被點亮
  const [afterDoorOpen, setAfterDoorOpen] = useState(false) // 樹上的東西可以按
  const [isMuted, setIsMuted] = useState(false) // 靜音狀態
  const [isGiftOpen, setGiftOpen] = useState(false) // 信件是否被打開
  const [password, setPassword] = useState("") // 通關密語
  const [message, setMessage] = useState("") // 我給的愛
  const [isSubmitted, setIsSubmitted] = useState(false) // 表單顯示
  const [inputType, setInputType] = useState("password") // 表單輸入框型態

  const audioRef = useRef(null) // 參考 audio 元素

  // 開門
  const handleOpenDoor = () => {
    setDoorOpen(true)
    playMusic()
  }

  // 點亮爐火
  const handleLightOn = () => {
    setLightOn(!isLightOn)
  }

  // 播放音樂
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  // 切換靜音狀態
  const toggleMute = () => {
    setIsMuted((prev) => !prev)
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
  }

  // 表單提交
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/getMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    const data = await res.json()
    setMessage(data.message)
    setIsSubmitted(true)
  }

  // 打開禮物時
  const handleClick = () => {
    setGiftOpen(true)
  }
  // 關閉禮物時
  const handleClose = () => {
    setGiftOpen(false)
    setPassword("")
    setMessage("")
    setIsSubmitted(false)
  }

  // 切換表單輸入框型態
  const handleTypeChange = () => {
    if (inputType === "password") {
      setInputType("text")
    } else {
      setInputType("password")
    }
  }

  // 判斷門開之後漸亮動畫
  useEffect(() => {
    if (isDoorOpen) {
      const timer = setTimeout(() => {
        setAfterDoorOpen(true)
      }, 4000)
      return () => clearTimeout(timer) // 清理計時器
    }
  }, [isDoorOpen])

  return (
    <>
      <div className="room relative w-screen max-w-md h-screen max-h-[100dvh] mx-auto overflow-hidden bg-orange-200 perspective-container">
        {/* 門 */}
        <Door isDoorOpen={isDoorOpen} handleOpenDoor={handleOpenDoor} />

        {/* 壁爐 */}
        <FirePlace
          afterDoorOpen={afterDoorOpen}
          onFire={handleLightOn}
          isLightOn={isLightOn}
        />

        {/* 音樂播放 */}
        <audio ref={audioRef} src="/audio/bathroom-chill-14977.mp3" loop />
        {/* 背景音樂切換按鈕 */}
        <button
          onClick={toggleMute}
          className="sound absolute left-4 bottom-4 text-2xl text-orange-400/60  hover:text-orange-400 border border-2 border-orange-400/60  hover:border-orange-400 rounded-full z-10"
        >
          {/* 隨播放狀態切換 icon */}
          {isMuted ? (
            <i className="ri-volume-mute-fill mx-1 my-4"></i>
          ) : (
            <i className="ri-volume-up-fill mx-1 my-4"></i>
          )}
        </button>

        {/* 聖誕樹 */}
        <Tree afterDoorOpen={afterDoorOpen} handleClick={handleClick} />

        {/* 彈出視窗 */}
        {isGiftOpen && (
          <div className="letterModal flex flex-col items-center bg-slate-100/30 m-10 p-8 relative backdrop-blur z-10">
            {/* 表單部分 */}
            {!isSubmitted ? (
              <form
                id="letter"
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="mb-8">
                  <input
                    id="passField"
                    type={inputType}
                    placeholder="✧･ﾟ*你的通關密語*･ﾟ✧"
                    value={password}
                    className="px-4 py-2 me-2 text-orange-300 rounded-full outline-orange-300"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="px-3 py-2.5 rounded-full border border-white text-white cursor-pointer"
                    onClick={handleTypeChange}
                  >
                    {inputType === "password" ? (
                      <i className="ri-eye-fill"></i>
                    ) : (
                      <i className="ri-eye-off-fill"></i>
                    )}
                  </span>
                </div>
                <button className="px-6 py-1.5 w-fit rounded-full bg-orange-600 text-white">
                  送出
                </button>
              </form>
            ) : (
              // 信件內容
              <div className="text-center">
                {/* 信件動畫：逐字打出來的特效 */}
                {message && <LetterAnimation letterMessage={message} />}
              </div>
            )}
            {/* 關閉按鈕 */}
            <button
              className="closeBtn absolute hover:rotate-90  active:rotate-90 transition-transform"
              onClick={handleClose}
            >
              <i className="ri-close-large-line p-2 rounded-full bg-orange-50 text-orange-400 font-bold"></i>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
