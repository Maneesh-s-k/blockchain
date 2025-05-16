import { useState } from "react";
import { ethers } from "ethers";

export default function WalletConnectButton() {
  const [account, setAccount] = useState("");

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } else {
      alert("Please install MetaMask!");
    }
  }

  return (
    <button
      className="px-4 py-2 bg-green-600 text-white rounded"
      onClick={connectWallet}
    >
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
    </button>
  );
}
