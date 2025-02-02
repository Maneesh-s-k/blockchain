// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Label, Spinner, TextInput } from "flowbite-react";

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // Handle the sign-in logic here (API call, etc.)
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       setError("Something went wrong, please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
//       <div className="flex flex-col lg:flex-row flex-1 items-center justify-center py-12 lg:py-20">
//         {/* Left Section */}
//         <div className="flex-1 p-6 lg:p-12 flex flex-col items-center justify-center">
//           <div className="text-center">
//             <Link to="/" className="font-extrabold text-5xl">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
//                 Carbon
//               </span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-400">
//                 Trading
//               </span>
//             </Link>
//             <p className="mt-4 text-xl font-light">trading platform for carbon credits</p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex-1 p-6 lg:p-12 flex flex-col items-center justify-center">
//           <form className="w-full max-w-md space-y-6" onSubmit={onSubmit}>
//             <div className="flex flex-col">
//               <Label value="Email" className="text-lg font-semibold text-gray-200" />
//               <TextInput
//                 type="email"
//                 placeholder="name@company.com"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             <div className="flex flex-col">
//               <Label value="Password" className="text-lg font-semibold text-gray-200" />
//               <TextInput
//                 type="password"
//                 placeholder="Enter your password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 mt-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
//               disabled={loading}
//             >
//               {loading ? (
//                 <div className="flex justify-center">
//                   <Spinner />
//                   <span className="pl-3">Loading...</span>
//                 </div>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//           </form>

//           <div className="flex gap-2 text-sm mt-6 text-gray-200">
//             <span>Don't have an account?</span>
//             <Link to="/sign-up" className="text-yellow-300 hover:text-yellow-500">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { Label, Spinner, TextInput } from "flowbite-react";

const SignIn = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("user"); // Check stored user data
    if (user) {
      navigate("/dashboard"); // Redirect to Dashboard
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Mock authentication (Replace with real API login logic)
      localStorage.setItem("user", JSON.stringify({ email: formData.email }));
      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      setLoading(false);
      setError("Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="flex flex-col lg:flex-row flex-1 items-center justify-center py-12 lg:py-20">
        <div className="flex-1 p-6 lg:p-12 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold">Sign In</h1>
          <form className="w-full max-w-md space-y-6" onSubmit={onSubmit}>
            <div className="flex flex-col">
              <Label value="Email" className="text-lg font-semibold text-gray-200" />
              <TextInput
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <Label value="Password" className="text-lg font-semibold text-gray-200" />
              <TextInput
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <button type="submit" className="w-full py-3 mt-4 bg-yellow-500 text-white rounded-lg">
              {loading ? <Spinner /> : "Sign In"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;