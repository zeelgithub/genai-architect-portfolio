import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import SectionHeading from "@/components/ui/SectionHeading"

import AboutPage from "./about/page"
import ExperiencePage from "./experience/page"
import EducationPage from "./education/page"
import ProjectsPage from "./projects/page"
import PublicationsPage from "./publications/page"
import ContactPage from "./contact/page"

export default function HomePage() {
  return (
    <>
      {/* HOME */}
      <section id="home" className="space-y-12">

        {/* HERO */}
        <div className="max-w-4xl space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge>AI Consultant Engineer · Deloitte</Badge>
            <Badge>LLMs · Agents · RAG · LLMOps</Badge>
          </div>

          <h1 className="text-4xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
            Distributed agent systems, enterprise RAG, and cloud-native LLMOps, shipped across NIH, CDC, and VBA.
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Full-stack AI engineering ownership: multi-agent orchestration, REST API design, AWS infrastructure, and observability, built for compliance-regulated, high-availability federal environments.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            <span>$800K in new federal revenue</span>
            <span>·</span>
            <span>76% LLM latency reduction</span>
            <span>·</span>
            <span>2nd place · NAWCTSD AI Challenge</span>
          </div>

          <div className="flex gap-3">
            <Button href="/#projects">View Projects</Button>
            <Button href="/#about" variant="secondary">About</Button>
          </div>
        </div>

        {/* CORE COMPETENCIES */}
        <div className="space-y-4">
          <SectionHeading
            title="Core Competencies"
            subtitle="Engineering disciplines applied across every system shipped."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Card title="Agentic Systems">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Production multi-agent architectures: supervisor and hierarchical patterns, deterministic state machines, schema-validated tool execution, bounded retry loops, and architectural safety guardrails.
              </p>
            </Card>

            <Card title="Grounded GenAI">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Enterprise RAG pipelines with retrieval evaluation, passage-level evidence grounding, hallucination control, and structured output enforcement across regulated production environments.
              </p>
            </Card>

            <Card title="Cloud & LLMOps">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                AWS and Azure production deployments with FISMA-compliant CI/CD gates, model drift detection, inference latency monitoring, and full observability instrumentation via LangFuse and MLflow.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <AboutPage />
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <ExperiencePage />
      </section>

      {/* EDUCATION */}
      <section id="education">
        <EducationPage />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <ProjectsPage />
      </section>

      {/* PUBLICATIONS */}
      <section id="publications">
        <PublicationsPage />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactPage />
      </section>
    </>
  )
}
