import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar />

      <div style={{ flex: 1, padding: "20px", background: "#0B1220", color: "white" }}>
        {children}
      </div>

    </div>
  );
}