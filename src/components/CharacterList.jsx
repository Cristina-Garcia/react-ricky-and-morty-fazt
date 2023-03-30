import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character";

//[] como segundo parametro de useEffect nos dice que no va a cambiar porque no hay nada en que basarse, por lo que se ejecuta una sola vez
//useState vienen siendo las variables

function NavPage(props) {
  console.log(props.page);
  return (
    <header className="d-flex justify-content-between align-items-center py-2">
      <p className="mb-0">Page: {props.page}</p>
      <div>
        <button
          id="btn-previous"
          className="btn btn-primary btn-sm me-2"
          onClick={() => {
            if (props.page >= 1) {
              props.setPage(props.page - 1);
            }
          }}
          disabled={props.page > 1 ? false : true}
        >
          {}
          Previous page
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            props.setPage(props.page + 1);
            console.log(props.page);
          }}
        >
          Page: {props.page + 1}
        </button>
      </div>
    </header>
  );
}
function CharacterList() {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacter(data.results);
    }
    fetchData();
  }, [page]);
  //useEffect esta pendiente de [page]
  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div key={character.id} className="col-md-4">
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
//  igual a pasar cada propiedad <Character id={character.id} name={character.name} />

export default CharacterList;
