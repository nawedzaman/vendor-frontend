import React from "react";
import "../styles.css";
const VendorItem = ({ vendor, onDelete, onEdit }) => {
  const {
    vendorName,
    bankAccountNo,
    bankName,
    addressLine1,
    addressLine2,
    city,
    country,
    zipCode,
  } = vendor;

  const handleDelete = () => {
    onDelete(vendor._id);
  };

  const handleEdit = () => {
    onEdit(vendor._id);
  };

  return (
    <div>
      <h3>{vendorName}</h3>
      <p>Bank Account No: {bankAccountNo}</p>
      <p>Bank Name: {bankName}</p>
      <p>Address Line 1: {addressLine1}</p>
      <p>Address Line 2: {addressLine2}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>Zip Code: {zipCode}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default VendorItem;
