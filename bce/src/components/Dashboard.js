import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const Dashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/sign-in"); // Redirect if not logged in
    }

    // Fetch data logic here, for now let's simulate balance
    setBalance(500); // Example of setting balance
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-6">
      <div className="max-w-lg w-full bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl p-6 text-white">
        
        <h1 className="text-4xl font-extrabold text-center mb-6 tracking-wide">
          Welcome to Your Dashboard
        </h1>

        {/* Balance Display */}
        <div className="mb-6 text-center">
          <p className="text-xl">Your Balance: 
            <span className="font-bold text-green-300 ml-2">{balance} Credits</span>
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/trade")}
            className="px-6 py-2 rounded-lg transition-all bg-purple-600 text-white hover:bg-purple-700 shadow-lg"
          >
            Trade Credits
          </button>
        </div>

        {/* Logout Button */}
        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/sign-in"); // Redirect to sign-in page
            }}
            className="px-6 py-2 rounded-lg transition-all bg-red-600 text-white hover:bg-red-700 shadow-lg"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;