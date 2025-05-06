// src/api/customers.js
import axios from "axios";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const createCustomer = async (data) => {
  const response = await axios.post("/customers", data, options);
  return response.data;
};

export const getCustomers = async () => {
  const response = await axios.get("/customers");
  return response.data.customers;
};

export const deleteCustomer = async (id) => {
  const response = await axios.delete(`/customers/${id}`, options);
  return response.data;
};

export const updateCustomer = async (id, data) => {
  const response = await axios.put(`/customers/${id}`, data, options);
  return response.data;
};
