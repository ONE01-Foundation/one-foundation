export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-normal text-black">
              What it is
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              ONE01 Foundation is the standards and governance layer for the ONE01 ecosystem.
              It exists to keep the system open, safe, auditable, and consistent.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              The Foundation defines protocols, naming rules, privacy boundaries, and public transparency metrics.
              It does not operate applications or control user behavior.
            </p>
          </div>

          <div className="space-y-6 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl md:text-3xl font-normal text-black">
              Mission
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              To maintain a neutral, transparent infrastructure that enables human coordination
              without compromising privacy, autonomy, or long-term stability.
            </p>
          </div>

          <div className="space-y-6 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl md:text-3xl font-normal text-black">
              Principles
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>Simplicity over complexity</p>
              <p>Transparency over persuasion</p>
              <p>Human agency over automation</p>
              <p>Privacy by default</p>
              <p>Minimal interfaces, meaningful actions</p>
              <p>Systems should reduce noise, not add to it</p>
              <p>No ownership of user data</p>
              <p>No behavioral manipulation</p>
              <p>No extraction-based business model</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

