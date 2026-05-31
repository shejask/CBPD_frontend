"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { Plus, Award, Loader2, Calendar } from "lucide-react";

export default function CertificateRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filterProgramme, setFilterProgramme] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setIsLoading(true);
      const orgStr = localStorage.getItem("org");
      if (!orgStr) return;
      const org = JSON.parse(orgStr);
      const orgId = org._id || org.id;

      if (!orgId) return;

      const res = await api.getCertificateRequests(orgId);
      if (res.success) {
        setRequests(res.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch requests", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Under Review":
      case "Under Processing":
      case "Printing in Progress":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Approved":
      case "Completed":
      case "Ready for Dispatch":
      case "Dispatched":
      case "Collected":
        return "bg-green-100 text-green-700 border-green-200";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "Pending": return "Your certificate request has been successfully submitted and is currently pending review.";
      case "Under Review": return "Your certificate request is currently under review by our team.";
      case "Under Processing": return "Your certificate request is currently being processed. Final review is in progress.";
      case "Approved": return "Your certificate request has been approved successfully.";
      case "Printing in Progress": return "Your certificate is currently being prepared for printing.";
      case "Ready for Dispatch": return "Your certificate is ready for dispatch. Expected dispatch date: [DD/MM/YYYY].";
      case "Dispatched": return "Your certificate has been dispatched successfully. Please collect it from your channel partner office.";
      case "Collected": return "Your certificate has been marked as collected successfully.";
      case "Completed": return "Your certificate request has been completed successfully.";
      case "Rejected": return "Unfortunately, your certificate request has been rejected. Please contact support for further details.";
      default: return `Status: ${status}`;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Certificate Request</h1>
            <p className="text-slate-500 mt-1">Manage your certificate printing and dispatch requests.</p>
          </div>
          <Link
            href="/dashboard/certificate-requests/new"
            className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm w-full sm:w-auto justify-center whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Request Certificate Status
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-slate-100">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Search programme..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:bg-white transition-colors text-slate-900"
              value={filterProgramme}
              onChange={(e) => setFilterProgramme(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <select 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:bg-white transition-colors text-slate-700"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Under Review">Under Review</option>
              <option value="Under Processing">Under Processing</option>
              <option value="Approved">Approved</option>
              <option value="Printing in Progress">Printing in Progress</option>
              <option value="Ready for Dispatch">Ready for Dispatch</option>
              <option value="Dispatched">Dispatched</option>
              <option value="Collected">Collected</option>
              <option value="Completed">Completed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="flex-1">
            <input 
              type="date" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-blue focus:bg-white transition-colors text-slate-600"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
                <th className="py-4 px-6">Programme</th>
                <th className="py-4 px-6">Batch No.</th>
                <th className="py-4 px-6">Learners</th>
                <th className="py-4 px-6">Exam Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Message</th>
                <th className="py-4 px-6">Requested On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-brand-blue mx-auto mb-3" />
                    <p className="text-slate-500 font-medium">Loading requests...</p>
                  </td>
                </tr>
              ) : requests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                      <Award className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-slate-900 font-semibold mb-1">No requests found</h3>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto">
                      You haven't made any certificate request yet.
                    </p>
                  </td>
                </tr>
              ) : (() => {
                  const filteredRequests = requests.filter(req => {
                    const matchProgramme = req.programmeName?.toLowerCase().includes(filterProgramme.toLowerCase());
                    const matchStatus = filterStatus ? req.status === filterStatus : true;
                    const matchDate = filterDate ? new Date(req.createdAt).toISOString().split('T')[0] === filterDate : true;
                    return matchProgramme && matchStatus && matchDate;
                  });

                  if (filteredRequests.length === 0) {
                    return (
                      <tr>
                        <td colSpan={7} className="py-12 text-center">
                          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                            <Calendar className="w-8 h-8 text-slate-400" />
                          </div>
                          <h3 className="text-slate-900 font-semibold mb-1">No matching requests</h3>
                          <p className="text-slate-500 text-sm max-w-sm mx-auto">
                            Try adjusting your filters to see more results.
                          </p>
                        </td>
                      </tr>
                    );
                  }

                  return filteredRequests.map((req) => (
                    <tr key={req._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">
                      {req.programmeName}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-sm font-medium border border-slate-200">
                        {req.batchNumber}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium">
                      {req.numberOfLearners}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {new Date(req.examCompletedDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getStatusColor(req.status)}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-slate-600">
                        {getStatusMessage(req.status)}
                      </p>
                    </td>
                    <td className="py-4 px-6 text-slate-500 text-sm">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                  ));
                })()
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
