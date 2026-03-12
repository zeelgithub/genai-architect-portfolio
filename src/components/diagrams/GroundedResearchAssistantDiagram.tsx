"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

type Focus =
  | "planner"
  | "workers"
  | "reviewer"
  | "compiler"
  | "hitl"
  | "user"
  | null

export default function GroundedResearchAssistantDiagram() {
  const { theme } = useTheme()
  const [focus, setFocus] = useState<Focus>(null)

  const fadeOther = (key: Focus) =>
    focus === null || focus === key ? 1 : 0.18

  // ✅ EXPLICIT contrast-safe colors
  const TITLE_COLOR = theme === "dark" ? "#e5e7eb" : "#0f172a"
  const SUB_COLOR   = theme === "dark" ? "#cbd5e1" : "#334155"
  const STROKE      = theme === "dark" ? "#94a3b8" : "#334155"

  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
      <svg viewBox="0 0 1040 420" className="block w-full" style={{ height: 280 }}>
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
            <path d="M 0 0 L 10 5 L 0 10 z" fill={STROKE} />
          </marker>
        </defs>

        {/* Loader */}
        <g>
          <rect x="40" y="40" width="160" height="72" rx="12" fill="#f1f5f9" stroke="#cbd5e1" />
          <text x="120" y="78" textAnchor="middle" fontSize="14" fontWeight="600" fill={TITLE_COLOR}>
            Loader
          </text>
          <text x="120" y="98" textAnchor="middle" fontSize="11" fill={SUB_COLOR}>
            PDF → text + metadata
          </text>
        </g>

        {/* Planner */}
        <g
          opacity={fadeOther("planner")}
          onMouseEnter={() => setFocus("planner")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="230" y="40" width="190" height="72" rx="12" fill="#e0f2fe" stroke="#bae6fd" />
          <text x="325" y="76" textAnchor="middle" fontSize="14" fontWeight="600" fill={TITLE_COLOR}>
            Planner (Analyzer)
          </text>
          <text x="325" y="98" textAnchor="middle" fontSize="11" fill={SUB_COLOR}>
            Goal → task plan (structured)
          </text>
        </g>

        {/* Workers */}
        <g
          opacity={fadeOther("workers")}
          onMouseEnter={() => setFocus("workers")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="455" y="28" width="215" height="96" rx="12" fill="#dcfce7" stroke="#bbf7d0" />
          <text x="562" y="64" textAnchor="middle" fontSize="14" fontWeight="600" fill={TITLE_COLOR}>
            Workers (fan out)
          </text>
          <text x="562" y="86" textAnchor="middle" fontSize="11" fill={SUB_COLOR}>
            Parallel tasks + RAG evidence
          </text>
        </g>

        {/* Reviewer */}
        <g
          opacity={fadeOther("reviewer")}
          onMouseEnter={() => setFocus("reviewer")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="705" y="40" width="180" height="72" rx="12" fill="#fef3c7" stroke="#fde68a" />
          <text x="795" y="78" textAnchor="middle" fontSize="14" fontWeight="600" fill={TITLE_COLOR}>
            Reviewer
          </text>
          <text x="795" y="98" textAnchor="middle" fontSize="11" fill={SUB_COLOR}>
            Grounding validation
          </text>
        </g>

        {/* Arrows */}
        {[
          ["200 76", "230 76"],
          ["420 76", "455 76"],
          ["670 76", "705 76"],
        ].map(([a, b], i) => (
          <line
            key={i}
            x1={a.split(" ")[0]}
            y1={a.split(" ")[1]}
            x2={b.split(" ")[0]}
            y2={b.split(" ")[1]}
            stroke={STROKE}
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
        ))}
      </svg>
    </div>
  )
}