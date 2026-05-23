"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { Loader2, Users, UserCheck, UserX, Clock } from "lucide-react";

interface StatisticsData {
  overview: {
    totalStudents: number;
    activeStudents: number;
    inactiveStudents: number;
    activationRate: string;
  };
  recent: {
    students: {
      _id: string;
      fullName: string;
      admissionNumber: string;
      currentCourse: string;
      createdAt: string;
    }[];
  };
}

export default function DashboardPage() {
  const [stats, setStats] = useState<StatisticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      label: "Total Students", 
      value: stats?.overview.totalStudents || 0, 
      color: "bg-blue-50 text-blue-600",
      icon: <Users className="w-6 h-6" /> 
    },
    { 
      label: "Active Students", 
      value: stats?.overview.activeStudents || 0, 
      color: "bg-green-50 text-green-600",
      icon: <UserCheck className="w-6 h-6" />
    },
    { 
      label: "Inactive Students", 
      value: stats?.overview.inactiveStudents || 0, 
      color: "bg-amber-50 text-amber-600",
      icon: <UserX className="w-6 h-6" />
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Institution Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back to your CBPD dashboard.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 flex items-center gap-2">
          <Clock className="w-5 h-5 text-brand-blue" />
          <h2 className="text-lg font-bold text-slate-900">Recently Added Students</h2>
        </div>
        
        {stats?.recent?.students && stats.recent.students.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="px-6 py-3 font-semibold">Student Name</th>
                  <th className="px-6 py-3 font-semibold">Admission No</th>
                  <th className="px-6 py-3 font-semibold">Course</th>
                  <th className="px-6 py-3 font-semibold">Date Added</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stats.recent.students.map((student) => (
                  <tr key={student._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900">{student.fullName}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md text-sm font-medium">
                        {student.admissionNumber}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-slate-700">{student.currentCourse}</p>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">
                      {new Date(student.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <p className="text-slate-500">No students added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
