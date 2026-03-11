"use client"

import { useEffect, useState } from "react"

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        rounded-full
        bg-black text-white
        w-11 h-11
        flex items-center justify-center
        shadow-lg
        hover:bg-black/90
        transition-all
      "
    >
      ↑
    </button>
  )
}