import axios from "axios";
const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

 export const createItem = async (data) => {
    const response = await axios.post("/items", data, options);
    return response.data;
  };



export const getItems = async () => {
    const response = await axios.get("/items");
    return response.data.items;
  } 

export const updateItems =(id,data) =>{
    const response = axios.put(`/items/${id}`, data, options);
    return response.data;

} 

export const deleteItems = async (id) => {
    const response = await axios.delete(`/items/${id}`);
    return response.data;
  };    