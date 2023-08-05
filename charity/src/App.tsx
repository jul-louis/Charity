import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="static overflow-auto bg-white text-black dark:text-black dark:bg-slate-950">
      <NavigationBar />
    </div>
  );
}

export default App;
