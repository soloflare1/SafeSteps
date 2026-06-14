// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FiActivity, FiUsers, FiDatabase } from "react-icons/fi";

// export default function Dashboard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(import.meta.env.VITE_API_URL + "/api/location")
//       .then(res => setData(res.data));
//   }, []);

//   const devices = new Set(data.map(d => d.deviceId)).size;

//   return (
//     <div>
//       <h2 style={styles.title}>Overview</h2>

//       <div style={styles.grid}>

//         <div style={styles.card}>
//           <FiDatabase style={styles.icon} />
//           <p>Total Records</p>
//           <h3>{data.length}</h3>
//         </div>

//         <div style={styles.card}>
//           <FiUsers style={styles.icon} />
//           <p>Devices</p>
//           <h3>{devices}</h3>
//         </div>

//         <div style={styles.card}>
//           <FiActivity style={styles.icon} />
//           <p>Status</p>
//           <h3 style={{ color: "#22C55E" }}>LIVE</h3>
//         </div>

//       </div>
//     </div>
//   );
// }

// const styles = {
//   title: {
//     fontSize: "18px",
//     marginBottom: "15px",
//     color: "#E5E7EB"
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "16px"
//   },
//   card: {
//     background: "#111827",
//     padding: "18px",
//     borderRadius: "12px",
//     border: "1px solid #1F2937"
//   },
//   icon: {
//     fontSize: "20px",
//     color: "#3B82F6",
//     marginBottom: "8px"
//   }
// };

import { useEffect, useState } from "react";
import axios from "axios";
import { FiDatabase, FiUsers, FiActivity } from "react-icons/fi";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/api/location")
      .then(res => setData(res.data));
  }, []);

  const devices = new Set(data.map(d => d.deviceId)).size;

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Dashboard Overview</h2>

      <div style={styles.grid}>

        <Card icon={<FiDatabase />} label="Total Records" value={data.length} color="#3B82F6" />

        <Card icon={<FiUsers />} label="Active Devices" value={devices} color="#22C55E" />

        <Card icon={<FiActivity />} label="System Status" value="LIVE" color="#F59E0B" />

      </div>
    </div>
  );
}

function Card({ icon, label, value, color }) {
  return (
    <div style={styles.card}>
      <div style={{ color, fontSize: 20 }}>{icon}</div>
      <p style={styles.label}>{label}</p>
      <h2 style={styles.value}>{value}</h2>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "20px",
  },

  title: {
    fontSize: "20px",
    marginBottom: "15px",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  },

  card: {
    background: "#0F172A",
    border: "1px solid #1F2937",
    borderRadius: "14px",
    padding: "18px",
    transition: "0.2s",
  },

  label: {
    color: "#94A3B8",
    fontSize: "13px",
    marginTop: "10px",
  },

  value: {
    marginTop: "5px",
    fontSize: "22px",
  },
};