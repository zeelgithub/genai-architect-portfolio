"use client"

export default function AutonomousDebuggerArchitectureDiagram() {
  const ARROW_ID = "arrow-debugger"

  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
      <svg viewBox="0 0 1200 720" className="block w-full" style={{ height: 520 }}>
        {/* Arrow marker */}
        <defs>
          <marker
            id={ARROW_ID}
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

        {/* ====== TOP: UI → Model Provider → LangGraph ====== */}
        <rect x="360" y="20" width="480" height="60" rx="12" fill="#eef2f7" stroke="#cbd5e1" />
        <text x="600" y="48" textAnchor="middle" fontSize="14" fontWeight="700">
          User 
        </text>
        <text x="600" y="66" textAnchor="middle" fontSize="11" opacity="0.85">
          Repo URL · Stack trace · Failing tests · Model selection
        </text>

        <rect x="360" y="110" width="480" height="70" rx="12" fill="#e0f2fe" stroke="#bae6fd" />
        <text x="600" y="140" textAnchor="middle" fontSize="14" fontWeight="700">
          Model Provider Layer (Dynamic LLM Selection)
        </text>
        <text x="600" y="162" textAnchor="middle" fontSize="11" opacity="0.85">
          Ollama / OpenAI · API key / base URL · Runtime selection
        </text>

        <rect x="360" y="210" width="480" height="60" rx="12" fill="#dcfce7" stroke="#bbf7d0" />
        <text x="600" y="240" textAnchor="middle" fontSize="14" fontWeight="700">
          LangGraph Engine (StateGraph Orchestrator)
        </text>
        <text x="600" y="258" textAnchor="middle" fontSize="11" opacity="0.85">
          Explicit nodes · edges · bounded loops · deterministic control
        </text>

        {/* Down arrows */}
        {[
          "M600 80 L600 110",
          "M600 180 L600 210",
          "M600 270 L600 300",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#334155"
            strokeWidth="2"
            markerEnd={`url(#${ARROW_ID})`}
            className="flow-line"
          />
        ))}

        {/* ====== EXECUTION GRAPH TITLE ====== */}
        <text x="600" y="330" textAnchor="middle" fontSize="13" fontWeight="700" opacity="0.9">
          Core Execution Graph (LangGraph)
        </text>

        {/* ====== ROW 1 ====== */}
        {/* Input Guardrail */}
        <rect x="70" y="360" width="220" height="70" rx="12" fill="#fee2e2" stroke="#fecaca" />
        <text x="180" y="390" textAnchor="middle" fontSize="13" fontWeight="700">
          Input Guardrail
        </text>
        <text x="180" y="410" textAnchor="middle" fontSize="11" opacity="0.85">
          Validate inputs · sanitize context
        </text>

        {/* Planner */}
        <rect x="320" y="360" width="220" height="70" rx="12" fill="#e0f2fe" stroke="#bae6fd" />
        <text x="430" y="390" textAnchor="middle" fontSize="13" fontWeight="700">
          Planner Agent
        </text>
        <text x="430" y="410" textAnchor="middle" fontSize="11" opacity="0.85">
          Failure → structured debug plan
        </text>

        {/* Log Analyzer */}
        <rect x="570" y="360" width="220" height="70" rx="12" fill="#fef3c7" stroke="#fde68a" />
        <text x="680" y="390" textAnchor="middle" fontSize="13" fontWeight="700">
          Log Analyzer
        </text>
        <text x="680" y="410" textAnchor="middle" fontSize="11" opacity="0.85">
          Error type · signals · hypothesis
        </text>

        {/* Code Navigator */}
        <rect x="820" y="360" width="220" height="70" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="930" y="390" textAnchor="middle" fontSize="13" fontWeight="700">
          Code Navigator
        </text>
        <text x="930" y="410" textAnchor="middle" fontSize="11" opacity="0.85">
          Map error → files / functions
        </text>

        {/* ====== ROW 2 ====== */}
        {/* Fix Generator */}
        <rect x="195" y="470" width="220" height="70" rx="12" fill="#dcfce7" stroke="#bbf7d0" />
        <text x="305" y="500" textAnchor="middle" fontSize="13" fontWeight="700">
          Fix Generator
        </text>
        <text x="305" y="520" textAnchor="middle" fontSize="11" opacity="0.85">
          Minimal patch (schema-driven)
        </text>

        {/* Patch Guardrail */}
        <rect x="445" y="470" width="220" height="70" rx="12" fill="#fee2e2" stroke="#fecaca" />
        <text x="555" y="500" textAnchor="middle" fontSize="13" fontWeight="700">
          Patch Guardrail
        </text>
        <text x="555" y="520" textAnchor="middle" fontSize="11" opacity="0.85">
          Block unsafe / risky changes
        </text>

        {/* Test Runner */}
        <rect x="695" y="470" width="220" height="70" rx="12" fill="#ede9fe" stroke="#ddd6fe" />
        <text x="805" y="500" textAnchor="middle" fontSize="13" fontWeight="700">
          Test Runner
        </text>
        <text x="805" y="520" textAnchor="middle" fontSize="11" opacity="0.85">
          Run tests · simulate CI
        </text>

        {/* Evaluator */}
        <rect x="945" y="470" width="220" height="70" rx="12" fill="#fef3c7" stroke="#fde68a" />
        <text x="1055" y="500" textAnchor="middle" fontSize="13" fontWeight="700">
          Evaluator (Control Brain)
        </text>
        <text x="1055" y="520" textAnchor="middle" fontSize="11" opacity="0.85">
          Decide: success / retry / escalate
        </text>

        {/* ===== END node ===== */}
        <rect x="990" y="590" width="160" height="60" rx="12" fill="#dcfce7" stroke="#bbf7d0" />
        <text x="1070" y="625" textAnchor="middle" fontSize="13" fontWeight="700">
          SUCCESS → END
        </text>

        {/* ====== FLOW ARROWS ====== */}
        {[
          // Row 1: left to right
          "M290 395 L320 395",
          "M540 395 L570 395",
          "M790 395 L820 395",

          // Down to row 2 (Code Navigator → Fix Generator)
          "M930 430 C 930 455, 600 455, 415 470",

          // Row 2: left to right
          "M415 505 L445 505",
          "M665 505 L695 505",
          "M915 505 L945 505",

          // Evaluator → End
          "M1055 540 L1070 590",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#334155"
            strokeWidth="2"
            markerEnd={`url(#${ARROW_ID})`}
            className="flow-line"
          />
        ))}

        {/* ====== RETRY LOOP (Evaluator → Fix Generator) ====== */}
        <path
          d="M 1055 470 C 1055 400, 520 400, 305 470"
          fill="none"
          stroke="#334155"
          strokeWidth="2"
          markerEnd={`url(#${ARROW_ID})`}
          className="flow-line"
          opacity="0.9"
        />
        <text x="740" y="395" textAnchor="middle" fontSize="11" opacity="0.85">
          
        </text>

        {/* ====== Moving data packet (main pipeline) ====== */}
        <circle r="4" fill="#334155" opacity="0.9">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M 180 395 L 930 395 C 930 455, 600 455, 305 470 L 1055 505"
          />
        </circle>

        {/* ====== Tools + State (bottom notes) ====== */}
        <rect x="70" y="590" width="420" height="80" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="280" y="622" textAnchor="middle" fontSize="13" fontWeight="700">
          Tools Layer (executes side effects)
        </text>
        <text x="280" y="644" textAnchor="middle" fontSize="11" opacity="0.85">
          clone_repo · list_repo_files · patcher · tester · (optional) create_pull_request
        </text>

        <rect x="520" y="590" width="440" height="80" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="740" y="622" textAnchor="middle" fontSize="13" fontWeight="700">
          Shared State (DebugState)
        </text>
        <text x="740" y="644" textAnchor="middle" fontSize="11" opacity="0.85">
          repo_url · stack_trace · analysis_results · code_analysis · proposed_fix · test_results
        </text>
      </svg>

      <p className="mt-3 text-xs text-gray-600 dark:text-gray-300">
        Autonomous Debugger Assistant routes failures through a LangGraph state machine with guardrails, tool-isolated execution, bounded retry loops, and evaluator-controlled termination.
      </p>
    </div>
  )
}