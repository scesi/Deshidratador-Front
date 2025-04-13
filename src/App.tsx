import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <main className="bg-[#C4D2E7] flex-1 px-10">
      <HomePage/>
      </main>
    </main>
  );
}

export default App;
