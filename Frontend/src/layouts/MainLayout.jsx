// import Sidebar from "../components/Sidebar";

// export default function MainLayout({ children }) {
//   return (
//     <div style={{
//       display: "flex",
//       minHeight: "100vh",
//       background: "#0B1220",
//       color: "white"
//     }}>
      
//       <Sidebar />

//       <div style={{ flex: 1 }}>
        
//         {/* TOP BAR */}
//         <div style={{
//           height: "60px",
//           background: "rgba(255,255,255,0.05)",
//           display: "flex",
//           alignItems: "center",
//           padding: "0 20px",
//           justifyContent: "space-between",
//           backdropFilter: "blur(10px)"
//         }}>
//           <h3>🛡 SafeSteps Pro Dashboard</h3>
//           <span style={{ color: "#22C55E" }}>● LIVE SYSTEM</span>
//         </div>

//         <div style={{ padding: "20px" }}>
//           {children}
//         </div>

//       </div>
//     </div>
//   );
// }
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar />

      <div style={{ flex: 1, background: "var(--bg)" }}>
        {children}
      </div>

    </div>
  );
}