import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import SectionHeading from "@/components/ui/SectionHeading"

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* HERO */}
      <div className="max-w-4xl space-y-5">
        <div className="flex flex-wrap gap-2">
          <Badge>Generative AI Engineer</Badge>
          <Badge>AI Architect</Badge>
          <Badge>LLMs • Agents • RAG • MLOps</Badge>
          <Badge>Azure • AWS</Badge>
        </div>

        <h1 className="text-4xl font-semibold leading-tight">
          I build production grade GenAI systems that are reliable, secure, and scalable.
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl">
          From multi agent LLM workflows and enterprise RAG platforms to cloud native
          MLOps pipelines — I design systems that move from research to real world deployments.
        </p>

        <div className="flex gap-3">
          <Button href="/projects">View Projects</Button>
          <Button href="/about" variant="secondary">
            About Me
          </Button>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="space-y-4">
        <SectionHeading
          title="Highlights"
          subtitle="What you can expect from my work and how I think as an AI architect."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Agentic Systems">
            <p className="text-sm text-gray-600">
              Multi agent orchestration, tool use, structured outputs, and guardrails.
            </p>
          </Card>

          <Card title="Grounded GenAI">
            <p className="text-sm text-gray-600">
              RAG pipelines, evidence grounding, evaluation, and hallucination mitigation.
            </p>
          </Card>

          <Card title="Cloud & MLOps">
            <p className="text-sm text-gray-600">
              Deployments on Azure/AWS with CI/CD, monitoring, and compliance first design.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
