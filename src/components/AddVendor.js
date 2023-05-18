import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { createVendor } from "../api";
import "../styles.css";
const AddVendor = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await createVendor(values);
      message.success("Vendor created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      // Handle error here (e.g., display an error message)
      message.error("Failed to create vendor.");
    } finally {
      setLoading(false);
    }
  };
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="add-vendor-container">
      <div className="add-vendor-content">
        <h2>Add Vendor</h2>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Vendor Name"
            name="vendorName"
            rules={[
              { required: true, message: "Please enter the vendor name" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bank Account No."
            name="bankAccountNo"
            rules={[
              {
                required: true,
                message: "Please enter the bank account number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bank Name"
            name="bankName"
            rules={[{ required: true, message: "Please enter the bank name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Address Line 1" name="addressLine1">
            <Input />
          </Form.Item>
          <Form.Item label="Address Line 2" name="addressLine2">
            <Input />
          </Form.Item>
          <Form.Item label="City" name="city">
            <Input />
          </Form.Item>
          <Form.Item label="Country" name="country">
            <Input />
          </Form.Item>
          <Form.Item label="Zip Code" name="zipCode">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Add Vendor
            </Button>
            <Button onClick={handleGoBack} style={{ float: "right" }}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddVendor;
