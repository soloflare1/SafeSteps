import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import MapView from "./components/MapView";

export default function App() {
  return (
    <MainLayout>
      <Dashboard />
      <MapView />
    </MainLayout>
  );
}