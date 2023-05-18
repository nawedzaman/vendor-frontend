import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVendorById, updateVendor } from "../api";
import { Form, Input, Button, message } from "antd";
import "../styles.css";
const EditVendor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(null);
  const [form] = Form.useForm();
  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const data = await getVendorById(id);
        setVendor(data);
        form.setFieldsValue(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        // Handle error here (e.g., display an error message)
        message.error("Failed to fetch vendor details.");
      }
    };
    fetchVendor();
  }, [id, form]);

  const handleUpdate = async (values) => {
    try {
      await updateVendor(id, values);
      message.success("Vendor updated successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      // Handle error here (e.g., display an error message)
      message.error("Failed to update vendor.");
    }
  };

  if (!vendor) {
    return <div>Loading...</div>;
  }
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="edit-vendor-container">
      <div className="edit-vendor-content">
        <h2>Edit Vendor</h2>
        <Form
          name="editVendorForm"
          layout="vertical"
          form={form}
          onFinish={handleUpdate}
        >
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
            <Button type="primary" htmlType="submit">
              Update
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

export default EditVendor;
