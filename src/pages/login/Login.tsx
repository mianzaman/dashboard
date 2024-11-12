import  { useState } from "react";
import img from "../../assets/signup-img.jpg"
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    Name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, phone }); // Include phone number in form submission
    alert("Form submitted successfully!");
    // Reset the form
    setFormData({
      Name: "",
      password: "",
      
    });
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 h-full">
      <div className="flex w-full max-w-4xl shadow-lg  rounded-lg overflow-visible">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
          }}
        >
          {/* Image here */}
        </div>
        <div className="w-full lg:w-1/2 " style={{
          padding: "6rem 2rem",
          }}>
          <div className="max-w-md mx-auto">
            <h2 className="bg text-2xl font-semibold text-center text-gray-900">
              Welcome to Garnish!
            </h2>
            <p className="text-gray-600 text-center">
              Login to your account
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label className="sr-only">User Name</label>
                  <input
                    name="Name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="User Name"
                    value={formData.Name}
                    onChange={handleChange}
                  />
                </div>  
                <div>
                  <label className="sr-only">Password</label>
                  <input
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <Link to={"/"} >
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login 
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
