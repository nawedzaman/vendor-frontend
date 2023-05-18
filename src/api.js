const BASE_URL = "https://vendor-server.onrender.com/vendors"; // Replace with your server URL

// Fetch all vendors
export const getVendors = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log(data);
  return data;
};
// Fetch  vendor by id
export const getVendorById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
};
// Create a new vendor
export const createVendor = async (vendor) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vendor),
  });
  const data = await response.json();
  return data;
};

// Update a vendor
export const updateVendor = async (id, vendor) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vendor),
  });
  const data = await response.json();
  return data;
};

// Delete a vendor
export const deleteVendor = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
