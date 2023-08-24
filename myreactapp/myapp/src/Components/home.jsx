import React, { useState } from "react";
import add from "./script";
export default function Home() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState();

  function handleclick(event) {
    event.preventDefault();
    setResult(add({ num1: number1, num2: number2 }));
  }

  return (
    <div className="App">
      <form onSubmit={handleclick}>
        <div>
          <input
            data-testid="num1"
            type="number"
            placeholder="Enter the first number"
            name="num1"
            onChange={(event) => {
              setNumber1(Number(event.target.value));
              console.log(number1);
            }}
          />
        </div>
        <br />
        <div>
          <input
            type="number"
            data-testid="num2"
            placeholder="Enter the Second number"
            name="num2"
            onChange={(event) => {
              setNumber2(Number(event.target.value));
            }}
          />
        </div>
        <br />
        <button type="submit">calc</button>
      </form>
      {result && <div>{result}</div>}
    </div>
  );
}

// export default Home;
