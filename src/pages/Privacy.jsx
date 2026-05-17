import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for Crabstack website and contact forms."
        path="/privacy"
      />
      <section className="min-h-screen bg-black text-white px-6 py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">Privacy Policy</h1>
          <p className="text-white/70 leading-relaxed mb-6">
            We collect only the details you submit through forms, including name, email, and project information, to respond to inquiries and deliver requested services.
          </p>
          <p className="text-white/70 leading-relaxed mb-6">
            We do not sell personal information. Data is used for client communication, service delivery, and internal analytics. You may request data removal at any time.
          </p>
          <p className="text-white/70 leading-relaxed">
            For privacy requests, contact us via the details listed on the contact page.
          </p>
        </div>
      </section>
    </>
  )
}

