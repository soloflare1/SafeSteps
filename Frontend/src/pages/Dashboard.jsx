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

  return (
    <div>
      <h2>📊 Dashboard</h2>

      <p>Total Records: {data.length}</p>
      <p>Devices: {new Set(data.map(d => d.deviceId)).size}</p>
    </div>
  );
}