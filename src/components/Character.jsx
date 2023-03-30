import React from "react";

function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid rounded-pill"
      />
      <p>{character.origin.name}</p>
    </div>
    //igual a pasar como parametro props y utilizarlos como props/character.id
  );
}

export default Character;
