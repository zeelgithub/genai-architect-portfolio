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
    tags: ["Agents", "RAG", "LangGraph", "Ollama"],
    highlights: [
      "Agentic workflow (plan → fan out → review → compile)",
      "Evidence grounded outputs with retrieval",
      "Interactive architecture diagram + HITL loop",
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
    repoUrl: "https://github.com/zeelgithub/bonex", // <-- replace if your BoneX repo URL differs
    tags: ["Computer Vision", "Medical Imaging", "Transformers","Deep Learning", "Flask"],
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
  repoUrl: "https://github.com/<your-username>/travelbuddy", // replace with your real repo
  tags: ["Multi Agent Systems", "LLM Orchestration", "Cost Optimization", "Streamlit"],
  highlights: [
    "Supervisor agent orchestration",
    "Intent based routing (LLM vs tools)",
    "Latency and cost optimized execution",
  ],
},
]
