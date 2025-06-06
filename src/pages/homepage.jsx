import { useEffect, useState } from "react";
import {
  getCustomers,
  deleteCustomer,
  updateCustomer,
  createCustomer,
} from "../api/customer";

export default function Homepage() {
  const [customers, setCustomers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null for add mode
  const [formData, setFormData] = useState({ name: "", email: "", phone:"", address: "" });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  const handleEditClick = (cust) => {
    setEditing(cust);
    setFormData({
      name: cust.name,
      email: cust.email,
      phone:cust.phone,
      address: cust.address,
    });
    setModalOpen(true);
  };

  const handleAddClick = () => {
    setEditing(null); // we're adding, not edititing
    setFormData({ name: "", email: "",phone:"", address: "" });
    setModalOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updateCustomer(editing.id, formData);
    } else {
      await createCustomer(formData);
    }
    setModalOpen(false);
    setEditing(null);
    fetchCustomers();
  };

  return (
    <div className="font-prim flex flex-col  text-white items-center h-full  w-full pt-40">
      <button
        onClick={handleAddClick}
        className="mb-4 bg-cyan-700  px-4 py-2 rounded"
      >
        Add Customer
      </button>

      <table className=" font-prim border border-separate border-spacing-2 border-gray-500 w-full max-w-4xl">
        <caption className="text-lg font-bold  pb-2">Customer Details</caption>
        <thead>
          <tr>
            <th className="border border-gray-300 p-4">Name</th>
            <th className="border border-gray-300 p-4">Email</th>
            <th className="border border-gray-300 p-4">Phone</th>
            <th className="border border-gray-300 p-4">Address</th>
            <th className="border border-gray-300 p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust.id}>
              <td className="border border-gray-300 p-4">{cust.name}</td>
              <td className="border border-gray-300 p-4">{cust.email}</td>
              <td className="border border-gray-300 p-4">{cust.phone}</td>
              <td className="border border-gray-300 p-4">{cust.address}</td>
              <td className="border border-gray-300 p-4 space-x-2">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => handleEditClick(cust)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(cust.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Dialog */}
      {modalOpen && (
        <div className="font-prim fixed inset-0 flex justify-center items-center  bg-black/50 bg-opacity-50 z-10">
          <div className="bg-black p-6 rounded shadow w-96 relative">
            <button
              onClick={() => {
                setModalOpen(false);
                setEditing(null);
              }}
              className="absolute top-2 right-2 text-xl text-gray-600"
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-4">
              {editing ? "Edit Customer" : "Add Customer"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleFormChange}
                required
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                {editing ? "Update" : "Add"}
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-full mt-2 border py-2 rounded"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
