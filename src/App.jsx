import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Header from "./components/Header";
import Card from "./components/Card";
import TextField from "@mui/material/TextField";

function App() {
  const card = [];
  const [cards, setCards] = useState(card);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [iseditId, setIseditId] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    cards.push({ name: title, subtitle: subtitle, id: cards.length + 1 });
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
    setIseditId(null);
  };
  return (
    <>
      <Header />
      <div>
        <TextField
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          label="Title"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          name="subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          id="subtitle"
          label="Sub Title"
          variant="outlined"
        />
        <br />
        <br />
        {iseditId ? (
          <Button variant="contained" color="success" onClick={handelUpdate}>
            update
          </Button>
        ) : (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handelSubmit}
          >
            Add
          </Button>
        )}
      </div>
      <br />
      {cards.map((item) => (
        <Card
          key={item.id}
          item={item}
          setCards={setCards}
          setSubtitle={setSubtitle}
          setTitle={setTitle}
          setIseditId={setIseditId}
          cards={cards}
        />
      ))}
    </>
  );
}

export default App;
