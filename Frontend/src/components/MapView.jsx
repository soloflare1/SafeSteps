// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function MapView() {
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     axios.get(import.meta.env.VITE_API_URL + "/api/location")
//       .then(res => setLocations(res.data));
//   }, []);

//   return (
//     <div style={styles.wrapper}>
//       <h2 style={styles.title}>Live Tracking Feed</h2>

//       {locations.slice(-6).map((loc, i) => (
//         <div key={i} style={styles.item}>
//           <div>
//             <p style={styles.device}>{loc.deviceId}</p>
//             <p style={styles.coords}>{loc.lat}, {loc.lng}</p>
//           </div>

//           <span style={styles.badge}>{loc.mode}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     marginTop: "20px",
//     background: "#111827",
//     padding: "18px",
//     borderRadius: "12px",
//     border: "1px solid #1F2937"
//   },
//   title: {
//     marginBottom: "12px",
//     color: "#E5E7EB"
//   },
//   item: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "10px",
//     borderBottom: "1px solid #1F2937"
//   },
//   device: {
//     fontWeight: "500"
//   },
//   coords: {
//     fontSize: "12px",
//     color: "#94A3B8"
//   },
//   badge: {
//     fontSize: "12px",
//     color: "#3B82F6"
//   }
// };


import { useEffect, useState } from "react";
import axios from "axios";

export default function MapView() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/api/location")
      .then(res => setLocations(res.data));
  }, []);

  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>Live Tracking Feed</h2>

      {locations.slice(-8).map((loc, i) => (
        <div key={i} style={styles.row}>
          <div>
            <p style={styles.device}>{loc.deviceId}</p>
            <p style={styles.coords}>{loc.lat}, {loc.lng}</p>
          </div>

          <span style={styles.badge}>{loc.mode}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  panel: {
    margin: "20px",
    background: "#0F172A",
    border: "1px solid #1F2937",
    borderRadius: "14px",
    padding: "18px",
  },

  title: {
    marginBottom: "12px",
    fontSize: "18px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #1F2937",
  },

  device: {
    fontWeight: "500",
  },

  coords: {
    fontSize: "12px",
    color: "#94A3B8",
  },

  badge: {
    fontSize: "12px",
    color: "#3B82F6",
    background: "rgba(59,130,246,0.1)",
    padding: "4px 10px",
    borderRadius: "8px",
  },
};