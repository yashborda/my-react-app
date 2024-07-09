import React, { useState } from "react";
import Header from "./components/Header";
import * as List from "./components/List";
import Card from "./components/Card";

function App() {
  const card = [
    {
      id: 1,
      name: "Card Title 1",
      subtitle: "Card Subtitle 1",
    },
    {
      id: 2,
      name: "Card Title 2",
      subtitle: "Card Subtitle 2",
    },
    {
      id: 3,  
      name: "Card Title 3",
      subtitle: "Card Subtitle 3",
    },
  ];
  const [cards, setCards] = useState(card); 
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [iseditId, setIseditId] = useState(null);


  const handelSubmit = (e) => {
    e.preventDefault();
    cards.push({ name: title, subtitle: subtitle, id: cards.length + 1});
    setTitle("");
    setSubtitle("");
  };

  const handelUpdate = (e) => { 
    e.preventDefault();
    const newCards = cards.map((card) => {
      if (card.id === iseditId) {
        return { ...card, name: title, subtitle: subtitle };
      }
      return card;
    });
    setCards(newCards);
    setTitle("");
    setSubtitle("");
    setIseditId(null)
  }
  return (
    <>
      <Header />
      <h1>Hello, yash</h1>
      <List.ListTitle />
      <List.List />

      <div>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control"
          required
        />{" "}
        <br />
        <input
          name="subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          type="text"
          className="form-control"
          required
        />{" "}
        <br />
        {
          iseditId ?
<button className="btn" type="submit" onClick={handelUpdate}>
          Update
        </button>
        :
        <button className="btn" type="submit" onClick={handelSubmit}>
        Add
      </button>
        }
      </div>

      {cards.map((item) => (
        <Card item={item} setCards={setCards} setSubtitle={setSubtitle} setTitle={setTitle} setIseditId={setIseditId} cards={cards} />
      ))}
    </>
  );
}

export default App;
