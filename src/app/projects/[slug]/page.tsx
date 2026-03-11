"use client"

import * as React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import ArchitectureBlock from "@/components/ui/ArchitectureBlock"
import GroundedResearchAssistantDiagram from "@/components/diagrams/GroundedResearchAssistantDiagram"
import BoneXArchitectureDiagram from "@/components/diagrams/BoneXArchitectureDiagram"
import TravelBuddyArchitectureDiagram from "@/components/diagrams/TravelBuddyArchitectureDiagram"
type Props = {
  params: Promise<{ slug: string }>
}

export default function ProjectDetailPage({ params }: Props) {
  // ✅ Next.js: params is a Promise in newer App Router versions
  const { slug } = React.use(params)

  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <section className="max-w-4xl mx-auto space-y-8 px-6 py-10">
      <h1 className="text-3xl font-semibold">{project.title}</h1>

      <p className="text-gray-600 dark:text-gray-300">{project.summary}</p>

      <div className="pt-4 space-y-3">
        <h2 className="text-xl font-medium">Problem</h2>
        <p className="text-gray-600 dark:text-gray-300">{project.problem}</p>
      </div>

      <div className="pt-4 space-y-3">
        <h2 className="text-xl font-medium">Solution</h2>
        <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
      </div>

      <div className="pt-6 space-y-4">
        <h2 className="text-xl font-medium">System Architecture</h2>

          {project.slug === "grounded-research-assistant" && (
            <>
              <div className="overflow-x-auto">
                <GroundedResearchAssistantDiagram />
              </div>

              <ArchitectureBlock
                steps={[
                  "User provides research PDF and analysis goal.",
                  "Document is chunked and embedded into a paper specific vector index.",
                  "LangGraph orchestrates agent tasks based on the analysis goal.",
                  "Each agent retrieves grounded evidence via RAG.",
                  "Structured outputs are validated using Pydantic schemas.",
                  "Results are stored and reused for follow up Q&A.",
                ]}
              />
            </>
          )}

          {project.slug === "bonex" && (
            <div className="overflow-x-auto">
              <BoneXArchitectureDiagram />
            </div>
          )}

          {project.slug === "travelbuddy" && (
            <div className="overflow-x-auto">
              <TravelBuddyArchitectureDiagram />
            </div>
          )}

      </div>

      {project.decisions?.length > 0 && (
        <div className="pt-4 space-y-3">
          <h2 className="text-xl font-medium">Key Design Decisions</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
            {project.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {project.outcomes && (
        <div className="pt-4 space-y-3">
          <h2 className="text-xl font-medium">Outcomes</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.outcomes}</p>
        </div>
      )}

      {project.repoUrl && (
        <div className="pt-6">
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            View implementation on GitHub →
          </Link>
        </div>
      )}
    </section>
  )
}

