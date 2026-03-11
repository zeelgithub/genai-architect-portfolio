"use client"

export default function TravelBuddyArchitectureDiagram() {
  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
      <svg viewBox="0 0 1100 650" className="block w-full" style={{ height: 500 }}>
        {/* Arrow marker */}
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

        {/* ===== User ===== */}
        <rect x="470" y="20" width="160" height="50" rx="12" fill="#eef2f7" stroke="#cbd5e1" />
        <text x="550" y="50" textAnchor="middle" fontSize="14" fontWeight="600">
          User
        </text>

        {/* ===== UI ===== */}
        <rect x="440" y="90" width="220" height="60" rx="12" fill="#e0f2fe" stroke="#bae6fd" />
        <text x="550" y="125" textAnchor="middle" fontSize="14" fontWeight="600">
          Streamlit UI
        </text>

        {/* ===== Orchestrator ===== */}
        <rect x="380" y="180" width="340" height="80" rx="14" fill="#dcfce7" stroke="#bbf7d0" />
        <text x="550" y="214" textAnchor="middle" fontSize="15" fontWeight="600">
          Orchestrator
        </text>
        <text x="550" y="238" textAnchor="middle" fontSize="11">
          Intent Analysis & Task Routing
        </text>

        {/* ===== Optimization / Policy Layer ===== */}
        <rect x="330" y="290" width="440" height="80" rx="14" fill="#fef3c7" stroke="#fde68a" />
        <text x="550" y="320" textAnchor="middle" fontSize="14" fontWeight="600">
          Cost & Latency Policy
        </text>
        <text x="550" y="344" textAnchor="middle" fontSize="11">
          Prefer deterministic tools • Use LLM only when needed
        </text>

        {/* ===== Specialized Agents ===== */}
        <rect x="90" y="410" width="260" height="70" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="220" y="440" textAnchor="middle" fontSize="13" fontWeight="600">
          Route Planning Agent
        </text>
        <text x="220" y="462" textAnchor="middle" fontSize="11">
          Maps / Directions API
        </text>

        <rect x="420" y="410" width="260" height="70" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="550" y="440" textAnchor="middle" fontSize="13" fontWeight="600">
          EV Charging Agent
        </text>
        <text x="550" y="462" textAnchor="middle" fontSize="11">
          Charging Stations & Pricing
        </text>

        <rect x="750" y="410" width="260" height="70" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="880" y="440" textAnchor="middle" fontSize="13" fontWeight="600">
          Attractions Agent
        </text>
        <text x="880" y="462" textAnchor="middle" fontSize="11">
          Foursquare / Places API
        </text>

        {/* ===== Response Aggregation ===== */}
        <rect x="400" y="520" width="300" height="70" rx="14" fill="#ede9fe" stroke="#ddd6fe" />
        <text x="550" y="550" textAnchor="middle" fontSize="14" fontWeight="600">
          Response Aggregation
        </text>
        <text x="550" y="572" textAnchor="middle" fontSize="11">
          Combine tool outputs • Format response
        </text>

        {/* ===== Flow arrows (animated) ===== */}
        {[
          // User -> UI -> Orchestrator
          "M550 70 L550 90",
          "M550 150 L550 180",

          // Orchestrator -> Policy
          "M550 260 L550 290",

          // Policy -> Agents (fan-out)
          "M550 370 L220 410",
          "M550 370 L550 410",
          "M550 370 L880 410",

          // Agents -> Aggregation (fan-in)
          "M220 480 L550 520",
          "M550 480 L550 520",
          "M880 480 L550 520",

          // Aggregation -> User (final answer)
          "M550 590 L550 620",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            markerEnd="url(#arrow)"
            className="flow-line"
          />
        ))}

        {/* Moving data packet (vertical) */}
        <circle r="4" fill="currentColor">
          <animateMotion dur="3s" repeatCount="indefinite" path="M550 60 L550 610" />
        </circle>

        {/* User label at bottom arrow end */}
        <text x="550" y="642" textAnchor="middle" fontSize="11" opacity="0.8">
          Response delivered to user
        </text>
      </svg>

      <p className="mt-3 text-xs text-gray-600 dark:text-gray-300">
        TravelBuddy routes requests through an orchestrator and a cost/latency policy layer,
        delegating to specialized agents and aggregating tool results into a final response.
      </p>
    </div>
  )
}
