export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-normal text-black">
              Documentation
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Technical documentation, governance structure, and protocol specifications.
            </p>
          </div>

          <div className="space-y-12 pt-12 border-t border-neutral-200">
            <div className="space-y-4">
              <h2 className="text-2xl font-normal text-black">How it works</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  ONE01 Foundation maintains the core protocols that enable coordination
                  between people, needs, and actions. The system operates as a neutral layer
                  that does not compete for attention or extract value from users.
                </p>
                <p>
                  Protocols define rules for interaction, identity management, data privacy,
                  and system transparency. These rules are enforced at the infrastructure level,
                  not through user-facing controls.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-normal text-black">Governance</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  The Foundation is governed by principles, not incentives. Decisions are made
                  through transparent processes that prioritize system integrity and user protection.
                </p>
                <p>
                  Governance proposals are publicly documented, debated, and decided upon through
                  structured processes that prevent capture by any single entity or interest group.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-normal text-black">Protocols</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Core protocols include identity management, data privacy boundaries, transaction
                  verification, and transparency reporting. Each protocol is designed to be minimal,
                  auditable, and resistant to manipulation.
                </p>
                <p>
                  Protocol updates follow a structured process that includes public review, testing,
                  and gradual deployment. Breaking changes are avoided whenever possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

