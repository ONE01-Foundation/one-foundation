export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-normal text-black">
              Contact
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              For inquiries about the Foundation, governance, or protocol development.
            </p>
          </div>

          <div className="space-y-6 pt-12 border-t border-neutral-200">
            <div className="space-y-2">
              <h2 className="text-xl font-normal text-black">General inquiries</h2>
              <p className="text-neutral-600">
                foundation@one01.org
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-normal text-black">Governance</h2>
              <p className="text-neutral-600">
                governance@one01.org
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-normal text-black">Technical</h2>
              <p className="text-neutral-600">
                technical@one01.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

