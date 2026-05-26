"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { Loader2, Users, Clock, Inbox, Search, CheckCircle, XCircle, FileText } from "lucide-react";

interface StatisticsData {
  overview: {
    totalStudents: number;
    activeStudents: number;
    inactiveStudents: number;
    activationRate: string;
    certificateSubmitted?: number;
    underReview?: number;
    approved?: number;
    rejected?: number;
  };
  recent: {
    students: {
      _id: string;
      fullName: string;
      admissionNumber: string;
      currentCourse: string;
      createdAt: string;
    }[];
    certificateRequests?: {
      _id: string;
      programmeName: string;
      batchNumber: string;
      numberOfLearners: number;
      status: string;
      createdAt: string;
    }[];
  };
}

export default function DashboardPage() {
  const [stats, setStats] = useState<StatisticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const orgString = localStorage.getItem("org");
        if (!orgString) return;
        const org = JSON.parse(orgString);
        
        const response = await api.getInstitutionStatistics(org._id);
        if (response.success && response.data) {
          setStats(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch statistics", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 text-brand-blue animate-spin" />
      </div>
    );
  }

  const statCards = [
    { 
      label: "Total Learners", 
      value: stats?.overview.totalStudents || 0, 
      description: "Total learner records added.",
      color: "bg-blue-50 text-blue-600 border-blue-200",
      icon: <Users className="w-5 h-5" /> 
    },
    { 
      label: "Certificate Submitted", 
      value: stats?.overview.certificateSubmitted || 0, 
      description: "Submitted for certification review.",
      color: "bg-orange-50 text-orange-600 border-orange-200",
      icon: <Inbox className="w-5 h-5" />
    },
    { 
      label: "Approved", 
      value: stats?.overview.approved || 0, 
      description: "Approved and certified learners.",
      color: "bg-green-50 text-green-600 border-green-200",
      icon: <CheckCircle className="w-5 h-5" />
    },
    { 
      label: "Rejected", 
      value: stats?.overview.rejected || 0, 
      description: "Rejected certificate request.",
      color: "bg-red-50 text-red-600 border-red-200",
      icon: <XCircle className="w-5 h-5" />
    },
    { 
      label: "Under Review", 
      value: stats?.overview.underReview || 0, 
      description: "Undergoing quality assurance review.",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      icon: <Search className="w-5 h-5" />
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {statCards.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-lg ${stat.color} border`}>
                {stat.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{stat.label}</h3>
            </div>
            <div className="text-3xl font-black text-slate-800">
              {stat.value}
            </div>
            <p className="text-slate-500 text-xs">{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Learners */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-blue" />
            <h2 className="text-lg font-bold text-slate-900">Recent Learners</h2>
          </div>
          
          {stats?.recent?.students && stats.recent.students.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="px-4 py-3 font-semibold">Name / Adm No</th>
                    <th className="px-4 py-3 font-semibold">Course</th>
                    <th className="px-4 py-3 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {stats.recent.students.map((student) => (
                    <tr key={student._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-slate-900 text-sm">{student.fullName}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{student.admissionNumber}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-slate-700 text-sm truncate max-w-[150px]" title={student.currentCourse}>{student.currentCourse}</p>
                      </td>
                      <td className="px-4 py-3 text-slate-500 text-xs">
                        {new Date(student.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-slate-500">No learners added yet.</p>
            </div>
          )}
        </div>

        {/* Recent Requested Certificates */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-blue" />
            <h2 className="text-lg font-bold text-slate-900">Recent Certificates Requested</h2>
          </div>
          
          {stats?.recent?.certificateRequests && stats.recent.certificateRequests.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="px-4 py-3 font-semibold">Programme</th>
                    <th className="px-4 py-3 font-semibold">Learners</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {stats.recent.certificateRequests.map((request) => (
                    <tr key={request._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-slate-900 text-sm truncate max-w-[150px]" title={request.programmeName}>{request.programmeName}</p>
                        <p className="text-xs text-slate-500 mt-0.5">Batch {request.batchNumber}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md text-xs font-semibold border border-blue-100">
                          {request.numberOfLearners}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span 
                          title={getStatusMessage(request.status)}
                          className={`px-2 py-1 rounded text-xs font-medium cursor-help ${
                            request.status === "Approved" || request.status === "Completed" ? "bg-green-100 text-green-700" :
                            request.status === "Rejected" ? "bg-red-100 text-red-700" :
                            "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs text-slate-600 line-clamp-2" title={getStatusMessage(request.status)}>
                          {getStatusMessage(request.status)}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-slate-500">No certificate request found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
