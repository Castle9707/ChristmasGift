import "@/styles/globals.css";
import "@/styles/globals.css"; // 如果有 Tailwind CSS 或其他全局樣式
import "remixicon/fonts/remixicon.css"; // 引入 Remix Icon 的樣式

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
