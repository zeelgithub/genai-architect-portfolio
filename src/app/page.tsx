import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import SectionHeading from "@/components/ui/SectionHeading"

// Reuse your existing route components (no new files)
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
            <Badge>Generative AI Engineer</Badge>
            <Badge>AI Architect</Badge>
            <Badge>LLMs • Agents • RAG • MLOps</Badge>
            <Badge>Azure • AWS</Badge>
          </div>

          <h1 className="text-4xl font-semibold leading-tight">
            I build production grade GenAI systems that are reliable, secure, and scalable.
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            From multi agent LLM workflows and enterprise RAG platforms to cloud native
            MLOps pipelines — I design systems that move from research to real world deployments.
          </p>

          {/* Change these to anchors so they scroll */}
          <div className="flex gap-3">
            <Button href="/#projects">View Projects</Button>
            <Button href="/#about" variant="secondary">
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
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Multi agent orchestration, tool use, structured outputs, and guardrails.
              </p>
            </Card>

            <Card title="Grounded GenAI">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                RAG pipelines, evidence grounding, evaluation, and hallucination mitigation.
              </p>
            </Card>

            <Card title="Cloud & MLOps">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Deployments on Azure/AWS with CI/CD, monitoring, and compliance first design.
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