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
      "Research teams spend significant time extracting summaries, experimental setup, limitations, and critique from academic papers. This work is repetitive, hard to standardize, and easy to get wrong.",
    solution:
      "A workflow that ingests research PDFs and produces structured, evidence backed outputs such as summaries, findings, limitations, and replication notes.",
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
      "Enables repeatable, traceable analysis of research papers for literature reviews, reproducibility checks, and due diligence workflows.",
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
    "Debugging software failures is a manual, time-consuming, and error-prone process. Engineers must inspect logs, stack traces, failed tests, and repository context to identify root causes and propose fixes. This work does not scale and repeatedly consumes senior engineering time for routine issues.",
  solution:
    "A multi-agent debugging system that autonomously understands failures, locates root causes in code, generates minimal fixes, validates them through tests, and iterates deterministically using an explicit state machine.",
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
    "Automates routine debugging workflows, reduces time to root-cause identification, produces safe and minimal code fixes, and iteratively improves solutions without human intervention.",
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
    title: "BoneX — Multi Bone Fracture Detection System",
    summary:
      "An AI system for detecting and classifying bone fractures across seven anatomical regions from X ray images, deployed as a usable web application.",
    problem:
      "Fracture detection across multiple bone types is challenging due to variability in anatomy and imaging conditions. Baseline models can underperform without careful fine tuning and evaluation.",
    solution:
      "BoneX applies a Keras-based deep CNN workflow to classify fractures across seven regions (elbow, finger, forearm, hand, humerus, shoulder, wrist) and returns both fracture presence and type via a simple upload and predict web interface.",
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
      "Achieved 84% precision and recall for fracture detection/classification, improving upon a previous 79% benchmark. Supported seven fracture categories and packaged the workflow into a web application for interactive use.",
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
  title: "TravelBuddy — Multi Agent AI Travel Assistant",
  summary:
    "A multi agent AI travel planning system that routes user requests to specialized agents for efficient, low latency, and cost aware task execution.",
  problem:
    "General-purpose LLM assistants often overuse reasoning and incur unnecessary latency and cost for travel-related tasks that can be handled deterministically via APIs or specialized tools.",
  solution:
    "TravelBuddy uses a supervisor agent architecture to interpret user intent and delegate requests to specialized agents for route planning, EV charging discovery, and nearby attraction recommendations. The system dynamically chooses between LLM reasoning and direct API execution based on task complexity.",
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
    "Reduced response latency and LLM usage by routing simple queries directly to tools and APIs. Demonstrated a scalable, cost-aware agent orchestration pattern suitable for real-world travel planning systems.",
  repoUrl: "https://github.com/zeelgithub/travel-buddy", // replace with your real repo
  tags: [ "LLM Orchestration", "Cost Optimization", "Langchain"],
  highlights: [
    "Supervisor agent orchestration",
    "Intent based routing (LLM vs tools)",
    "Latency and cost optimized execution",
  ],
},

  {
    slug: "autonomous-live-trading-system",
    title: "Claude Autonomous Trading Bot",
    summary:
      "An autonomous multi-agent trading system where specialized AI agents perceive market conditions, reason about sentiment, plan a strategy, and execute approved orders, all without a human in the loop for each decision.",
    problem:
      "Building a trading system that works is easy. Building one that fails safely at 3am, when data goes stale or an AI returns a wrong signal, is the hard part. Most systems collapse this into one script with no boundaries, which means a bug anywhere can become a live order.",
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
      "A fully autonomous trading system that runs live market sessions without human intervention. Agents perceive, reason, plan, and act within strict boundaries. Every decision is logged and auditable. The architecture scales from paper trading to live capital and demonstrates the same agentic design pattern used in production AI systems across finance, DevOps, and autonomous workflows.",
    repoUrl: "https://github.com/zeelgithub/claude-autonomous-trading-bot",
    tags: ["Agentic AI", "Risk Management", "Event-Driven", "Production AI", "System Design"],
    highlights: [
      "LLM Sentiment Agent reads news and adjusts conviction, never triggers trades",
      "Regime-aware routing across Trend Following, Mean Reversion, and Breakout",
      "Risk Gatekeeper Agent vetoes any intent before it reaches the broker",
    ],
  },
]
