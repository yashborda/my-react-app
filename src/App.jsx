import React from "react";
import Header from "./components/Header";
import * as List from "./components/List";
function App() {
  return (
    <>
      <Header />
      <h1>Hello, yash</h1>
      <List.ListTitle />
      <List.List />
    </>
  );
}

export default App;
