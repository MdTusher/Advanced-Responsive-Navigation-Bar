import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Submenu from "./Submenu";
const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </main>
  );
};

export default App;
