export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-semibold">About</h1>

      <p className="text-gray-600 dark:text-gray-300">
        I am an Applied AI Engineer at Deloitte, where I work on cloud-based,
        multi-agent large language model (LLM) systems for federal healthcare
        and accelerated clients. My focus is on taking generative AI systems
        from experimentation into reliable, production-ready deployments.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        In practice, this involves designing agentic workflows using LangGraph
        and LangChain, integrating retrieval-augmented generation (RAG), and
        building end-to-end pipelines with strong MLOps, evaluation, and
        observability foundations. The systems I work on operate in regulated
        environments where correctness, traceability, and reliability are
        first-class concerns.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        Alongside industry work, I have a strong academic background in deep
        learning and applied machine learning. I have published peer-reviewed
        research with Springer on medical image classification using fine-tuned
        deep learning models, and have experience deploying machine learning
        models beyond research prototypes.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        I am also the founder of the Data Science Club at Charusat University,
        where I led initiatives around applied machine learning, peer learning,
        and hands-on projects. This experience shaped how I approach AI today:
        as an engineering discipline grounded in theory, systems thinking, and
        real-world constraints.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        This portfolio highlights selected projects, architectures, and
        research that reflect how I design and reason about AI systems in
        practice.
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
