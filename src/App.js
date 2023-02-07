import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import Iphone from "./components/iphone/Iphone";
import Mac from "./components/mac/Mac";
import Ipad from "./components/ipad/Ipad";
import Watch from "./components/watch/Watch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Store />
      <Iphone />
      <Mac />
      <Ipad />
      <Watch />
    </div>
  );
}

export default App;
