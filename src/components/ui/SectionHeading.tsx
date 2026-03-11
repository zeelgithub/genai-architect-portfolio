export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  )
}
