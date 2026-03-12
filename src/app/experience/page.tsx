import Card from "@/components/ui/Card"
import FadeIn from "@/components/ui/FadeIn"

export default function ExperiencePage() {
  return (
    <>
      {/* Background */}
      <div
        className="fixed inset-0 bg-gradient-to-b
          from-white via-gray-50 to-gray-100
          dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
          -z-10"
      />

      <section className="py-16 flex justify-center">
        <div className="max-w-4xl w-full space-y-12">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
              Experience
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
              Building production-grade AI systems at scale.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-10 border-l-2 border-gray-300 dark:border-gray-700 pl-8">

            {[
              {
                title: "Generative AI Developer",
                org: "Deloitte Consulting · Pennsylvania, United States",
                period: "Oct 2023 – Present",
                description:
                  "Leading the design and deployment of production-grade generative AI systems for federal healthcare clients, focusing on reliability, scalability, and real-world impact.",
                details: [
                  "Designed and deployed multi-agent LLM orchestration systems for NIH, CDC, and VBA.",
                  "Delivered AI-driven product development supporting new CDC contracts.",
                  "Built monitoring, logging, and alerting for production AI services.",
                  "Reduced service latency by 76% through async workflows and token optimization.",
                  "Owned CI/CD pipelines and operational readiness.",
                  "Implemented LLMOps / MLOps pipelines with evaluation and retraining hooks.",
                  "Enhanced distributed LLM workflows using MCP.",
                ],
                skills: [
                  "LLMs",
                  "Agents",
                  "RAG",
                  "LLMOps",
                  "MLOps",
                  "AWS",
                  "Azure",
                  "Distributed Systems",
                ],
              },
              {
                title: "Data Analyst",
                org: "Eminence Technology Solutions · New Jersey, United States",
                period: "Dec 2022 – Jun 2023",
                description:
                  "Focused on building and optimizing large-scale data pipelines supporting AI and ML workflows in healthcare.",
                details: [
                  "Built pipelines processing ~6 TB of healthcare data.",
                  "Automated ETL workflows across Spark clusters.",
                  "Streamlined data pipelines for faster model development.",
                ],
                skills: ["Data Pipelines", "Spark", "ETL", "Cloud", "Healthcare Data"],
              },
              {
                title: "Machine Learning Intern",
                org: "Fractal Analytics · New York, United States",
                period: "Jun 2022 – Dec 2022",
                description:
                  "Worked on deploying and optimizing production ML models with monitoring and evaluation.",
                details: [
                  "Deployed production ML models with monitoring.",
                  "Built a graph-based recommendation system.",
                ],
                skills: ["Machine Learning", "Model Monitoring", "Graph Systems"],
              },
            ].map((exp, idx) => (
              <div key={idx} className="relative">

                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-gray-700 dark:bg-gray-300 rounded-full -left-2 top-5" />

                <FadeIn>
                  <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">
                          {exp.org}
                        </p>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 italic">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      {exp.details.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs
                            bg-gray-100 dark:bg-gray-800
                            text-gray-700 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                </FadeIn>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}