export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 space-y-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
                    About
        </h1>

      <p className="text-gray-600 dark:text-gray-300">
        I am an Applied AI Engineer at Deloitte, where I work on cloud-based multi-agent large language model (LLM) systems for federal healthcare and enterprise clients. My work focuses on designing and deploying generative AI systems that operate in real production environments.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        In practice, this involves designing agentic workflows using LangGraph and LangChain, integrating retrieval-augmented generation (RAG), and developing end-to-end AI systems from model development to production deployment across cloud platforms.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
       Alongside industry work, I have a strong academic foundation in deep learning and applied machine learning. I have published peer-reviewed research with Springer on medical image classification using fine-tuned deep learning models and have hands-on experience deploying machine learning systems beyond research prototypes.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        I am also the founder of the Data Science Club at Charusat University, where I led initiatives in applied machine learning, collaborative learning, and hands-on technical projects. These experiences shaped how I approach AI today: as an engineering discipline grounded in theory, systems thinking, and real-world constraints.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        This portfolio highlights selected projects, architectures, and research that showcase how I design, implement, and reason about production-grade AI systems.
      </p>

      <p className="text-sm text-gray-500">
        Founder, Data Science Club — Charusat University ·{" "}
        <a
          href="https://datascienceclub.charusat.ac.in/"
          className="underline hover:text-gray-700 dark:hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Club website
        </a>
      </p>
    </section>
  );
}
