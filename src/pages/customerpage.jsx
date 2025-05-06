import { useForm } from "react-hook-form";
import { useState } from "react";
import { createCustomer } from "../api/customer"; 

export default function CustomersContent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    try {
      const result = await createCustomer(data);
      console.log("Customer created:", result);
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-gray-100">
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">
        Open Form
      </button>

      {open && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-4">Customer Details</h2>
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: "Name is required" })}
                className="border-2 p-2 rounded-md w-full"
                placeholder="Name"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format"
                  }
                })}
                className="border-2 p-2 rounded-md w-full"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}

              <input
                {...register("phone", {
                  required: "Phone is required",
                  minLength: { value: 10, message: "Minimum 10 digits" },
                  maxLength: { value: 10, message: "Maximum 10 digits" }
                })}
                className="border-2 p-2 rounded-md w-full"
                placeholder="Phone"
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

              <input
                {...register("address", { required: "Address is required" })}
                className="border-2 p-2 rounded-md w-full"
                placeholder="Address"
              />
              {errors.address && <p className="text-red-500">{errors.address.message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
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