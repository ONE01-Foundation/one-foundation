export default function DashboardPage() {
  // Mock data
  const metrics = {
    totalUsers: "12,847",
    totalOrganizations: "342",
    totalTransactions: "1,234,567",
    totalValueFlow: "$2.4M",
  };

  const events = [
    { time: "2 hours ago", event: "Protocol update v1.2.3 deployed" },
    { time: "5 hours ago", event: "New organization registered: Acme Corp" },
    { time: "1 day ago", event: "System health check completed" },
    { time: "1 day ago", event: "Governance proposal #42 submitted" },
    { time: "2 days ago", event: "Privacy audit completed" },
    { time: "3 days ago", event: "Protocol update v1.2.2 deployed" },
    { time: "4 days ago", event: "New organization registered: TechCo" },
    { time: "5 days ago", event: "System maintenance window completed" },
    { time: "6 days ago", event: "Governance proposal #41 approved" },
    { time: "1 week ago", event: "Monthly transparency report published" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-normal text-black">
              Public Dashboard
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Real-time system metrics and transparency data.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-neutral-200 p-6 space-y-2">
              <div className="text-sm text-neutral-500">Total Users</div>
              <div className="text-3xl font-normal text-black">{metrics.totalUsers}</div>
            </div>
            <div className="border border-neutral-200 p-6 space-y-2">
              <div className="text-sm text-neutral-500">Total Organizations</div>
              <div className="text-3xl font-normal text-black">{metrics.totalOrganizations}</div>
            </div>
            <div className="border border-neutral-200 p-6 space-y-2">
              <div className="text-sm text-neutral-500">Total Transactions</div>
              <div className="text-3xl font-normal text-black">{metrics.totalTransactions}</div>
            </div>
            <div className="border border-neutral-200 p-6 space-y-2">
              <div className="text-sm text-neutral-500">Total Value Flow</div>
              <div className="text-3xl font-normal text-black">{metrics.totalValueFlow}</div>
            </div>
          </div>

          {/* Events Feed */}
          <div className="space-y-6 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl md:text-3xl font-normal text-black">
              Latest Events
            </h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="border border-neutral-200 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                >
                  <div className="text-neutral-700">{event.event}</div>
                  <div className="text-sm text-neutral-500">{event.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

