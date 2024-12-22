import Image from "next/image"

export default function FirePlace({
  afterDoorOpen,
  onFire,
  isLightOn,
  handleSnow,
  dropCandy,
}) {
  return (
    <>
      <div
        className={`absolute -left-1 -top-28 ${afterDoorOpen ? "z-10" : "z-0"}`}
      >
        <Image
          src="/image/fireplace.png"
          alt="fireplace"
          width={320}
          height={577}
          priority
          className="fireplace"
        />
        {/* 聖誕襪 */}
        <Image
          src="/image/socks.png"
          alt="socks"
          width={56}
          height={56}
          priority
          onClick={() => dropCandy(50)}
          className="socks-01 absolute origin-top-right -rotate-30 cursor-pointer hover:animate-wiggle-03 active:animate-wiggle-03"
        />
        <Image
          src="/image/socks.png"
          alt="socks"
          width={56}
          height={56}
          priority
          onClick={() => dropCandy(120)}
          className="socks-02 absolute origin-top-right -rotate-30 cursor-pointer hover:animate-wiggle-03 active:animate-wiggle-03"
        />
        <Image
          src="/image/socks.png"
          alt="socks"
          width={56}
          height={56}
          priority
          onClick={() => dropCandy(190)}
          className="socks-03 absolute origin-top-right -rotate-30 cursor-pointer hover:animate-wiggle-03 active:animate-wiggle-03"
        />
        {/* 火 點擊後出現 */}
        <button className="fireBtn mx-5 z-20" onClick={onFire}></button>
        {isLightOn && (
          <>
            <div className="flame-wrapper">
              <div className="flame fire"></div>
            </div>
            <div className="light01 bg-amber-600/40"></div>
            <div className="light02 bg-amber-600/30"></div>
          </>
        )}
        {/* 水晶球，點擊下雪 */}
        <button className="crystalball absolute" onClick={handleSnow}>
          <Image
            src="/image/crystalball.png"
            alt="crystalball"
            width={50}
            height={56}
            priority
            className="absolute top-0 left-0"
          />
        </button>
      </div>

      {/* 地板色塊 */}
      <div className="floor absolute bg-orange-950 w-full h-full z-0"></div>
    </>
  )
}
