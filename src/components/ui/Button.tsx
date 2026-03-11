import Link from "next/link"
import React from "react"

type ButtonProps =
  | ({
      href: string
      children: React.ReactNode
      variant?: "primary" | "secondary"
      className?: string
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      onClick: () => void
      children: React.ReactNode
      variant?: "primary" | "secondary"
      className?: string
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)

const base =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition " +
  "focus:outline-none focus:ring-2 focus:ring-black/20"

const variants = {
  primary: "bg-black text-white hover:bg-black/90",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
}

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary"
  const cls = `${base} ${variants[variant]} ${props.className ?? ""}`

  if ("href" in props) {
    const { href, children, className, variant, ...rest } = props
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  const { onClick, children, className, variant: v, ...rest } = props
  return (
    <button onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  )
}
