import { useRef, useState } from "react"
import Image from "next/image"
import LetterAnimation from "./letterAnimation"

export default function Room() {
  const [isDoorOpen, setDoorOpen] = useState(false) // 門是否被打開
  const [isPlaying, setIsPlaying] = useState(false) // 音樂播放狀態
  const [isMuted, setIsMuted] = useState(false) // 靜音狀態
  const [isGiftOpen, setGiftOpen] = useState(false) // 信件是否被打開
  const [password, setPassword] = useState("") // 通關密語
  const [message, setMessage] = useState("") // 我給的愛
  const [isSubmitted, setIsSubmitted] = useState(false) // 表單顯示

  const audioRef = useRef(null) // 參考 audio 元素

  // 開門
  const handleOpenDoor = () => {
    setDoorOpen(true)
    playMusic()
  }
  // 播放音樂
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
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

  // 關閉禮物時
  const handleClose = () => {
    setGiftOpen(false)
    setPassword("")
    setMessage("")
    setIsSubmitted(false)
  }

  return (
    <>
      <div className="room relative w-screen max-w-md h-screen mx-auto overflow-hidden bg-orange-200 perspective-container">
        {/* 門的容器 */}
        <div
          className={`absolute h-full w-full bg-gray-800 transition-transform duration-[2000ms] origin-left z-10 
        ${isDoorOpen ? "door-open" : "rotate-y-0"}`}
        >
          {/* 門把 */}
          <div
            onClick={handleOpenDoor}
            className="absolute right-8 top-1/2 -translate-y-1/2 h-8 w-8 bg-yellow-500 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
          ></div>
        </div>
        {/* 背景音樂切換按鈕 */}
        <button
          // onClick={!isPlaying ? playMusic : toggleMute}
          onClick={toggleMute}
          className="sound absolute left-4 bottom-4 text-2xl text-orange-400/60  hover:text-orange-400 border border-2 border-orange-400/60  hover:border-orange-400 rounded-full"
        >
          {/* 隨播放狀態切換 icon */}
          {isMuted ? (
            <i className="ri-volume-mute-fill mx-1 my-4"></i>
          ) : (
            <i className="ri-volume-up-fill mx-1 my-4"></i>
          )}
          {/* {!isPlaying ? (
            <i className="ri-play-mini-fill mx-1 my-4"></i>
          ) : isMuted ? (
            <i className="ri-volume-mute-fill mx-1 my-4"></i>
          ) : (
            <i className="ri-volume-up-fill mx-1 my-4"></i>
          )} */}
        </button>
        {/* 音樂播放 */}
        <audio ref={audioRef} src="/audio/bathroom-chill-14977.mp3" loop />
        {/* 聖誕樹 start */}
        <div className="tree-container absolute right-0 bottom-0 translate-x-28 translate-y-6">
          <Image
            src="/image/tree.png"
            alt="tree"
            width={400}
            height={549}
            priority
            className="tree"
          />
          <Image
            src="/image/ball1.png"
            alt="ball1"
            width={40}
            height={66}
            className="absolute h-auto hover:rotate-3 dec-ball1"
          />
          <Image
            src="/image/ball2.png"
            alt="ball2"
            width={40}
            height={66}
            className="absolute dec-ball2"
          />
          <Image
            src="/image/starsmile.png"
            alt="starsmile"
            width={50}
            height={89}
            className="absolute dec-starsmile"
          />
          <Image
            src="/image/topstar.png"
            alt="topstar"
            width={80}
            height={51}
            className="absolute dec-topstar"
          />
          <Image
            src="/image/shining.png"
            alt="shining"
            width={80}
            height={51}
            className="absolute dec-shining"
          />
          {/* 可以點擊的那個禮物 */}
          <div className="cursor-pointer" onClick={() => setGiftOpen(true)}>
            <Image
              src="/image/gift.png"
              alt="gift"
              width={60}
              height={56}
              className="absolute rotate-12 dec-gift"
            />
          </div>
        </div>
        {/* 聖誕樹 end */}
        {isGiftOpen && (
          <div className="letterModal flex flex-col items-center bg-black/20 m-10 p-8 relative">
            {/* 表單部分 */}
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <input
                  type="password"
                  placeholder="✧･ﾟ*你的通關密語*･ﾟ✧"
                  value={password}
                  className="px-4 py-2 mb-8 rounded-full outline-orange-300"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="px-6 py-1.5 w-fit rounded-full bg-orange-600">
                  送出
                </button>

                {/* 關閉按鈕 */}
                <button
                  className="closeBtn absolute hover:rotate-90 transition-transform"
                  onClick={handleClose}
                >
                  <i className="ri-close-large-line p-2 rounded-full bg-orange-100 text-orange-800 font-bold"></i>
                </button>
              </form>
            ) : (
              // 信件內容
              <div className="text-center">
                {/* 關閉按鈕 */}
                <button
                  className="closeBtn absolute hover:rotate-90 transition-transform"
                  onClick={handleClose}
                >
                  <i className="ri-close-large-line p-2 rounded-full bg-orange-100 text-orange-800 font-bold"></i>
                </button>

                {/* 信件動畫：逐字打出來的特效 */}
                {message && <LetterAnimation letterMessage={message} />}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
