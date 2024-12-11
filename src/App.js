import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden bg-white">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
