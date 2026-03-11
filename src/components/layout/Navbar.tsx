import Link from "next/link"
import ThemeToggle from "@/components/ui/ThemeToggle"

export default function Navbar() {
  return (
    <header className="border-b bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium">
        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/education">Education</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </nav>
    </header>
  )
}
