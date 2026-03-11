import SectionHeading from "@/components/ui/SectionHeading"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

export default function ContactPage() {
  return (
    <section className="space-y-10 max-w-3xl">
      <SectionHeading
        title="Contact"
        subtitle="Let’s talk about AI systems, architecture, or collaboration."
      />

      <Card>
        <p className="text-gray-600">
          I’m open to discussions around Generative AI, system design,
          research collaboration, and engineering roles.
        </p>

        <div className="mt-6 flex gap-3">
          <Button href="mailto:your@email.com">
            Email Me
          </Button>

          <Button href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </Button>
        </div>
      </Card>
    </section>
  )
}
