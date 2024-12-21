import Image from "next/image"

export default function FirePlace({
  afterDoorOpen,
  onFire,
  isLightOn,
  handleSnow,
}) {
  return (
    <>
      <div
        className={`absolute -left-1 -top-9 ${afterDoorOpen ? "z-10" : "z-0"}`}
      >
        <Image
          src="/image/fireplace.png"
          alt="fireplace"
          width={320}
          height={577}
          priority
          className="fireplace"
        />
        <button className="fireBtn mx-5 z-20" onClick={onFire}></button>
        {/* 火 點擊後出現 */}
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
