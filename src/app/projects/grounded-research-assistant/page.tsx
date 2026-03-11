"use client"

import { useState } from "react"

type Focus =
  | "planner"
  | "workers"
  | "reviewer"
  | "compiler"
  | "hitl"
  | "user"
  | null

export default function GroundedResearchAssistantDiagram() {
  const [focus, setFocus] = useState<Focus>(null)

  const fadeOther = (key: Focus) => (focus === null || focus === key ? 1 : 0.18)

  return (
    <div className="diagram-wrap rounded-xl border bg-white dark:bg-gray-900 p-4 text-slate-700 dark:text-slate-200">
      <svg
        viewBox="0 0 1040 420"
        className="block w-full"
        style={{ height: 280 }}
      >
        {/* ===== Markers ===== */}
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
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* ====== Top pipeline nodes ====== */}
        {/* Loader */}
        <g opacity={1}>
          <rect x="40" y="40" rx="12" width="160" height="72" fill="#f1f5f9" stroke="#cbd5e1" />
          <text x="120" y="78" textAnchor="middle" fontSize="14" fontWeight="600" fill="currentColor">
            Loader
          </text>
          <text x="120" y="98" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            PDF → text + metadata
          </text>
        </g>

        {/* Planner */}
        <g
          className="diagram-node cursor-pointer"
          opacity={fadeOther("planner")}
          onMouseEnter={() => setFocus("planner")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="230" y="40" rx="12" width="190" height="72" fill="#e0f2fe" stroke="#bae6fd" />
          <text x="325" y="76" textAnchor="middle" fontSize="14" fontWeight="600" fill="currentColor">
            Planner (Analyzer)
          </text>
          <text x="325" y="98" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            Goal → task plan (structured)
          </text>
        </g>

        {/* Workers */}
        <g
          className="diagram-node cursor-pointer"
          opacity={fadeOther("workers")}
          onMouseEnter={() => setFocus("workers")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="455" y="28" rx="12" width="215" height="96" fill="#dcfce7" stroke="#bbf7d0" />
          <text x="562" y="64" textAnchor="middle" fontSize="14" fontWeight="600" fill="currentColor">
            Workers (fan out)
          </text>
          <text x="562" y="86" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            Parallel tasks + RAG evidence
          </text>
          <text x="562" y="106" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            fan out / fan in
          </text>
        </g>

        {/* Reviewer */}
        <g
          className="diagram-node cursor-pointer"
          opacity={fadeOther("reviewer")}
          onMouseEnter={() => setFocus("reviewer")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="705" y="40" rx="12" width="180" height="72" fill="#fef3c7" stroke="#fde68a" />
          <text x="795" y="78" textAnchor="middle" fontSize="14" fontWeight="600" fill="currentColor">
            Reviewer
          </text>
          <text x="795" y="98" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            Grounding validation
          </text>
        </g>

        {/* Compiler */}
        <g
          className="diagram-node cursor-pointer"
          opacity={fadeOther("compiler")}
          onMouseEnter={() => setFocus("compiler")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="905" y="40" rx="12" width="95" height="72" fill="#ede9fe" stroke="#ddd6fe" />
          <text x="952" y="78" textAnchor="middle" fontSize="14" fontWeight="600" fill="currentColor">
            Compiler
          </text>
          <text x="952" y="98" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.85">
            Report JSON
          </text>
        </g>

        {/* ====== Bottom support + HITL + User ====== */}

        {/* Vector index (Chroma) */}
        <g opacity={fadeOther("workers")}>
          <rect x="330" y="250" rx="12" width="210" height="70" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="435" y="284" textAnchor="middle" fontSize="13" fontWeight="600" fill="currentColor">
            Chroma Vector Index
          </text>
          <text x="435" y="306" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            Paper specific retrieval
          </text>
        </g>

        {/* Local model (Ollama) */}
        <g opacity={fadeOther("workers")}>
          <rect x="565" y="250" rx="12" width="200" height="70" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="665" y="284" textAnchor="middle" fontSize="13" fontWeight="600" fill="currentColor">
            Local LLM (Ollama)
          </text>
          <text x="665" y="306" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            Tool / inference loop
          </text>
        </g>

        {/* HITL */}
        <g
          className="diagram-node cursor-pointer"
          opacity={fadeOther("hitl")}
          onMouseEnter={() => setFocus("hitl")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="40" y="250" rx="12" width="250" height="70" fill="#fee2e2" stroke="#fecaca" />
          <text x="165" y="284" textAnchor="middle" fontSize="13" fontWeight="600" fill="currentColor">
            Human in the Loop (HITL)
          </text>
          <text x="165" y="306" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            Review · Feedback · Override
          </text>
        </g>

        {/* User */}
        <g
          className="diagram-node cursor-pointer"
          opacity={fadeOther("user")}
          onMouseEnter={() => setFocus("user")}
          onMouseLeave={() => setFocus(null)}
        >
          <rect x="805" y="250" rx="12" width="205" height="70" fill="#e0e7ff" stroke="#c7d2fe" />
          <text x="907" y="284" textAnchor="middle" fontSize="13" fontWeight="600" fill="currentColor">
            User
          </text>
          <text x="907" y="306" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.85">
            Results · follow ups
          </text>
        </g>

        {/* ====== Animated main pipeline arrows (Loader→Planner→Workers→Reviewer→Compiler) ====== */}
        <line
          x1="200" y1="76" x2="230" y2="76"
          stroke="currentColor" strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("planner")}
        />
        <line
          x1="420" y1="76" x2="455" y2="76"
          stroke="currentColor" strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("workers")}
        />
        <line
          x1="670" y1="76" x2="705" y2="76"
          stroke="currentColor" strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("reviewer")}
        />
        <line
          x1="885" y1="76" x2="905" y2="76"
          stroke="currentColor" strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("compiler")}
        />

        {/* ====== Workers ↔ Retrieval (RAG loop to Chroma) ====== */}
        <path
          d="M 560 124 C 560 175, 500 190, 435 250"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("workers")}
        />
        <path
          d="M 540 285 C 560 285, 585 220, 580 124"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("workers")}
        />

        {/* ====== Workers ↔ Local model/tool loop (Ollama) ====== */}
        <path
          d="M 620 124 C 675 170, 690 195, 665 250"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("workers")}
        />
        <path
          d="M 765 285 C 720 285, 675 220, 655 124"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("workers")}
        />

        {/* ====== Compiler → User (final delivery) ====== */}
        <path
          d="M 952 112 C 952 170, 940 210, 907 250"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("compiler")}
        />

        {/* ====== Reviewer → HITL (escalation when needed) ====== */}
        <path
          d="M 795 112 C 760 165, 420 190, 225 250"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("hitl")}
        />

        {/* ====== HITL → Planner (feedback loop) ====== */}
        <path
          d="M 165 250 C 160 170, 230 150, 300 112"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("hitl")}
        />

        {/* ====== User → Planner (follow up loop) ====== */}
        <path
          d="M 805 285 C 690 350, 460 350, 325 112"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrow)"
          className="flow-line"
          opacity={fadeOther("user")}
        />

        {/* ====== Optional moving data packet across the main pipeline ======
            (Uses SVG animateMotion) [2](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/animateMotion) */}
        <circle r="4" fill="currentColor" opacity={focus ? 0 : 0.95}>
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path="M 210 76 L 990 76"
          />
        </circle>
      </svg>

      <div className="mt-3 text-xs text-gray-600 dark:text-gray-300">
        This diagram mirrors your workflow stages (Loader → Planner → Workers → Reviewer → Compiler) with evidence grounding via retrieval and local inference, plus HITL review and user feedback loops for iterative refinement. [1](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/stroke-dashoffset)[2](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/animateMotion)
      </div>
    </div>
  )
}
