export type Project = {
  slug: string
  title: string
  summary: string
  problem: string
  solution: string
  architecture: string[]
  decisions: string[]
  outcomes: string
  repoUrl?: string

  // Optional portfolio helpers
  tags?: string[]
  highlights?: string[]
}

export const projects: Project[] = [
  {
    slug: "grounded-research-assistant",
    title: "Grounded Research Assistant",
    summary:
      "An agentic, evidence grounded research assistant that converts research papers into structured, traceable outputs using RAG.",
    problem:
      "Literature review and paper analysis is manual, unstructured, and high-variance across researchers. Extracting summaries, experimental setup, limitations, and critique from academic PDFs consumes senior research time and produces inconsistent outputs that are difficult to audit or reproduce.",
    solution:
      "A stateful agentic workflow that ingests research PDFs and emits structured, schema-validated outputs — summaries, findings, limitations, and replication notes — grounded in retrieved passage evidence, not model recall.",
    architecture: [
      "Stateful orchestration with LangGraph (agent workflow).",
      "Retrieval augmented generation (RAG) to ground outputs in paper passages.",
      "Structured outputs enforced with Pydantic schemas.",
      "Local inference using Ollama for offline/cost controlled execution.",
    ],
    decisions: [
      "Use agentic planning rather than a single prompt to mirror real research workflows.",
      "Prefer structured outputs over free form text to reduce hallucination risk and simplify downstream use.",
      "Persist paper-specific retrieval context to support follow up Q&A.",
    ],
    outcomes:
      "Produces repeatable, evidence-anchored paper analysis with full retrieval traceability — structured for downstream literature review, reproducibility audits, and systematic due diligence at scale.",
    repoUrl: "https://github.com/zeelgithub/grounded-research-assistant",
    tags: ["Parallel Agents", "RAG", "LangGraph", "HITL"],
    highlights: [
      "Agentic workflow (plan → fan out → review → compile)",
      "Evidence grounded outputs with retrieval",
      "Interactive architecture diagram + HITL loop",
    ],
  },
  {
  slug: "autonomous-debugger-assistant",
  title: "Autonomous Debugger Assistant",
  summary:
    "A deterministic, multi-agent AI system that autonomously analyzes software failures, identifies root causes, generates safe code fixes, and validates them using a LangGraph-controlled execution loop.",
  problem:
    "Software failure triage is unstructured and does not scale. Root-cause identification requires correlating logs, stack traces, failed tests, and repository context — a task that consumes senior engineering time on routine issues with no repeatability or auditability guarantees.",
  solution:
    "A deterministic multi-agent system modeled as an explicit LangGraph state machine. Specialized agents for planning, analysis, code repair, and evaluation operate within strict isolation boundaries. All LLM outputs are schema-validated; retry logic and termination are centralized in a single Evaluator agent with bounded iteration.",
  architecture: [
    "LangGraph state machine orchestrating agent execution with explicit nodes and edges.",
    "Planner, analyzer, fixer, and evaluator agents modeled as first-class graph nodes.",
    "Evaluator-controlled retry loop to ensure bounded and deterministic execution.",
    "Architectural guardrails enforcing safe inputs and patch constraints.",
    "Tool-isolated execution for repository access, patching, and test runs.",
  ],
  decisions: [
    "Model debugging as an explicit state machine instead of implicit LLM chaining.",
    "Centralize all retry and termination decisions in a single Evaluator agent.",
    "Enforce structured, schema-validated LLM outputs to prevent unsafe patches.",
    "Treat safety guardrails as architectural components rather than prompt logic.",
    "Separate agent reasoning from tool execution to avoid uncontrolled side effects.",
  ],
  outcomes:
    "Eliminates manual triage for routine failure classes. Produces minimal, safe, schema-constrained code patches with full auditability across every agent decision. Demonstrates a production-grade agentic safety pattern: bounded autonomy, structured outputs, and zero uncontrolled side effects.",
  repoUrl: "https://github.com/zeelgithub/autonomous-debugger-assistant", // ✅ update if needed
  tags: [
    "LangGraph",
    "Guardrails",
    "LLMOps",
    "System Design",
    "Production AI",
  ],
  highlights: [
    "Evaluator-driven bounded retry loop ensuring convergence",
    "Structured system for coordinating multi-agent workflow",
    "Safety guardrails for controlled autonomous code changes",
  ],
},


  {
    slug: "bonex",
    title: "BoneX: Multi Bone Fracture Detection System",
    summary:
      "An AI system for detecting and classifying bone fractures across seven anatomical regions from X ray images, deployed as a usable web application.",
    problem:
      "Automated fracture detection degrades significantly across anatomical regions due to variance in bone geometry and imaging artifact distribution. Baseline models trained on aggregate datasets underperform on region-specific classification, limiting diagnostic utility in clinical screening workflows.",
    solution:
      "Region-specific fine-tuned deep CNN pipeline covering seven anatomical sites (elbow, finger, forearm, hand, humerus, shoulder, wrist). Precision/recall-optimized evaluation pipeline reflects real diagnostic cost asymmetry. Deployed end-to-end as a web application: upload X-ray → preprocessing → inference → structured diagnosis output.",
    architecture: [
      "Web UI → Flask server receives X ray image uploads.",
      "Preprocessing pipeline standardizes inputs for inference.",
      "Fine tuned deep CNN performs multi class fracture classification.",
      "Prediction output returns fracture vs normal and fracture category.",
    ],
    decisions: [
      "Use fine tuning/transfer learning to improve diagnostic performance over baseline models.",
      "Treat the work as an end to end system (upload → inference → result) instead of a notebook.",
      "Evaluate using precision/recall to reflect real diagnostic needs beyond simple accuracy.",
    ],
    outcomes:
      "84% precision and recall across seven fracture categories, a 5-point improvement over the 79% baseline. Full pipeline deployed as a production web application — not a research notebook — with structured prediction output covering fracture presence and anatomical classification.",
    repoUrl: "https://github.com/zeelgithub/BoneX-AnMultiBoneFractureDetectionSystem", // <-- replace if your BoneX repo URL differs
    tags: ["Computer Vision", "Medical Imaging", "Transformers"],
    highlights: [
      "7 fracture categories supported",
      "84% precision/recall (vs 79% baseline)",
      "Deployed workflow: upload → diagnosis",
    ],
  },
  

{
  slug: "travelbuddy",
  title: "TravelBuddy: Multi Agent AI Travel Assistant",
  summary:
    "A multi agent AI travel planning system that routes user requests to specialized agents for efficient, low latency, and cost aware task execution.",
  problem:
    "General-purpose LLM agents apply uniform reasoning overhead to every task regardless of complexity, incurring unnecessary latency and token cost on deterministic lookups that do not require model inference — route planning, charging station discovery, and nearby-attraction queries each have purpose-built APIs.",
  solution:
    "Supervisor agent architecture with explicit intent classification and task routing. The supervisor delegates to specialized downstream agents — routing, EV charging, and attraction discovery — and selects deterministic API execution over LLM inference whenever task complexity permits, minimizing cost and latency per query.",
  architecture: [
    "Streamlit-based UI for interactive travel planning.",
    "Supervisor agent analyzes user intent and selects the appropriate execution path.",
    "Specialized agents handle routing, EV charging, and attraction discovery.",
    "Deterministic API calls are preferred when possible to reduce cost and latency.",
  ],
  decisions: [
    "Introduce a supervisor agent to centralize intent interpretation and task routing.",
    "Avoid unnecessary LLM calls by using tool-specific agents and direct API queries.",
    "Design agents as modular components to allow easy extension without modifying the supervisor.",
  ],
  outcomes:
    "Measurably reduced LLM token usage and response latency by routing deterministic queries to direct API execution. Demonstrates a cost-aware orchestration pattern applicable to any agentic system where task complexity varies: intelligent routing eliminates the overhead of uniform LLM inference across heterogeneous request types.",
  repoUrl: "https://github.com/zeelgithub/travel-buddy", // replace with your real repo
  tags: [ "LLM Orchestration", "Cost Optimization", "Langchain"],
  highlights: [
    "Supervisor agent orchestration",
    "Intent based routing (LLM vs tools)",
    "Latency and cost optimized execution",
  ],
},

  {
    slug: "personal-life-os",
    title: "Personal Life OS: Real-Time Personal Intelligence Platform",
    summary:
      "A real-time personal intelligence platform that aggregates health telemetry, financial positions, academic schedules, and daily priorities from seven live sources, all stored on-device with no third-party data dependency, fault-isolated per source, and built on a fully agentic development workflow.",
    problem:
      "Personal context is fragmented across isolated applications with no unified interface. Health telemetry, financial positions, academic deadlines, and calendar data each require separate context switches and provide no cross-domain signal. No existing tool aggregates these streams in real time, on-device, without routing sensitive personal data through third-party cloud infrastructure.",
    solution:
      "A real-time aggregation platform ingesting seven live data sources — Apple Watch health telemetry, Google Calendar, Canvas LMS, and Alpaca Markets positions — into a single on-device store with no cloud intermediary. Each source is fault-isolated: connection failure in one stream does not degrade others. The entire system was built using an autonomous AI development workflow: code generation, testing, and live browser verification running end-to-end without human intervention per iteration.",
    architecture: [
      "An autonomous AI agent drives the full development lifecycle, from initial design through implementation, live verification, and deployment.",
      "Automated environment tools close the loop between a code change and confirmed behavior in a running system; changes are verified in a live browser before they land.",
      "Repeatable development operations encoded as shareable primitives; review, verification, and security scanning run consistently across every iteration.",
      "Editor integrations surface AI assistance inline, with no context-switch to an external tool during active development.",
      "Lifecycle hooks enforce consistent behavior at every automated action, with no manual coordination required between development steps.",
      "Persistent context memory carries project state, preferences, and session history, so the agent maintains full awareness across every development session.",
      "Seven live data sources, each with a distinct access model, aggregated into a single on-device store with no cloud intermediary.",
      "A multi-stage correctness gate runs on every change: type safety, style, functional coverage, and a full production build must all pass before code lands.",
    ],
    decisions: [
      "All data stays on the device; nothing is sent to the cloud.",
      "Health data updates in real time, not on a fixed schedule.",
      "Each data source is isolated; one failure never breaks another.",
      "One screen, no page loads, built for something checked many times a day.",
      "Tests run without a live network or database, keeping them fast and reliable.",
    ],
    outcomes:
      "Zero personal data transits third-party infrastructure — privacy enforced at the architecture level, not the policy level. Per-source fault isolation ensures full platform availability under partial connectivity failure. The agentic development workflow and source isolation pattern are packaged as portable, reusable primitives: other teams can adopt the connector abstraction to provide any AI tool with secure, standardized access to personal health, calendar, or financial data without rebuilding from scratch.",
    tags: ["System Design", "Data Aggregation", "Agentic Dev", "Privacy by Design", "Local-First"],
    highlights: [
      "Seven live sources (health telemetry, calendar, academics, finance, daily routine), fault-isolated and aggregated on-device",
      "Privacy enforced by architecture: no health metric or financial position ever reaches a third party",
      "Dev workflow packaged as a portable skill set; connector pattern designed to generalize into a reusable access layer",
    ],
  },

  {
    slug: "autonomous-live-trading-system",
    title: "Claude Autonomous Trading Bot",
    summary:
      "An autonomous multi-agent trading system where specialized AI agents perceive market conditions, reason about sentiment, plan a strategy, and execute approved orders, all without a human in the loop for each decision.",
    problem:
      "Autonomous trading systems fail unsafely when agent boundaries are not enforced at the architecture level. A single shared execution context means stale market data, a model output distribution shift, or an unhandled exception can propagate directly to live order submission — with no gate between reasoning and capital risk.",
    solution:
      "A layered agentic architecture where each agent has one job and cannot touch what it does not own. The LLM Sentiment Agent reads news and adjusts confidence. The Strategy Selector Agent picks an approach and fires a TradeIntent. The Risk Gatekeeper Agent validates every intent before anything reaches the broker. No agent can bypass another.",
    architecture: [
      "Orchestrator manages the state machine, scheduler, and agent lifecycle across the full pipeline.",
      "Data Ingestor and Feature Store supply clean, point-in-time-correct market data to all downstream agents.",
      "LLM Sentiment Agent reads live news headlines and returns a confidence signal (-1 / 0 / +1) that informs but never overrides the strategy.",
      "Regime Classifier Agent detects current market conditions and routes to Trend Following, Mean Reversion, or Breakout.",
      "Risk Gatekeeper Agent runs pure logic with veto power over every TradeIntent before execution.",
      "Execution layer receives only pre-approved, pre-sized orders and reconciles every fill back to shared state.",
    ],
    decisions: [
      "Strict agent isolation: the research and strategy agents cannot construct a broker client or place an order.",
      "LLM used as a confidence modifier, not a decision maker, so non-deterministic outputs never own a capital decision.",
      "Fail-safe default: on any uncertainty including stale data, disconnect, or reconcile mismatch, the system halts and logs.",
      "Typed message bus connects all agents so no layer reaches into another's internal state.",
      "Point-in-time correctness enforced at the data layer so agents never train or decide on future-leaked data.",
      "Credential isolation: market-data keys and trading keys live in separate modules with no shared access.",
    ],
    outcomes:
      "A fully autonomous multi-agent trading system operating across live market sessions with no per-decision human intervention. Every trade intent is logged, risk-gated, and auditable end-to-end. The LLM is isolated as a confidence signal — never as a decision authority — enforcing a hard boundary between non-deterministic reasoning and capital execution. Architecture scales from paper trading to live capital without structural changes.",
    repoUrl: "https://github.com/zeelgithub/claude-autonomous-trading-bot",
    tags: ["Agentic AI", "Risk Management", "Event-Driven", "Production AI", "System Design"],
    highlights: [
      "LLM Sentiment Agent reads news and adjusts conviction, never triggers trades",
      "Regime-aware routing across Trend Following, Mean Reversion, and Breakout",
      "Risk Gatekeeper Agent vetoes any intent before it reaches the broker",
    ],
  },
]
