import React from "react";
import data from "../data/data";

function ListTitle() {
  const name = "List Title";
  return <h1>{name}</h1>;
}

function ListName({ data }) {
  return <li className="title" key={data.id}>{data.name}</li>;
}

function List() {
  return (
    <ul>
      {data.map((item) => (
        <ListName data={item} />
        // <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export { ListTitle, List };
