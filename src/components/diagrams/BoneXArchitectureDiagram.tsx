"use client"

export default function BoneXArchitectureDiagram() {
  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
      <svg
        viewBox="0 0 900 700"
        className="block w-full"
        style={{ height: 560 }}
      >
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

        {/* ===== Input ===== */}
        <rect x="320" y="20" width="260" height="60" rx="12" fill="#eef2f7" stroke="#cbd5e1" />
        <text x="450" y="48" textAnchor="middle" fontSize="14" fontWeight="600">
          Input X ray Image
        </text>
        <text x="450" y="66" textAnchor="middle" fontSize="11">
          224 × 224 × 3
        </text>

        {/* ===== Preprocessing ===== */}
        <rect x="300" y="110" width="300" height="90" rx="12" fill="#e0f2fe" stroke="#bae6fd" />
        <text x="450" y="138" textAnchor="middle" fontSize="14" fontWeight="600">
          Data Preprocessing
        </text>
        <text x="450" y="158" textAnchor="middle" fontSize="11">
          Resize · Normalization · Augmentation
        </text>

        {/* ===== Backbone ===== */}
        <rect x="200" y="240" width="500" height="140" rx="14" fill="#dcfce7" stroke="#bbf7d0" />
        <text x="450" y="268" textAnchor="middle" fontSize="15" fontWeight="600">
          Pre trained MobileNet (ImageNet)
        </text>

        {/* Frozen layers */}
        <rect x="220" y="292" width="220" height="60" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="330" y="320" textAnchor="middle" fontSize="12" fontWeight="600">
          Frozen Layers
        </text>
        <text x="330" y="338" textAnchor="middle" fontSize="11">
          Feature Extraction
        </text>

        {/* Trainable layers */}
        <rect x="460" y="292" width="220" height="60" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="570" y="320" textAnchor="middle" fontSize="12" fontWeight="600">
          Fine Tuned Layers
        </text>
        <text x="570" y="338" textAnchor="middle" fontSize="11">
          Last N Conv Blocks
        </text>

        {/* ===== GAP ===== */}
        <rect x="320" y="410" width="260" height="50" rx="12" fill="#fef3c7" stroke="#fde68a" />
        <text x="450" y="440" textAnchor="middle" fontSize="13" fontWeight="600">
          Global Average Pooling
        </text>

        {/* ===== Dense ===== */}
        <rect x="320" y="480" width="260" height="50" rx="12" fill="#ede9fe" stroke="#ddd6fe" />
        <text x="450" y="510" textAnchor="middle" fontSize="13" fontWeight="600">
          Dense (ReLU) + Dropout
        </text>

        {/* ===== Output ===== */}
        <rect x="250" y="560" width="400" height="90" rx="14" fill="#fee2e2" stroke="#fecaca" />
        <text x="450" y="590" textAnchor="middle" fontSize="14" fontWeight="600">
          Output Layer (Softmax)
        </text>
        <text x="450" y="612" textAnchor="middle" fontSize="11">
          Elbow · Finger · Forearm · Hand
        </text>
        <text x="450" y="630" textAnchor="middle" fontSize="11">
          Humerus · Shoulder · Wrist
        </text>

        {/* ===== Animated flow arrows ===== */}
        {[
          ["M450 80 L450 110"],
          ["M450 200 L450 240"],
          ["M450 380 L450 410"],
          ["M450 460 L450 480"],
          ["M450 530 L450 560"],
        ].map((d, i) => (
          <path
            key={i}
            d={d[0]}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            markerEnd="url(#arrow)"
            className="flow-line"
          />
        ))}

        {/* Moving data packet */}
        <circle r="4" fill="currentColor">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M450 90 L450 610"
          />
        </circle>
      </svg>

      <p className="mt-3 text-xs text-gray-600 dark:text-gray-300">
        End to end fracture classification pipeline using fine tuned MobileNet with
        frozen feature extraction layers and task specific adaptation for multi bone
        fracture detection.
      </p>
    </div>
  )
}
