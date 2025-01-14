export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "方法錯了唷。。。" })
  }

  const { password } = req.body

  const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress

  console.log(`Password attempt from IP: ${userIP}, Password: ${password}`)

  if (!password || typeof password !== "string") {
    return res.status(400).json({ message: "你要輸入啊。。。" })
  }

  const content =
    process.env[`SECRET_${password.toUpperCase()}`] ||
    process.env.DEFAULT_MESSAGE

  res.status(200).json({ message: content })
}
