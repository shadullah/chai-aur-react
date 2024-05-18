import { useState } from "react";
import "./App.css";

function App() {
  const [clr, setClr] = useState("cyan");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: clr }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2">
          <button
            className="outline-none px-4 rounded-lg text-white shadow-sm"
            style={{ backgroundColor: "red" }}
            onClick={() => setClr("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-lg text-white shadow-sm"
            style={{ backgroundColor: "green" }}
            onClick={() => setClr("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 rounded-lg text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
            onClick={() => setClr("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
