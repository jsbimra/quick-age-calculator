import CalculateAge from "./components/CalculateAge";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App mt-4">
      <h1>Online Age Calculator</h1>
      <h2>Quick age Calculator</h2>

      <CalculateAge />
    </div>
  );
}
