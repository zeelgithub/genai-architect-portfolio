import SectionHeading from "@/components/ui/SectionHeading"
import Card from "@/components/ui/Card"
import FadeIn from "@/components/ui/FadeIn"
export default function ExperiencePage() {
  return (
    <>
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 -z-10" />

      <section className="min-h-screen py-24 flex justify-center">
        <div className="max-w-4xl w-full space-y-20">

          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900">
              Experience
            </h1>
            <p className="text-xl text-gray-700 mt-2">
              Building production-grade AI systems at scale.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-16 border-l-2 border-gray-300 pl-8">

            {/* Experience Item Template */}
            {[
              {
                title: "Generative AI Developer",
                org: "Deloitte Consulting · Pennsylvania, United States",
                period: "Oct 2023 – Present",
                description:
                  "Leading the design and deployment of production-grade generative AI systems for federal healthcare clients, focusing on reliability, scalability, and real-world impact.",
                details: [
                  "Designed and deployed multi-agent LLM orchestration systems for NIH, CDC, and VBA, contributing to measurable revenue growth.",
                  "Delivered AI-driven product development supporting new CDC contracts, including solutions pivotal to high-value engagements.",
                  "Built monitoring, logging, and alerting for production AI services, improving observability and reducing incident resolution time.",
                  "Reduced service latency by 76% through asynchronous workflows, prompt caching, and token optimization.",
                  "Owned CI/CD pipelines, automated testing, and operational readiness for AI services in production.",
                  "Implemented LLMOps / MLOps pipelines with evaluation, performance tracking, and retraining hooks.",
                  "Enhanced distributed LLM workflows using Model Context Protocol (MCP) integrated with cloud infrastructure.",
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
                  "Focused on building and optimizing large-scale data pipelines supporting AI and machine learning workflows in healthcare domains.",
                details: [
                  "Built and optimized AI/ML pipelines processing ~6 TB of healthcare data.",
                  "Automated ETL workflows across Spark clusters, increasing reliability and reducing manual overhead.",
                  "Streamlined data pipelines to accelerate downstream model development.",
                ],
                skills: ["Data Pipelines", "Spark", "ETL", "Cloud", "Healthcare Data"],
              },
              {
                title: "Machine Learning Intern",
                org: "Fractal Analytics · New York, United States",
                period: "Jun 2022 – Dec 2022",
                description:
                  "Worked on deploying and optimizing production machine learning models with strong emphasis on monitoring and evaluation.",
                details: [
                  "Deployed production ML models with continuous monitoring and performance evaluation.",
                  "Built a graph-based recommendation system, improving accuracy through iterative optimization.",
                ],
                skills: ["Machine Learning", "Model Monitoring", "Graph Systems"],
              },
            ].map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-2 top-5" />

                {/* Card */}
                <FadeIn>
                <Card className="bg-white p-6 border border-gray-200 shadow-lg hover:shadow-2xl rounded-xl transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 italic">
                        {exp.org}
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 italic">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Detail bullets */}
                  <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-2">
                    {exp.details.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>

                  {/* Skills as chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs"
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
