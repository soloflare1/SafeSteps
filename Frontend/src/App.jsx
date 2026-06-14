import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import MapView from "./components/MapView";

export default function App() {
  return (
    <MainLayout>
      <div style={{ display: "grid", gap: "20px" }}>
        <Dashboard />
        <MapView />
      </div>
    </MainLayout>
  );
}