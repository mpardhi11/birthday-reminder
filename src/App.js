import React, { useState } from "react";
import data from "./Data";
import List from "./List";
function App() {
  const [peoples, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        {peoples.length === 0 ? (
          <h3> no birthday today</h3>
        ) : peoples.length === 1 ? (
          <h3>{peoples.length} birthday today</h3>
        ) : (
          <h3>{peoples.length} birthdays today</h3>
        )}
        <List peoples={peoples} />
        <button
          onClick={() => {
            setPeople([]);
            console.log("clicked");
          }}
          disabled={peoples.length <= 0}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
