import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

// Mock ZK proof generation (Placeholder for actual ZK integration)
function generateZKProof(tradeAmount, userSecret) {
  const web3 = new Web3();
  return {
    a: [web3.utils.randomHex(32), web3.utils.randomHex(32)],
    b: [
      [web3.utils.randomHex(32), web3.utils.randomHex(32)], 
      [web3.utils.randomHex(32), web3.utils.randomHex(32)]
    ],
    c: [web3.utils.randomHex(32), web3.utils.randomHex(32)],
    input: [tradeAmount, web3.utils.randomHex(32), web3.utils.randomHex(32)]
  };
}

function TradeCarbonCredits({ userAddress }) {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [ledgerContract, setLedgerContract] = useState(null);

  const [tradeType, setTradeType] = useState('buy');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWeb3(web3Instance);
        } catch (error) {
          console.error("User denied account access");
        }
      }
    };
    initWeb3();
  }, [userAddress]);

  const handleTrade = async () => {
    if (!web3) {
      setError('Web3 not initialized');
      return;
    }
    
    try {
      const tradeAmount = parseInt(amount);
      if (isNaN(tradeAmount) || tradeAmount <= 0) {
        setError('Please enter a valid amount');
        return;
      }

      const userSecret = web3.utils.randomHex(32);
      const zkProof = generateZKProof(tradeAmount, userSecret);

      setError(null);
      alert(`Successfully placed ${tradeType} order for ${tradeAmount} credits`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-6">
      <div className="max-w-lg w-full bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl p-6 text-white">
        
        <h1 className="text-4xl font-extrabold text-center mb-6 tracking-wide">
          Trade Carbon Credits
        </h1>

        {/* Balance Display */}
        <div className="mb-6 text-center">
          <p className="text-xl">Your Balance: 
            <span className="font-bold text-green-300 ml-2">{balance} Credits</span>
          </p>
        </div>

        {/* Trade Type Buttons */}
        <div className="mb-6 flex justify-center space-x-4">
          <button 
            onClick={() => setTradeType('buy')}
            className={`px-6 py-2 rounded-lg transition-all ${
              tradeType === 'buy' 
                ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-800 hover:bg-gray-300'
            }`}
          >
            Buy Credits
          </button>
          <button 
            onClick={() => setTradeType('sell')}
            className={`px-6 py-2 rounded-lg transition-all ${
              tradeType === 'sell' 
                ? 'bg-green-600 text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-800 hover:bg-gray-300'
            }`}
          >
            Sell Credits
          </button>
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Amount of Credits</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Error Message */}
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}

        {/* Submit Button */}
        <button 
          onClick={handleTrade}
          className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all"
        >
          {tradeType === 'buy' ? 'Buy Credits' : 'Sell Credits'}
        </button>

      </div>
    </div>
  );
}

export default TradeCarbonCredits;