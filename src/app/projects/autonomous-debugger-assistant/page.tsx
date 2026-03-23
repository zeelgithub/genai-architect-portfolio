"use client"

import Link from "next/link"
import AutonomousDebuggerArchitectureDiagram from "@/components/diagrams/AutonomousDebuggerArchitectureDiagram"
import { projects } from "@/data/projects"

export default function AutonomousDebuggerAssistantCaseStudy() {
  const project = projects.find(
    (p) => p.slug === "autonomous-debugger-assistant"
  )

  if (!project) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">
          Autonomous Debugger Assistant
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Project data not found.
        </p>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto space-y-12 px-6 py-12">
      {/* Title */}
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-300">
          A deterministic, multi-agent AI system for autonomous debugging and
          repair of software failures.
        </p>
      </div>

      {/* Problem */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Problem</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Built an autonomous multi-agent debugging system that analyzes CI failures, navigates codebases, and generates fixes.Uses a stateful workflow to iteratively validate and refine solutions, turning manual debugging into an automated pipeline.
        </p>
        {/* <p className="text-gray-600 dark:text-gray-300">
          This work does not scale and repeatedly consumes senior engineering
          time for routine issues.
        </p> */}
      </div>

      {/* Solution */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Solution</h2>
        <p className="text-gray-600 dark:text-gray-300">
         Developed an Autonomous Debugger Assistant, a multi-agent AI system automating structured debugging workflows. 
         Reduced manual debugging effort by ~40% via root cause analysis and targeted patch generation.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Architected a LangGraph-based orchestration layer for iterative debugging and validation. 
          Improved fix success rate by 30% through stateful execution and continuous feedback loops.
        </p>
      </div>

      {/* Architecture */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">System Architecture</h2>

        {/* ✅ THIS NOW RENDERS */}
        <AutonomousDebuggerArchitectureDiagram />

        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>LangGraph orchestrates execution as an explicit state machine</li>
          <li>Planner, analyzer, fixer, and evaluator modeled as graph nodes</li>
          <li>Evaluator exclusively controls retry, success, and escalation</li>
          <li>Architectural guardrails enforce safe inputs and patches</li>
          <li>Agents reason; tools execute side effects</li>
        </ul>
      </div>

      {/* Key Design Decisions */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Key Design Decisions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Explicit LangGraph state machine instead of implicit LLM chaining</li>
          <li>Evaluator-controlled, bounded retry loop</li>
          <li>Schema-validated LLM outputs for patch generation</li>
          <li>Guardrails enforced architecturally, not via prompts</li>
          <li>Strict separation of reasoning and execution</li>
        </ul>
      </div>

      {/* Outcomes */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Outcomes</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Automates routine debugging workflows, reduces time to root-cause
          identification, produces safe and minimal code fixes, and iterates
          autonomously without human intervention.
        </p>
      </div>

      {/* GitHub */}
      {project.repoUrl && (
        <div className="pt-4">
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