import About from "../components/About";
import BuyTickets from "../components/BuyTickets";
import Comapanies from "../components/Comapanies";
import Hero from "../components/Hero";
import { Schedule } from "../components/Schedule";
import Speakers from "../components/Speakers";
import "./App.css";

function App() {
  return (
    <div className="font-['Josefin Sans'] w-screen">
      <Hero />
      <About />
      <Speakers />
      <Comapanies />
      <BuyTickets />
      <Schedule />
    </div>
  );
}

export default App;
