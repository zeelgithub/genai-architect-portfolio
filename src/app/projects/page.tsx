import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import Badge from "@/components/ui/Badge"
import SectionHeading from "@/components/ui/SectionHeading"
import FadeIn from "@/components/ui/FadeIn"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Curated case studies focused on system design, evaluation, trade-offs, and
          production readiness.
        </p>
      </div>

      <SectionHeading
        title="Featured Case Studies"
        subtitle="Open a project to see architecture, decisions, outcomes, and implementation details."
      />

      {/* Project cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, index) => (
          <FadeIn key={p.slug} delay={index * 0.08}>
            <Card title={p.title}>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {p.summary}
              </p>

              {/* Short highlights (optional) */}
              {p.highlights && p.highlights.length > 0 && (
                <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              {/* Project-specific tags (optional) */}
              {p.tags && p.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              )}

              <div className="mt-5">
                <Button href={`/projects/${p.slug}`} variant="secondary">
                  View Case Study →
                </Button>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
