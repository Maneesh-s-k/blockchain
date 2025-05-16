import WalletConnectButton from "../components/WalletConnectButton";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <WalletConnectButton />
      {/* Add dashboard widgets here */}
    </div>
  );
}
