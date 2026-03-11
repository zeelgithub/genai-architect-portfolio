// src/components/diagrams/GroundedResearchAssistantDiagram.tsx
"use client"

import { useState } from "react"

type Focus = "planner" | "workers" | "reviewer" | "compiler" | null

export default function GroundedResearchAssistantDiagram() {
  const [focus, setFocus] = useState<Focus>(null)

  const active = (key: Focus) => (focus === null || focus === key ? 1 : 0.2)

  return (
    <div className="diagram-wrap rounded-xl border bg-white dark:bg-gray-900 p-4">
      <svg
        viewBox="0 0 980 320"
        style={{ width: "100%", height: "260px", background: "#fee2e2" }} // temp background for visibility
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
          </marker>
        </defs>

        {/* ===== Nodes ===== */}

        {/* Loader */}
        <g opacity={active(null)}>
          <rect x="40" y="40" rx="12" width="150" height="72" fill="#eef2f7" />
          <text x="115" y="78" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">
            Loader
          </text>
        </g>

        {/* Planner */}
        <g
          className="diagram-node cursor-pointer"
          opacity={active("planner")}
          onMouseEnter={() => setFocus("planner")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="230" y="40" rx="12" width="180" height="72" fill="#e0f2fe" />
          <text x="320" y="74" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">
            Planner (Analyzer)
          </text>
          <text x="320" y="96" textAnchor="middle" fontSize="11" fill="#334155">
            Goal → task plan
          </text>
        </g>

        {/* Workers */}
        <g
          className="diagram-node cursor-pointer"
          opacity={active("workers")}
          onMouseEnter={() => setFocus("workers")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="450" y="28" rx="12" width="200" height="96" fill="#dcfce7" />
          <text x="550" y="64" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">
            Workers (fan out)
          </text>
          <text x="550" y="86" textAnchor="middle" fontSize="11" fill="#334155">
            Parallel RAG tasks
          </text>
        </g>

        {/* Reviewer */}
        <g opacity={active("reviewer")}>
          <rect x="690" y="40" rx="12" width="170" height="72" fill="#fef3c7" />
          <text x="775" y="78" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">
            Reviewer
          </text>
        </g>

        {/* Compiler */}
        <g
          className="diagram-node cursor-pointer"
          opacity={active("compiler")}
          onMouseEnter={() => setFocus("compiler")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="885" y="40" rx="12" width="70" height="72" fill="#ede9fe" />
          <text x="920" y="78" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">
            Compiler
          </text>
        </g>

        {/* ===== Animated flows ===== */}
        <line
          x1="190"
          y1="76"
          x2="230"
          y2="76"
          stroke="#334155"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={active("planner")}
        />

        <line
          x1="410"
          y1="76"
          x2="450"
          y2="76"
          stroke="#334155"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={active("workers")}
        />

        <line
          x1="650"
          y1="76"
          x2="690"
          y2="76"
          stroke="#334155"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={active("reviewer")}
        />

        <line
          x1="860"
          y1="76"
          x2="885"
          y2="76"
          stroke="#334155"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={active("compiler")}
        />

        {/* Workers -> RAG loop */}
        <path
          d="M 550 124 C 550 160, 450 160, 400 210"
          fill="none"
          stroke="#334155"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={active("workers")}
        />

        <path
          d="M 400 245 C 500 245, 550 200, 550 124"
          fill="none"
          stroke="#334155"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={active("workers")}
        />

        {/* Moving data packet */}
        <circle r="4" fill="#0f172a" opacity={focus ? 0 : 1}>
          <animateMotion dur="3s" repeatCount="indefinite" path="M 200 76 L 920 76" />
        </circle>
      </svg>

      <div className="mt-3 text-xs text-gray-600 dark:text-gray-300">
        Hover Planner, Workers, or Compiler to highlight their live data flows.
      </div>
    </div>
  )
}
