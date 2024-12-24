import Room from "@/components/room"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>嗨，請進｜城</title>
        <meta
          property="og:image"
          content="https://castles-gift.vercel.app/image/snowman.png"
        />
      </Head>
      <Room />
    </>
  )
}
