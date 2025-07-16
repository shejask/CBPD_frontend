import React, { useEffect, useState } from "react";
import { PiUsersThree } from "react-icons/pi";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import {
  Users,
  BookOpen,
  TrendingUp,
  MapPin,
  Calendar,
  UserCheck,
} from "lucide-react";
import { institutionApi } from "@/lib/api/institutionApi"; // Update this import path

function StatisticsCard({ title, value, icon, color, trend, subtitle }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
          <div className={`text-2xl ${color.replace("bg-", "text-")}`}>
            {icon}
          </div>
        </div>
        {trend && (
          <div className="flex items-center space-x-1 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">{trend}</span>
          </div>
        )}
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-800 mb-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
}

function ProgressBar({ label, value, total, color }) {
  const percentage = (value / total) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">
          {value}/{total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function DemographicsChart({ data, title, icon }) {
  const total = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="p-2 bg-blue-100 rounded-lg mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = (item.count / total) * 100;
          const colors = [
            "bg-blue-500",
            "bg-green-500",
            "bg-purple-500",
            "bg-orange-500",
            "bg-pink-500",
          ];

          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-4 h-4 rounded-full ${
                    colors[index % colors.length]
                  }`}
                ></div>
                <span className="text-sm font-medium text-gray-700">
                  {item._id}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {percentage.toFixed(1)}%
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  {item.count}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecentStudentsTable({ students }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Recent Students</h3>
        <UserCheck className="w-6 h-6 text-blue-500" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Name
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Course
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Admission No.
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Joined
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {student.fullName.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-800">
                      {student.fullName}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {student.currentCourse}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {student.admissionNumber}
                </td>
                <td className="py-3 px-4 text-gray-500">
                  {formatDate(student.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdvancedStatistics() {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await institutionApi.getStatistics(
          localStorage.getItem("id")
        );
        console.log(response.data);

        if (response.success) {
          setStatsData(response.data.data);
          console.log(response.data);
        } else {
          setError(response.message || "Failed to fetch statistics");
        }
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setError("An error occurred while fetching statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading statistics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!statsData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No data available</p>
      </div>
    );
  }

  const { overview, demographics, academic, recent, organization } = statsData;

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {organization.name} - Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive overview of student statistics and institutional
            performance
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatisticsCard
            title="Total Students"
            value={overview.totalStudents.toLocaleString()}
            icon={<PiUsersThree />}
            color="bg-blue-500"
            trend="+12%"
            subtitle="All registered students"
          />
          <StatisticsCard
            title="Active Students"
            value={overview.activeStudents.toLocaleString()}
            icon={<RiGraduationCapLine />}
            color="bg-green-500"
            trend="+8%"
            subtitle={`${overview.activationRate}% activation rate`}
          />
          <StatisticsCard
            title="Departments"
            value={academic.departments.length}
            icon={<BookOpen />}
            color="bg-purple-500"
            subtitle="Academic departments"
          />
          <StatisticsCard
            title="Inactive Students"
            value={overview.inactiveStudents.toLocaleString()}
            icon={<GoEyeClosed />}
            color="bg-orange-500"
            subtitle="Requiring attention"
          />
        </div>

        {/* Demographics and Academic Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <DemographicsChart
            data={demographics.gender}
            title="Gender Distribution"
            icon={<Users className="w-5 h-5 text-blue-500" />}
          />
          <DemographicsChart
            data={academic.departments}
            title="Department Enrollment"
            icon={<BookOpen className="w-5 h-5 text-green-500" />}
          />
          <DemographicsChart
            data={demographics.states}
            title="State Distribution"
            icon={<MapPin className="w-5 h-5 text-purple-500" />}
          />
        </div>

        {/* Academic Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Course Enrollment
            </h3>
            <div className="space-y-4">
              {academic.courses.map((course, index) => (
                <ProgressBar
                  key={course._id}
                  label={course._id}
                  value={course.count}
                  total={overview.totalStudents}
                  color={
                    ["bg-blue-500", "bg-green-500", "bg-purple-500"][index % 3]
                  }
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Year Level Distribution
            </h3>
            <div className="space-y-4">
              {academic.semesters.map((semester, index) => (
                <ProgressBar
                  key={semester._id}
                  label={semester._id}
                  value={semester.count}
                  total={overview.totalStudents}
                  color={
                    ["bg-indigo-500", "bg-pink-500", "bg-teal-500"][index % 3]
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Students */}
        <div className="mb-8">
          <RecentStudentsTable students={recent.students} />
        </div>

        {/* Age Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DemographicsChart
            data={demographics.age}
            title="Age Distribution"
            icon={<Calendar className="w-5 h-5 text-orange-500" />}
          />

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Monthly Trends
            </h3>
            <div className="space-y-4">
              {statsData.trends.monthlyRegistrations.map((month, index) => (
                <div
                  key={month.month}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-gray-700">
                      {new Date(month.month).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-800">
                      {month.count}
                    </span>
                    <p className="text-sm text-gray-500">registrations</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedStatistics;
