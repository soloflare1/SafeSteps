import { useEffect, useState } from "react";
import axios from "axios";

export default function MapView() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/api/location"
      );
      setLocations(res.data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🗺 Live Data</h2>

      {locations.map((loc, i) => (
        <div key={i}>
          {loc.deviceId} → {loc.lat}, {loc.lng}
        </div>
      ))}
    </div>
  );
}