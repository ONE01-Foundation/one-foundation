import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Headline */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-normal text-black leading-tight">
            ONE01 Foundation
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            The standards and governance layer for the ONE01 ecosystem.
          </p>
        </div>
      </section>

      {/* Subheadline */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-neutral-700 leading-relaxed">
            We exist to keep the system open, safe, auditable, and consistent.
            We define protocols, naming rules, privacy boundaries, and public transparency metrics.
          </p>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="border border-neutral-200 p-8 space-y-4">
              <h2 className="text-xl font-normal text-black">Standards</h2>
              <p className="text-neutral-600 leading-relaxed">
                We define and maintain the core protocols that ensure interoperability and consistency across the ecosystem.
              </p>
            </div>
            <div className="border border-neutral-200 p-8 space-y-4">
              <h2 className="text-xl font-normal text-black">Governance</h2>
              <p className="text-neutral-600 leading-relaxed">
                We establish principles and rules that protect users, preserve privacy, and maintain system integrity.
              </p>
            </div>
            <div className="border border-neutral-200 p-8 space-y-4">
              <h2 className="text-xl font-normal text-black">Transparency</h2>
              <p className="text-neutral-600 leading-relaxed">
                We provide public visibility into system metrics, protocol updates, and governance decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-3xl font-normal text-black text-center">
            How it works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="text-sm text-neutral-500">1</div>
              <h3 className="text-lg font-normal text-black">Define protocols</h3>
              <p className="text-neutral-600 leading-relaxed">
                Establish rules for interaction and coordination.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-neutral-500">2</div>
              <h3 className="text-lg font-normal text-black">Enforce boundaries</h3>
              <p className="text-neutral-600 leading-relaxed">
                Protect privacy and prevent data extraction.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-neutral-500">3</div>
              <h3 className="text-lg font-normal text-black">Monitor activity</h3>
              <p className="text-neutral-600 leading-relaxed">
                Track aggregate metrics and system health.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-neutral-500">4</div>
              <h3 className="text-lg font-normal text-black">Publish transparency</h3>
              <p className="text-neutral-600 leading-relaxed">
                Make system data publicly accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency block */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-normal text-black">
            Transparency
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            View real-time system metrics, protocol updates, and governance activity.
          </p>
          <div className="pt-6">
            <Link
              href="/dashboard"
              className="inline-block border border-neutral-300 px-8 py-3 text-neutral-700 hover:border-neutral-600 hover:text-black transition-colors"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
