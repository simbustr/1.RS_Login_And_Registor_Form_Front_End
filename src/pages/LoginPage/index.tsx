import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginData = {
  Email: string;
  Password: string;
};

const LoginPage = () => {
  const url = "http://localhost:1100/auth/login";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data: LoginData = {
      Email: formData.email,
      Password: formData.password,
    };

    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Login successful");
        navigate("/dashboard");
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div className=" flex flex-row justify-center items-center h-screen">
        <div className="space-y-5 bg-gray-300 p-5 w-[400px]">
          <h1 className="text-2xl font-bold mb-4">Login Form</h1>

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mr-2 px-3 py-2 border border-gray-400 outline-none"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="password"
                className="mr-2 px-3 py-2 border border-gray-400 outline-none"
              />

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-none"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
