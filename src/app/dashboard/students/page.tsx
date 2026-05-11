"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Filter, MoreVertical, Loader2 } from "lucide-react";
import { api } from "@/lib/api";

interface Student {
  _id: string;
  fullName: string;
  gender: string;
  phoneNumber: string;
  currentCourse: string;
  department: string;
  semester: string;
  admissionNumber: string;
  state: string;
  district: string;
  isActive: boolean;
  passportPhoto?: string;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      setError("");
      const orgStr = localStorage.getItem("org");
      if (!orgStr) {
        setError("Institution profile not found. Please log in again.");
        return;
      }
      const org = JSON.parse(orgStr);
      const response = await api.getStudents(org._id);
      
      if (response.success && response.data) {
        setStudents(response.data);
      } else {
        setStudents(response.students || []); // Fallback depending on API response structure
      }
    } catch (err: any) {
      console.error(err);
      setError("Failed to load students.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredStudents = students.filter(student => 
    student.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.admissionNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.currentCourse.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Students</h1>
          <p className="text-slate-500 mt-1">Manage all your enrolled students.</p>
        </div>
        <Link 
          href="/dashboard/students/add" 
          className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2.5 rounded-xl transition-colors shadow-sm font-medium whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          Add New Student
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search by name, admission no, or course..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-medium">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
          {error}
        </div>
      )}

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Course Details</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <Loader2 className="w-8 h-8 text-brand-blue animate-spin mx-auto mb-3" />
                    <p className="text-slate-500 font-medium">Loading students...</p>
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="text-slate-900 font-medium text-lg mb-1">No students found</p>
                    <p className="text-slate-500">Get started by adding a new student to your institution.</p>
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {student.passportPhoto ? (
                          <img src={student.passportPhoto} alt={student.fullName} className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold shadow-sm">
                            {student.fullName.charAt(0)}
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-slate-900">{student.fullName}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{student.admissionNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">{student.currentCourse}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{student.department} • {student.semester}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">{student.phoneNumber}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{student.gender}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">{student.state}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{student.district}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${student.isActive ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                        {student.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
