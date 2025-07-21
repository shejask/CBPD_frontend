import { Button, Input, Modal, Form, Select, DatePicker } from "antd";
import Image from "next/image";

import {
  ImportOutlined,
  UserOutlined,
  FilterOutlined,
  PlusOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import KpiCard from "../../components/dashboard/KpiCard";
import STable from "@/components/dashboard/studentTable";
import { useState } from "react";
import Link from "next/link";
import ImportBulkAndUser from "@/components/ImportBulkAndUser";
import { Tabs } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

function Dashboard() {
  const [uploadModal, setUploadModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterModal, setFilterModal] = useState(false);
  const [filters, setFilters] = useState({});
  const [activeTab, setActiveTab] = useState("1");
  const [form] = Form.useForm();

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // If you want to search as user types, uncomment the line below
    // This will trigger search on every keystroke
    // handleSearch(value);
  };

  const handleFilterSubmit = (values) => {
    console.log("Filter values:", values);

    // Process date ranges to proper format
    const processedFilters = { ...values };

    if (values.dateOfBirth) {
      processedFilters.dateOfBirth = {
        start: values.dateOfBirth[0]?.format("YYYY-MM-DD"),
        end: values.dateOfBirth[1]?.format("YYYY-MM-DD"),
      };
    }

    if (values.joiningDate) {
      processedFilters.joiningDate = {
        start: values.joiningDate[0]?.format("YYYY-MM-DD"),
        end: values.joiningDate[1]?.format("YYYY-MM-DD"),
      };
    }

    setFilters(processedFilters);
    setFilterModal(false);
  };

  const handleFilterReset = () => {
    form.resetFields();
    setFilters({});
    setFilterModal(false);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  // Define tab items
  const tabItems = [
    {
      key: "1",
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
    {
      key: "2",
      label: "Students",
      icon: <UserOutlined />,
    },
  ];

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return <KpiCard />;
      case "2":
        return (
          <div className="flex flex-col gap-3 bg-white p-4 border rounded-3xl">
            <div className="flex items-center justify-between">
              <Input.Search
                size="large"
                placeholder="Search Students"
                className="w-1/3"
                value={searchTerm}
                onChange={handleSearchChange}
                onSearch={handleSearch}
                allowClear
                onClear={() => setSearchTerm("")}
              />
              <div className="flex items-center gap-2 w-1/2 justify-end">
                <Button
                  icon={<FilterOutlined />}
                  iconPosition="start"
                  onClick={() => setFilterModal(true)}
                >
                  Filter
                </Button>
                <Link href={"dashboard/addStudent"}>
                  <Button
                    icon={<PlusOutlined />}
                    type="primary"
                    iconPosition="start"
                  >
                    Add New Student
                  </Button>
                </Link>
              </div>
            </div>
            <STable searchTerm={searchTerm} filters={filters} />
          </div>
        );
      default:
        return <KpiCard />;
    }
  };

  return (
    <div className="w-full px-5 pt-2 pb-10 min-h-screen flex text-black bg-stone-50 items-start justify-center">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Image src="/CBPD_LOGO.png" width={100} height={100} alt="logo" />
              {/* <h1 className="text-2xl font-medium">Welcome Laisha Academy!</h1> */}
            </div>
            <div className="flex items-center gap-4">
              <ImportBulkAndUser />
            </div>
          </div>
          <hr />
        </div>

        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          items={tabItems}
        />

        {renderTabContent()}
      </div>

      {/* Filter Modal */}
      <Modal
        title="Filter Students"
        open={filterModal}
        onCancel={() => setFilterModal(false)}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleFilterSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item name="gender" label="Gender">
              <Select placeholder="Select gender" allowClear>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item name="status" label="Status">
              <Select placeholder="Select status" allowClear>
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
            </Form.Item>

            <Form.Item name="currentCourse" label="Course">
              <Input placeholder="Enter course" />
            </Form.Item>

            <Form.Item name="semester" label="Semester">
              <Input placeholder="Enter semester" />
            </Form.Item>

            <Form.Item name="state" label="State">
              <Input placeholder="Enter state" />
            </Form.Item>

            <Form.Item name="district" label="District">
              <Input placeholder="Enter district" />
            </Form.Item>

            <Form.Item
              name="dateOfBirth"
              label="Date of Birth Range"
              className="col-span-2"
            >
              <RangePicker className="w-full" />
            </Form.Item>

            <Form.Item
              name="joiningDate"
              label="Joining Date Range"
              className="col-span-2"
            >
              <RangePicker className="w-full" />
            </Form.Item>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button onClick={handleFilterReset}>Reset</Button>
            <Button type="primary" htmlType="submit">
              Apply Filters
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Dashboard;
