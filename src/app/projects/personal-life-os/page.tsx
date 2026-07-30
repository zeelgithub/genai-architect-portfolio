"use client"

import Link from "next/link"
import PersonalLifeOSDiagram from "@/components/diagrams/PersonalLifeOSDiagram"
import { projects } from "@/data/projects"

export default function PersonalLifeOSCaseStudy() {
  const project = projects.find((p) => p.slug === "personal-life-os")

  if (!project) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Personal Life OS</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Project data not found.</p>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto space-y-12 px-6 py-12">
      {/* Title */}
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{project.summary}</p>
      </div>

      {/* Problem */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Problem</h2>
        <p className="text-gray-600 dark:text-gray-300">{project.problem}</p>
      </div>

      {/* Solution */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Solution</h2>
        <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
      </div>

      {/* Live Integrations */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">Live Integrations</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Seven live sources, each with a distinct access model, aggregated into a single fault-tolerant on-device interface. A disruption in any one source has zero impact on the others.
        </p>
        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Apple Health</span>
            {": "}Real-time health telemetry from Apple Watch, including steps, heart rate variability, resting heart rate, active calories, individual workouts, and sleep stages, pushed automatically as new data arrives. No polling, no manual export.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Google Calendar</span>
            {": "}Full schedule visibility secured with read-only credentials. Today{"'"}s events and upcoming commitments are surfaced without granting any write access to the account.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Canvas LMS</span>
            {": "}Active assignment deadlines, exam dates, and course-level visibility across all enrolled courses, surfaced automatically with no manual due-date tracking.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Alpaca Markets</span>
            {": "}Real-time portfolio snapshot, open positions, and order history, from paper trading through to live capital, without a separate brokerage login.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Daily Routine</span>
            {": "}Three structured manual-entry flows, each stored locally:
            <ul className="mt-2 ml-4 list-disc space-y-1 text-sm">
              <li>Supplements: morning and evening checklist with per-item completion tracking</li>
              <li>Priorities: top 1–3 tasks for the day, automatically cleared at midnight</li>
              <li>Nutrition: per-meal macro and calorie log with history across prior days</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Architecture */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">System Architecture</h2>
        <PersonalLifeOSDiagram />
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          {project.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Key Design Decisions */}
      {project.decisions && project.decisions.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-medium">Key Design Decisions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            {project.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Outcomes */}
      {project.outcomes && (
        <div className="space-y-3">
          <h2 className="text-xl font-medium">Outcomes</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.outcomes}</p>
        </div>
      )}

      {/* Back link */}
      <div className="pt-4">
        <Link
          href="/projects"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  )
}
