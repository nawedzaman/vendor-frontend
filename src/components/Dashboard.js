import React, { useEffect, useState } from "react";
import { getVendors, deleteVendor } from "../api";
import { Table, Button, Popconfirm, message } from "antd";
import { DeleteFilled, EditTwoTone } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";
const Dashboard = () => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const data = await getVendors();
      setVendors(data);
    } catch (error) {
      console.error(error);
      // Handle error here (e.g., display an error message)
    }
  };

  const handleDelete = async (vendorId) => {
    try {
      await deleteVendor(vendorId);
      setVendors((prevVendors) =>
        prevVendors.filter((vendor) => vendor._id !== vendorId)
      );
      message.success("Vendor deleted successfully!");
    } catch (error) {
      console.error(error);
      // Handle error here (e.g., display an error message)
      message.error("Failed to delete vendor.");
    }
  };

  const columns = [
    {
      title: "Vendor Name",
      dataIndex: "vendorName",
      key: "vendorName",
    },
    {
      title: "Bank Account No.",
      dataIndex: "bankAccountNo",
      key: "bankAccountNo",
    },
    {
      title: "Bank Name",
      dataIndex: "bankName",
      key: "bankName",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, vendor) => (
        <div>
          <EditTwoTone
            style={{ fontSize: "150%", marginRight: "20px" }}
            onClick={() => handleEdit(vendor._id)}
          />
          <Popconfirm
            title="Are you sure you want to delete this vendor?"
            onConfirm={() => handleDelete(vendor._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteFilled style={{ fontSize: "150%" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];
  const navigate = useNavigate();
  const handleEdit = (vendorId) => {
    navigate(`/vendors/${vendorId}/edit`);
  };

  return (
    <div class="dashboard-container">
      <h2>Vendor Dashboard</h2>
      <div className="add-vendor-button">
        <Button type="primary">
          <Link to="/vendors/add">Add Vendor</Link>
        </Button>
      </div>
      <Table dataSource={vendors} columns={columns} />
    </div>
  );
};

export default Dashboard;
