import Image from "next/image"

export default function Tree({ afterDoorOpen, handleClick }) {
  return (
    <>
      <div
        className={`tree-container absolute right-0 bottom-0 translate-x-28 translate-y-6 ${
          afterDoorOpen ? "z-10" : "z-0"
        }`}
      >
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
          className="absolute dec-ball1 hover:rotate-6 active:rotate-6 origin-top"
        />
        <Image
          src="/image/ball2.png"
          alt="ball2"
          width={40}
          height={66}
          className="absolute dec-ball2 hover:rotate-6 active:rotate-6 origin-top"
        />
        <Image
          src="/image/starsmile.png"
          alt="starsmile"
          width={50}
          height={89}
          className="absolute dec-starsmile hover:rotate-6  active:rotate-6 origin-top"
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
        <div className="cursor-pointer" onClick={handleClick}>
          <Image
            src="/image/gift.png"
            alt="gift"
            width={60}
            height={56}
            className="absolute rotate-12 dec-gift hover:rotate-6 active:rotate-6"
          />
        </div>
      </div>
      {/* 聖誕樹 end */}
    </>
  )
}
