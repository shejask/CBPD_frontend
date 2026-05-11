export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Institution Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back to your CBPD dashboard.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder Stat Cards */}
        {[
          { label: "Total Students", value: "0", color: "bg-blue-50 text-blue-600" },
          { label: "Pending Approvals", value: "0", color: "bg-amber-50 text-amber-600" },
          { label: "Certificates Issued", value: "0", color: "bg-green-50 text-green-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
            <span className="text-slate-500 font-medium">{stat.label}</span>
            <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
        </div>
        <div className="p-12 text-center">
          <p className="text-slate-500">No recent activity found.</p>
        </div>
      </div>
    </div>
  );
}
