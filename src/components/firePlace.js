import Image from "next/image"

export default function FirePlace({ afterDoorOpen, onFire, isLightOn }) {
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
        {/* 火 點擊後出現 */}
        <button className="fireBtn z-10" onClick={onFire}></button>
        {isLightOn && (
          <>
            <div className="flame-wrapper">
              <div className="flame fire"></div>
            </div>
            <div className="light01 bg-amber-600/40"></div>
            <div className="light02 bg-amber-600/30"></div>
          </>
        )}
      </div>

      {/* 地板色塊 */}
      <div className="floor absolute bg-orange-900 w-full h-full z-0"></div>
    </>
  )
}
