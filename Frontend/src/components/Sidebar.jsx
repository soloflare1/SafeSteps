// import { FiHome, FiMap, FiAlertTriangle, FiSettings } from "react-icons/fi";

// export default function Sidebar() {
//   const menu = [
//     { name: "Dashboard", icon: <FiHome /> },
//     { name: "Live Tracking", icon: <FiMap /> },
//     { name: "SOS Alerts", icon: <FiAlertTriangle /> },
//     { name: "Settings", icon: <FiSettings /> },
//   ];

//   return (
//     <div style={styles.sidebar}>
//       <div style={styles.logo}>SafeSteps</div>

//       {menu.map((item, i) => (
//         <div key={i} style={styles.item}>
//           <span style={{ fontSize: "18px" }}>{item.icon}</span>
//           <span>{item.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// const styles = {
//   sidebar: {
//     width: "260px",
//     height: "100vh",
//     background: "#111827",
//     padding: "20px",
//     borderRight: "1px solid #1F2937",
//   },
//   logo: {
//     fontSize: "20px",
//     fontWeight: "600",
//     marginBottom: "30px",
//     color: "#3B82F6",
//   },
//   item: {
//     display: "flex",
//     gap: "12px",
//     padding: "12px",
//     borderRadius: "10px",
//     cursor: "pointer",
//     color: "#94A3B8",
//     marginBottom: "8px",
//   },
// };
import { FiHome, FiMap, FiAlertTriangle, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: <FiHome /> },
    { name: "Live Tracking", icon: <FiMap /> },
    { name: "SOS Alerts", icon: <FiAlertTriangle /> },
    { name: "Settings", icon: <FiSettings /> },
  ];

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>SafeSteps</div>

      {menu.map((item, i) => (
        <div key={i} style={styles.item}>
          <span style={{ fontSize: 18 }}>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    background: "#111827",
    borderRight: "1px solid #1F2937",
    padding: "20px",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#3B82F6",
    marginBottom: "30px",
    letterSpacing: "0.5px",
  },

  item: {
    display: "flex",
    gap: "12px",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "10px",
    color: "#94A3B8",
    cursor: "pointer",
    background: "rgba(255,255,255,0.02)",
    transition: "0.2s",
  },
};