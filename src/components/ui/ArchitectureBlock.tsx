type ArchitectureBlockProps = {
  title?: string
  steps: string[]
}

export default function ArchitectureBlock({
  title = "High Level Architecture",
  steps,
}: ArchitectureBlockProps) {
  return (
    <div className="rounded-xl border bg-gray-50 p-5 space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
        {title}
      </h3>

      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  )
}
