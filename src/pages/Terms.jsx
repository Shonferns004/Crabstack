import SEO from '../components/SEO'

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of service for Crabstack website and project engagements."
        path="/terms"
      />
      <section className="min-h-screen bg-black text-white px-6 py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">Terms of Service</h1>
          <p className="text-white/70 leading-relaxed mb-6">
            All project timelines, deliverables, revisions, and payment milestones are defined in written proposals or contracts before execution.
          </p>
          <p className="text-white/70 leading-relaxed mb-6">
            Content and assets provided by clients remain the client&apos;s responsibility. Crabstack retains rights to internal methods, templates, and frameworks unless otherwise agreed.
          </p>
          <p className="text-white/70 leading-relaxed">
            Use of this website implies acceptance of these terms and related policies.
          </p>
        </div>
      </section>
    </>
  )
}

