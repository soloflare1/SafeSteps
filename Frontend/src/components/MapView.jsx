import { useEffect, useState } from "react";
import axios from "axios";

export default function MapView() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL + "/api/location"
        );

        // 🔥 keep only last 20 records (clean UI)
        setLocations(res.data.slice(-20));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    // optional auto refresh (real-time like)
    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🟢 Live GPS Data</h2>

      {locations.length === 0 ? (
        <p>No data available</p>
      ) : (
        locations
          .slice()
          .reverse()
          .map((loc, i) => (
            <div
              key={i}
              style={{
                padding: "8px",
                marginBottom: "6px",
                background: "#111A2E",
                color: "white",
                borderRadius: "6px",
              }}
            >
              <b>{loc.deviceId}</b> → {loc.lat}, {loc.lng}
            </div>
          ))
      )}
    </div>
  );
}