import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Card({ item, setCards, setSubtitle, setTitle, setIseditId, cards }) {
  console.log(cards, "cards");
  console.log(setCards, "setCards");
  const handleDelete = () => {
    const newCards = cards.filter((card) => card.id !== item.id);
    setCards(newCards);
  };
  const handleEdit = () => {
    setIseditId(item.id);
    setSubtitle(item.subtitle);
    setTitle(item.name);
  };

  return (
    <div className="card">
      <div style={{ textAlign: "end" }}>
        <Button variant="contained" color="secondary" onClick={handleEdit}>
          Edit
        </Button>

        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="error"
          onClick={handleDelete}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle text-muted">{item.subtitle}</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Card;
