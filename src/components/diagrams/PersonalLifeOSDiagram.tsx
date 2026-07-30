"use client"

export default function PersonalLifeOSDiagram() {
  const A = "arr-los"

  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
      <svg viewBox="0 0 950 468" className="block w-full" style={{ height: 380 }}>
        <defs>
          <marker id={A} viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
          </marker>
        </defs>

        {/* ── Row 1: User Intent ── */}
        <rect x="250" y="15" width="450" height="50" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.4"/>
        <text x="475" y="38"  textAnchor="middle" fontSize="13" fontWeight="700" fill="#334155">User Intent</text>
        <text x="475" y="56"  textAnchor="middle" fontSize="10" fill="#64748b">task prompt · session context · project state</text>

        {/* Arrow → Agent */}
        <path d="M475 65 L475 107" fill="none" stroke="#334155" strokeWidth="2" markerEnd={`url(#${A})`}/>

        {/* ── Row 2: Claude Code Agent ── */}
        <rect x="10" y="107" width="930" height="55" rx="12" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1.8"/>
        <text x="475" y="132" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0c4a6e">Claude Code Agent</text>
        <text x="475" y="152" textAnchor="middle" fontSize="10" fill="#0c4a6e" opacity="0.8">claude-sonnet-4-6 · autonomous multi-step task execution · agentic reasoning loop</text>

        {/* Fan-out: Agent → 5 capability boxes */}
        <path d="M97  162 L97  215" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>
        <path d="M285 162 L285 215" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>
        <path d="M475 162 L475 215" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>
        <path d="M663 162 L663 215" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>
        <path d="M853 162 L853 215" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>

        {/* ── Row 3: Capability boxes ── */}
        {/* MCP Servers */}
        <rect x="10"  y="215" width="175" height="95" rx="10" fill="#dcfce7" stroke="#86efac" strokeWidth="1.4"/>
        <text x="97"  y="258" textAnchor="middle" fontSize="12" fontWeight="700" fill="#14532d">MCP Servers</text>
        <text x="97"  y="280" textAnchor="middle" fontSize="9"  fill="#1e293b" opacity="0.7">Live tool execution</text>

        {/* Skills */}
        <rect x="198" y="215" width="175" height="95" rx="10" fill="#fef3c7" stroke="#fde68a" strokeWidth="1.4"/>
        <text x="285" y="258" textAnchor="middle" fontSize="12" fontWeight="700" fill="#713f12">Skills</text>
        <text x="285" y="280" textAnchor="middle" fontSize="9"  fill="#1e293b" opacity="0.7">Reusable dev primitives</text>

        {/* Plugins */}
        <rect x="386" y="215" width="175" height="95" rx="10" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.4"/>
        <text x="475" y="258" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7f1d1d">Plugins</text>
        <text x="475" y="280" textAnchor="middle" fontSize="9"  fill="#1e293b" opacity="0.7">Inline AI assistance</text>

        {/* Hooks */}
        <rect x="574" y="215" width="175" height="95" rx="10" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.4"/>
        <text x="663" y="258" textAnchor="middle" fontSize="12" fontWeight="700" fill="#3b0764">Hooks</text>
        <text x="663" y="280" textAnchor="middle" fontSize="9"  fill="#1e293b" opacity="0.7">Automated execution gates</text>

        {/* Memory Files */}
        <rect x="762" y="215" width="178" height="95" rx="10" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.4"/>
        <text x="853" y="258" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c2d12">Memory Files</text>
        <text x="853" y="280" textAnchor="middle" fontSize="9"  fill="#1e293b" opacity="0.7">Persistent context</text>

        {/* Fan-in: capabilities → Output */}
        <path d="M97  310 C 97  355, 475 355, 475 383" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>
        <path d="M285 310 C 285 350, 475 350, 475 383" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>
        <path d="M475 310 L475 383"                    fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>
        <path d="M663 310 C 663 350, 475 350, 475 383" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>
        <path d="M853 310 C 853 355, 475 355, 475 383" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd={`url(#${A})`}/>

        {/* ── Row 4: Output ── */}
        <rect x="10" y="383" width="930" height="68" rx="12" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1.8"/>
        <text x="475" y="409" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0c4a6e">Personal Life OS</text>
        <text x="475" y="428" textAnchor="middle" fontSize="10" fill="#0c4a6e" opacity="0.8">9-domain intelligence dashboard · 7 live integrations · local-first · zero cloud dependency</text>
        <text x="475" y="444" textAnchor="middle" fontSize="9"  fill="#0c4a6e" opacity="0.6">Apple Health · Google Calendar · Canvas LMS · Alpaca Markets · Nutrition · Supplements · Daily Priorities</text>

        {/* Animated particle — flows down through Skills */}
        <circle r="4" fill="#22c55e" opacity="0.85">
          <animateMotion dur="4s" repeatCount="indefinite"
            path="M475 65 L475 134 L285 215 L285 310 L475 383"/>
        </circle>
      </svg>
      <p className="mt-3 text-xs text-gray-600 dark:text-gray-300">
        Personal Life OS is built and maintained through a Claude Code agentic workflow; MCP servers execute live tool calls, skills encode reusable development primitives, hooks enforce session behavior, and memory files persist context across sessions.
      </p>
    </div>
  )
}
