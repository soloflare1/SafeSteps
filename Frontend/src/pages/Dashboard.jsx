import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/api/location"
      );
      setData(res.data);
    };

    fetchData();
  }, []);

  const devices = new Set(data.map(d => d.deviceId)).size;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-3 gap-4">
        
        <div className="bg-[#111A2E] p-5 rounded-xl">
          <h3>Total Devices</h3>
          <p className="text-3xl text-blue-400">{devices}</p>
        </div>

        <div className="bg-[#111A2E] p-5 rounded-xl">
          <h3>Total Records</h3>
          <p className="text-3xl text-green-400">{data.length}</p>
        </div>

        <div className="bg-[#111A2E] p-5 rounded-xl">
          <h3>System Status</h3>
          <p className="text-3xl text-red-400">LIVE</p>
        </div>

      </div>
    </div>
  );
}