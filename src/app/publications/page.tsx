import SectionHeading from "@/components/ui/SectionHeading"
import Card from "@/components/ui/Card"

export default function PublicationsPage() {
  return (
    <section className="space-y-12 max-w-4xl mx-auto px-6 py-10">
      <SectionHeading
        title="Publications"
       
      />

      {/* ================= Peer-Reviewed ================= */}
      <div className="space-y-4">
       
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
            Publications
        </h1>

        <Card>
          <div className="space-y-4">
            <h3 className="text-lg font-medium leading-snug">
              Classification of Choroidal Neovascularization (CNV) from Optical
              Coherence Tomography (OCT) Images Using Efficient Fine-Tuned ResNet
              and DenseNet Deep Learning Models
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Age-related macular degeneration (AMD) is a macular degenerative
              disease and a leading cause of blindness worldwide, often associated
              with choroidal neovascularization (CNV). This study focuses on the
              classification of CNV from Optical Coherence Tomography (OCT) images
              using efficient fine-tuned ResNet and DenseNet deep learning models.
              The proposed approach aims to accurately identify CNV to support
              early diagnosis and treatment. Model performance is evaluated and
              compared to determine the most effective architecture for CNV
              classification, contributing toward more reliable and efficient
              AI-assisted diagnostic tools in ophthalmology.
            </p>

            <p className="text-sm text-gray-500">
              <span className="font-medium">Venue:</span> Springer — Intelligent
              Computing / Artificial Intelligence (Book Chapter)
            </p>

            <div className="pt-2">
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-99-3758-5_42"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View publication →
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* ================= Preprints / Technical Reports ================= */}
      <div className="space-y-4">
       

        <Card>
          <div className="space-y-4">
            <h3 className="text-lg font-medium leading-snug">
              Agent-Based Research Workflows for Evidence-Grounded Analysis
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              This technical report explores agent-based orchestration for automated
              research analysis, emphasizing evidence grounding, structured outputs,
              and iterative refinement. The workflow is designed to support
              reproducibility, critical review, and human-in-the-loop validation
              in research and applied AI systems.
            </p>

            <p className="text-sm text-gray-500">
              <span className="font-medium">Status:</span> Technical report / preprint
            </p>

            <div className="pt-2">
              <a
                href="https://drive.google.com/drive/folders/1TNROXNaQ7P2tDCxVcYGGsVD9Ymmow2Xj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View paper →
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
