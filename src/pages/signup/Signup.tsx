import  { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import img from "../../assets/signup-img.jpg"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    officeName: "",
    officeCode: "",
  });

  const [phone, setPhone] = useState(""); // For phone number state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setPhone(value); // Update phone number with country code
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, phone }); // Include phone number in form submission
    alert("Form submitted successfully!");
    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      whatsappNumber: "",
      officeName: "",
      officeCode: "",
    });
    setPhone(""); // Reset the phone number input
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
        <div className="w-full lg:w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <h2 className="bg text-2xl font-semibold text-center text-gray-900">
              Welcome to Garnish!
            </h2>
            <p className="text-gray-600 text-center">
              Please register your account
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label className="sr-only">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only">Email (for invoices)</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                     text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="Email (for invoices)"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only">
                    WhatsApp Number Confirmation
                  </label>
                  
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={handlePhoneChange}
                    
                    inputClass="w-full appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 
                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                    placeholder="WhatsApp Number"
                  />
                </div>
                <div>
                  <label className="sr-only">Office Name</label>
                  <input
                    name="officeName"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Office Name"
                    value={formData.officeName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only">Office Code</label>
                  <input
                    name="officeCode"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Office Code"
                    value={formData.officeCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
