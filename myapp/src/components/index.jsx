import React from "react";

function Home() {
  const call = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        username: "admin",
        passwd: "admin",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response, "jiwqdj");
  };
  return (
    <>
      <body >
      <input name="myInput" />
      </body>
    </>
  );
}

export default Home;
