type TimelineItem = {
  title: string
  subtitle?: string
  period?: string
  description: string
  tags?: string[]
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative border-l pl-6 space-y-10">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-black" />

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              {item.period && (
                <span className="text-xs text-gray-500">
                  ({item.period})
                </span>
              )}
            </div>

            {item.subtitle && (
              <p className="text-xs text-gray-500">{item.subtitle}</p>
            )}

            <p className="text-sm text-gray-600 mt-2">
              {item.description}
            </p>

            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-xs text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}