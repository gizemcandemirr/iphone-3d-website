import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Nav";
import SoundSection from "./components/SoundSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
    </div>
  );
}

export default App;
