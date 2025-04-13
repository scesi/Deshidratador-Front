import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar/Sidebar";

const LayoutDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="bg-[#C4D2E7] flex-1 px-10">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutDashboard;
