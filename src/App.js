import CalculateAge from "./components/CalculateAge";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <h1>QA Calculator</h1>
      <h2>Calculate Age Quickly</h2>

      <CalculateAge />
    </div>
  );
}
