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
          width={320}
          height={439}
          priority
          className="tree"
        />
        <Image
          src="/image/ball1.png"
          alt="ball1"
          width={40}
          height={66}
          className="absolute dec-ball1 origin-top hover:animate-wiggle-02 active:animate-wiggle-02"
        />
        <Image
          src="/image/ball2.png"
          alt="ball2"
          width={40}
          height={66}
          className="absolute dec-ball2 origin-top hover:animate-wiggle-02 active:animate-wiggle-02"
        />
        <Image
          src="/image/starsmile.png"
          alt="starsmile"
          width={45}
          height={80}
          className="absolute dec-starsmile origin-top  hover:animate-wiggle-02 active:animate-wiggle-02"
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
            className="absolute rotate-12 dec-gift hover:animate-wiggle-01 active:animate-wiggle-01"
          />
        </div>
      </div>
      {/* 聖誕樹 end */}
    </>
  )
}
