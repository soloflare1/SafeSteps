export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#111A2E] text-white p-5">
      <h2 className="text-xl font-bold mb-8">🛡 SafeSteps</h2>

      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Live Map</li>
        <li className="hover:text-blue-400 cursor-pointer">Devices</li>
        <li className="hover:text-blue-400 cursor-pointer">Alerts</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}