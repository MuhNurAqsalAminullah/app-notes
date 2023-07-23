import { useState } from "react";
import "./App.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Router from "./router/Router";

function App() {
  const [count, setCount] = useState(0);

  return <Router />;
}

export default App;
