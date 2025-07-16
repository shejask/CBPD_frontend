import React, { useEffect, useState } from "react";
import {
  Space,
  Table,
  message,
  Button,
  Dropdown,
  Modal,
  Typography,
  Divider,
  Tag,
  Avatar,
  Tooltip,
  Card,
  Badge,
  Empty,
  Spin,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  ExportOutlined,
  CheckCircleOutlined,
  StopOutlined,
  DeleteFilled,
  ExclamationCircleOutlined,
  UserOutlined,
  PhoneOutlined,
  BookOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import institutionApi from "@/lib/api/institutionApi";

const { Text, Title } = Typography;
const { confirm } = Modal;

const STable = ({ searchTerm, filters = {} }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [bulkLoading, setBulkLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} students`,
  });

  const fetchStudents = async (page = 1, limit = 10) => {
    const id = localStorage.getItem("id");
    if (!id) return message.error("No institution ID found");

    setLoading(true);
    try {
      const response = await institutionApi.getAllStudents(id);

      if (response.success && Array.isArray(response.data.data)) {
        const formattedData = response.data.data.map((student) => ({
          key: student._id,
          fullname: student.fullName,
          status: student.isActive ? "Active" : "Inactive",
          course: student.currentCourse,
          semester: student.semester,
          phoneNumber: student.phoneNumber,
          gender: student.gender,
          state: student.state,
          district: student.district,
          dateOfBirth: student.dateOfBirth,
          joiningDate: student.joiningDate,
          isActive: student.isActive,
        }));

        setAllStudents(formattedData);
        setStudents(formattedData);
        setPagination((prev) => ({
          ...prev,
          total: formattedData.length,
        }));
      } else {
        message.error("Unexpected response format");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      message.error("Error fetching student data");
    } finally {
      setLoading(false);
    }
  };

  const searchAndFilterStudents = async (
    searchQuery = "",
    filterParams = {}
  ) => {
    const id = localStorage.getItem("id");
    if (!id) return message.error("No institution ID found");

    setLoading(true);
    try {
      // If no search query and no filters, show all students
      if (!searchQuery.trim() && Object.keys(filterParams).length === 0) {
        setStudents(allStudents);
        setPagination((prev) => ({
          ...prev,
          total: allStudents.length,
        }));
        setLoading(false);
        return;
      }

      let filteredStudents = allStudents;

      // Apply search filter
      if (searchQuery.trim()) {
        filteredStudents = filteredStudents.filter(
          (student) =>
            student.fullname
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            student.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.phoneNumber.includes(searchQuery)
        );
      }

      // Apply other filters
      if (Object.keys(filterParams).length > 0) {
        filteredStudents = filteredStudents.filter((student) => {
          let matches = true;

          if (filterParams.gender && student.gender !== filterParams.gender) {
            matches = false;
          }

          if (filterParams.status) {
            const isActive = filterParams.status === "active";
            if ((student.status === "Active") !== isActive) {
              matches = false;
            }
          }

          if (
            filterParams.currentCourse &&
            !student.course
              .toLowerCase()
              .includes(filterParams.currentCourse.toLowerCase())
          ) {
            matches = false;
          }

          if (
            filterParams.semester &&
            !student.semester
              .toLowerCase()
              .includes(filterParams.semester.toLowerCase())
          ) {
            matches = false;
          }

          if (
            filterParams.state &&
            !student.state
              .toLowerCase()
              .includes(filterParams.state.toLowerCase())
          ) {
            matches = false;
          }

          if (
            filterParams.district &&
            !student.district
              .toLowerCase()
              .includes(filterParams.district.toLowerCase())
          ) {
            matches = false;
          }

          if (
            filterParams.dateOfBirth &&
            filterParams.dateOfBirth.start &&
            filterParams.dateOfBirth.end
          ) {
            const studentDOB = new Date(student.dateOfBirth);
            const startDate = new Date(filterParams.dateOfBirth.start);
            const endDate = new Date(filterParams.dateOfBirth.end);

            if (studentDOB < startDate || studentDOB > endDate) {
              matches = false;
            }
          }

          if (
            filterParams.joiningDate &&
            filterParams.joiningDate.start &&
            filterParams.joiningDate.end
          ) {
            const studentJoiningDate = new Date(student.joiningDate);
            const startDate = new Date(filterParams.joiningDate.start);
            const endDate = new Date(filterParams.joiningDate.end);

            if (
              studentJoiningDate < startDate ||
              studentJoiningDate > endDate
            ) {
              matches = false;
            }
          }

          return matches;
        });
      }

      setStudents(filteredStudents);
      setPagination((prev) => ({
        ...prev,
        total: filteredStudents.length,
        current: 1,
      }));
    } catch (error) {
      console.error("Search/Filter error:", error);
      message.error("Error filtering students");
    } finally {
      setLoading(false);
    }
  };

  // Bulk Actions API calls
  const performBulkAction = async (action, studentIds) => {
    const institutionId = localStorage.getItem("id");
    if (!institutionId) {
      message.error("No institution ID found");
      return;
    }

    setBulkLoading(true);
    try {
      const response = await institutionApi.bulkStudentAction(
        institutionId,
        action,
        studentIds
      );

      if (response.success) {
        message.success(
          response.message || `Bulk ${action} completed successfully`
        );

        // Refresh the student list
        await fetchStudents();

        // Clear selection
        setSelectedRowKeys([]);
      } else {
        message.error(response.error || `Failed to ${action} students`);
      }
    } catch (error) {
      console.error(`Bulk ${action} error:`, error);
      message.error(`Error performing ${action} action`);
    } finally {
      setBulkLoading(false);
    }
  };

  const exportStudents = async (format = "csv") => {
    const institutionId = localStorage.getItem("id");
    if (!institutionId) {
      message.error("No institution ID found");
      return;
    }

    setBulkLoading(true);
    try {
      const response = await institutionApi.exportStudents(
        institutionId,
        format
      );

      if (response.success) {
        // Create and trigger download
        const blob = new Blob([response.data], {
          type: format === "csv" ? "text/csv" : "application/json",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `students_export_${
          new Date().toISOString().split("T")[0]
        }.${format}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        message.success("Students exported successfully");
      } else {
        message.error("Failed to export students");
      }
    } catch (error) {
      console.error("Export error:", error);
      message.error("Error exporting students");
    } finally {
      setBulkLoading(false);
    }
  };

  // Confirmation dialogs
  const showActivateConfirm = () => {
    const selectedStudents = students.filter((s) =>
      selectedRowKeys.includes(s.key)
    );
    const inactiveStudents = selectedStudents.filter((s) => !s.isActive);

    if (inactiveStudents.length === 0) {
      message.info("All selected students are already active");
      return;
    }

    confirm({
      title: (
        <div className="flex items-center gap-2">
          <CheckCircleOutlined style={{ color: "#52c41a" }} />
          <span>Activate Students</span>
        </div>
      ),
      width: 500,
      content: (
        <div className="mt-4">
          <p className="mb-4">
            Are you sure you want to activate{" "}
            <Text strong>{inactiveStudents.length}</Text> student(s)?
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <Text type="secondary">
              These students will regain access to the system.
            </Text>
          </div>
          <div className="max-h-32 overflow-y-auto">
            <Space wrap>
              {inactiveStudents.map((student) => (
                <Tag key={student.key} color="green">
                  {student.fullname}
                </Tag>
              ))}
            </Space>
          </div>
        </div>
      ),
      okText: "Activate Students",
      okType: "primary",
      cancelText: "Cancel",
      onOk() {
        performBulkAction("activate", selectedRowKeys);
      },
    });
  };

  const showDeactivateConfirm = () => {
    const selectedStudents = students.filter((s) =>
      selectedRowKeys.includes(s.key)
    );
    const activeStudents = selectedStudents.filter((s) => s.isActive);

    if (activeStudents.length === 0) {
      message.info("All selected students are already inactive");
      return;
    }

    confirm({
      title: (
        <div className="flex items-center gap-2">
          <StopOutlined style={{ color: "#faad14" }} />
          <span>Deactivate Students</span>
        </div>
      ),
      width: 500,
      content: (
        <div className="mt-4">
          <p className="mb-4">
            Are you sure you want to deactivate{" "}
            <Text strong>{activeStudents.length}</Text> student(s)?
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <Text type="secondary">
              Deactivated students will no longer have access to the system.
            </Text>
          </div>
          <div className="max-h-32 overflow-y-auto">
            <Space wrap>
              {activeStudents.map((student) => (
                <Tag key={student.key} color="orange">
                  {student.fullname}
                </Tag>
              ))}
            </Space>
          </div>
        </div>
      ),
      okText: "Deactivate Students",
      okType: "default",
      cancelText: "Cancel",
      onOk() {
        performBulkAction("deactivate", selectedRowKeys);
      },
    });
  };

  const showDeleteConfirm = () => {
    const selectedStudents = students.filter((s) =>
      selectedRowKeys.includes(s.key)
    );

    confirm({
      title: (
        <div className="flex items-center gap-2">
          <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />
          <span>Delete Students</span>
        </div>
      ),
      width: 500,
      content: (
        <div className="mt-4">
          <p className="mb-4">
            Are you sure you want to delete{" "}
            <Text strong>{selectedStudents.length}</Text> student(s)?
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <Text type="danger">
              ⚠️ This action cannot be undone. Students will be permanently
              removed from the system.
            </Text>
          </div>
          <div className="max-h-32 overflow-y-auto">
            <Space wrap>
              {selectedStudents.map((student) => (
                <Tag key={student.key} color="red">
                  {student.fullname}
                </Tag>
              ))}
            </Space>
          </div>
        </div>
      ),
      okText: "Delete Students",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        performBulkAction("delete", selectedRowKeys);
      },
    });
  };

  const showExportConfirm = () => {
    confirm({
      title: (
        <div className="flex items-center gap-2">
          <ExportOutlined style={{ color: "#1890ff" }} />
          <span>Export Students Data</span>
        </div>
      ),
      width: 450,
      content: (
        <div className="mt-4">
          <p className="mb-4">Export all students data to CSV format?</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <Text type="secondary">
              📊 This will download a CSV file containing all student
              information with today's date.
            </Text>
          </div>
        </div>
      ),
      okText: "Export CSV",
      okType: "primary",
      cancelText: "Cancel",
      onOk() {
        exportStudents("csv");
      },
    });
  };

  const bulkActionItems = [
    {
      key: "activate",
      label: (
        <div className="flex items-center gap-2">
          <CheckCircleOutlined style={{ color: "#52c41a" }} />
          <span>Activate Selected</span>
        </div>
      ),
      onClick: showActivateConfirm,
    },
    {
      key: "deactivate",
      label: (
        <div className="flex items-center gap-2">
          <StopOutlined style={{ color: "#faad14" }} />
          <span>Deactivate Selected</span>
        </div>
      ),
      onClick: showDeactivateConfirm,
    },
    {
      key: "delete",
      label: (
        <div className="flex items-center gap-2">
          <DeleteFilled style={{ color: "#ff4d4f" }} />
          <span>Delete Selected</span>
        </div>
      ),
      onClick: showDeleteConfirm,
      danger: true,
    },
    {
      type: "divider",
    },
    {
      key: "export",
      label: (
        <div className="flex items-center gap-2">
          <DownloadOutlined style={{ color: "#1890ff" }} />
          <span>Export All Data</span>
        </div>
      ),
      onClick: showExportConfirm,
    },
  ];

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    if (allStudents.length > 0) {
      searchAndFilterStudents(searchTerm, filters);
    }
  }, [searchTerm, filters, allStudents]);

  const handleTableChange = (paginationInfo) => {
    setPagination(paginationInfo);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      {
        key: "all",
        text: "Select All",
        onSelect: (changableRowKeys) => {
          setSelectedRowKeys(changableRowKeys);
        },
      },
      {
        key: "invert",
        text: "Invert Selection",
        onSelect: (changableRowKeys) => {
          setSelectedRowKeys(changableRowKeys);
        },
      },
      {
        key: "none",
        text: "Clear Selection",
        onSelect: () => {
          setSelectedRowKeys([]);
        },
      },
    ],
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const columns = [
    {
      title: "Student",
      dataIndex: "fullname",
      key: "fullname",
      fixed: "left",
      width: 200,
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar
            size={40}
            style={{
              backgroundColor: record.isActive ? "#1890ff" : "#d9d9d9",
              color: record.isActive ? "#fff" : "#666",
            }}
          >
            {getInitials(text)}
          </Avatar>
          <div>
            <div className="font-medium text-gray-900">{text}</div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <PhoneOutlined className="text-xs" />
              {record.phoneNumber}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (text, record) => (
        <Badge
          status={record.isActive ? "success" : "error"}
          text={
            <span
              className={`font-medium ${
                record.isActive ? "text-green-600" : "text-red-600"
              }`}
            >
              {text}
            </span>
          }
        />
      ),
    },
    {
      title: "Academic Info",
      key: "academic",
      width: 200,
      render: (_, record) => (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BookOutlined className="text-blue-500 text-sm" />
            <span className="font-medium">{record.course}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarOutlined className="text-orange-500 text-sm" />
            <span className="text-sm text-gray-600">
              Semester {record.semester}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Location",
      key: "location",
      width: 150,
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <EnvironmentOutlined className="text-red-500 text-sm" />
          <div>
            <div className="font-medium">{record.district}</div>
            <div className="text-sm text-gray-500">{record.state}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
      width: 80,
      render: (gender) => (
        <Tag
          color={
            gender === "Male"
              ? "blue"
              : gender === "Female"
              ? "pink"
              : "default"
          }
        >
          {gender}
        </Tag>
      ),
    },
    {
      title: "Joining Date",
      key: "joiningDate",
      dataIndex: "joiningDate",
      width: 120,
      render: (date) => (
        <span className="text-sm text-gray-600">{formatDate(date)}</span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 80,
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "edit",
                label: (
                  <Link href={`/dashboard/editStudent/${record.key}`}>
                    <div className="flex items-center gap-2">
                      <EditOutlined />
                      <span>Edit</span>
                    </div>
                  </Link>
                ),
              },
            ],
          }}
          trigger={["click"]}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            size="small"
            className="hover:bg-gray-100"
          />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {/* Enhanced Bulk Actions Bar */}
      {selectedRowKeys.length > 0 && (
        <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <TeamOutlined className="text-blue-600" />
              </div>
              <div>
                <Text strong className="text-blue-800">
                  {selectedRowKeys.length} student
                  {selectedRowKeys.length !== 1 ? "s" : ""} selected
                </Text>
                <div className="text-sm text-blue-600">
                  Choose an action to perform on selected students
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Dropdown
                menu={{
                  items: bulkActionItems,
                }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Button
                  type="primary"
                  icon={<MoreOutlined />}
                  loading={bulkLoading}
                  size="large"
                >
                  Bulk Actions
                </Button>
              </Dropdown>
              <Button
                type="default"
                onClick={() => setSelectedRowKeys([])}
                size="large"
              >
                Clear Selection
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Enhanced Table */}
      <Card className="shadow-sm">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={students}
          loading={loading || bulkLoading}
          pagination={pagination}
          onChange={handleTableChange}
          scroll={{ x: 1000 }}
          className="custom-table"
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <div className="text-center py-8">
                    <UserOutlined className="text-4xl text-gray-300 mb-4" />
                    <p className="text-gray-500">No students found</p>
                    <p className="text-sm text-gray-400">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                }
              />
            ),
          }}
        />
      </Card>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-table .ant-table-thead > tr > th {
          background-color: #fafafa;
          border-bottom: 2px solid #e8e8e8;
          font-weight: 600;
          color: #262626;
        }

        .custom-table .ant-table-tbody > tr:hover > td {
          background-color: #f5f5f5;
        }

        .custom-table .ant-table-tbody > tr.ant-table-row-selected > td {
          background-color: #e6f7ff;
        }

        .custom-table .ant-table-tbody > tr.ant-table-row-selected:hover > td {
          background-color: #d1ebff;
        }
      `}</style>
    </div>
  );
};

export default STable;
