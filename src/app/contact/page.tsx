import SectionHeading from "@/components/ui/SectionHeading"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

export default function ContactPage() {
  return (
    <section className="space-y-10 max-w-3xl">
      <SectionHeading
        title="Contact"
        subtitle="Let’s collaborate on building intelligent solutions that matter."
      />

      <Card>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Interested in AI systems and scalable architectures. Let’s connect.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Button
  href="https://mail.google.com/mail/?view=cm&fs=1&to=zeelamrutiya045@gmail.com&su=Portfolio%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            >
            Email Me
        </Button>

          
        <Button
            href="https://www.linkedin.com/in/zeel-amrutiya-5a03b0203/"
            target="_blank"
            rel="noopener noreferrer"
            >
            LinkedIn
        </Button>

        </div>
      </Card>
    </section>
  )
}
