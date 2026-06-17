"use client"

import Link from "next/link"
import LiveTradingBotDiagram from "@/components/diagrams/LiveTradingBotDiagram"
import { projects } from "@/data/projects"

export default function LiveTradingSystemCaseStudy() {
  const project = projects.find((p) => p.slug === "autonomous-live-trading-system")

  if (!project) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Claude Autonomous Trading Bot</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Project data not found.</p>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto space-y-12 px-6 py-12">

      {/* Title */}
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {project.summary}
        </p>
      </div>

      {/* Problem */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">The Problem</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Most algorithmic trading projects are one big script. The strategy, the risk logic,
          and the broker call all live in the same place. That works fine until something goes
          wrong at 3am and a bug in your research loop starts placing live orders. The real
          challenge is not building a system that trades. It is building one that fails safely.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Adding AI makes this harder. LLMs can read financial news better than any keyword filter,
          but they are non-deterministic and will occasionally return a confident but wrong signal.
          Putting one directly in the order path hands capital allocation to a model you cannot fully
          audit. That is a problem no amount of prompt engineering solves.
        </p>
      </div>

      {/* What I Built */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">What I Built</h2>
        <p className="text-gray-600 dark:text-gray-300">
          An autonomous multi-agent trading system where each agent has one job and strict
          boundaries around what it can touch. The Regime Classifier Agent reads market
          conditions and decides which strategy fits. The LLM Sentiment Agent reads live
          news and adjusts confidence up or down. The Strategy Selector Agent picks an approach
          and fires a typed TradeIntent. None of these agents can place an order.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Every TradeIntent routes through the Risk Gatekeeper Agent before it reaches the
          broker. The gatekeeper runs pure logic with no ML and no network calls. It approves,
          resizes, or vetoes. If anything looks uncertain, stale, or unreconciled, the system
          halts and logs. It does not guess. This is the architectural boundary that makes
          autonomous trading safe enough to run without a human watching every decision.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          The system stays connected to you through a two-way Telegram interface. When the
          Risk Gatekeeper approves a trade, a proposal lands on your phone with a single tap
          to approve or deny before anything executes. When the system halts, it sends a
          structured brief you can paste straight into Claude on your phone to diagnose what
          happened. You can also send plain English commands back, like "buy 10 NVDA tight
          stop" and Claude parses your intent into a structured action that still passes
          through the risk gate. Autonomous, but always within reach.
        </p>
      </div>

      {/* Architecture */}
      <div className="space-y-5">
        <h2 className="text-xl font-medium">System Architecture</h2>
        <LiveTradingBotDiagram />
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          {project.architecture.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      {/* Key Design Decisions */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Key Design Decisions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          {project.decisions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Outcomes */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Outcomes</h2>
        <p className="text-gray-600 dark:text-gray-300">
          The system runs autonomously across live market sessions. Agents perceive market
          conditions, reason about sentiment, plan the right strategy, validate risk, and
          execute approved orders without waiting for a human decision at each step. Every
          action is logged and auditable, from what the sentiment agent read to what the
          gatekeeper approved or rejected.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          This project reflects how serious agentic AI systems are built today: autonomous
          reasoning layered on top of deterministic guardrails, with each agent operating
          within a clearly bounded domain. That same pattern applies well beyond trading,
          to any system where AI needs to act in the real world without a human in the loop
          for every decision.
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
