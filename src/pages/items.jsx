import React from 'react'
import { useState, useEffect } from 'react'
import { getItems, updateItems, deleteItems, createItem } from '../api/items'


export default function Items()  {
    const [items, setItems] = useState()
    const[showForm, setshowForm] = useState(false)
    const[Edit, setEdit] = useState(null)
    const[itemdata, setItemdata] = useState({name:"", price:"", stock:"", tax:""})

    
    useEffect(() => {
        fetchitems();
      }, []);
    
      const fetchitems = async () => {
        const data = await getItems();
        setCustomers(data);
      };
    
      const handleDelete = async (id) => {
        await deleteItems(id);
        setCustomers((prev) => prev.filter((c) => c.id !== id));
      };
    
      const handleEditClick = () => {
        setEdit(cust);
        setFormData({
          name: cust.name,
          email: cust.email,
          phone:cust.phone,
          address: cust.address,
        });
        setModalOpen(true);
      };
    
      const handleAddClick = ( ) =>{
        setEdit(null);
        setshowForm(true)
        setItemdata({name:"", price:"", stock:"", tax:""})
    }
    
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
    <div>
        <button onClick = {handleAddClick} className="mb-4 bg-cyan-700 text-white px-4 py-2 rounded">
            Add Items
        </button>

        <table className=" font-prim border border-separate border-spacing-2 border-gray-500 w-full max-w-4xl">
        <caption className="text-lg font-bold  pb-2">Customer Details</caption>
        <thead>
          <tr>
            <th className="border border-gray-300 p-4">Name</th>
            <th className="border border-gray-300 p-4">Price</th>
            <th className="border border-gray-300 p-4">Stock</th>
            <th className="border border-gray-300 p-4">Tax</th>
            
          </tr>
        </thead>
        <tbody>
          {items.map((cust) => (
            <tr key={cust.id}>
              <td className="border border-gray-300 p-4">{items.name}</td>
              <td className="border border-gray-300 p-4">{items.price}</td>
              <td className="border border-gray-300 p-4">{items.stock}</td>
              <td className="border border-gray-300 p-4">{items.tax}</td>
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


        {showForm && (
        <div className="font-prim fixed inset-0 flex justify-center items-center  bg-black/50 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded shadow w-96 relative">
            <button
              onClick={() => {
                setshowForm(false);
                setEdit(null);
              }}
              className="absolute top-2 right-2 text-xl text-gray-600"
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-4">
              {editing ? "Edit item" : "Add item"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={itemdata.name}
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
            
)}
   
