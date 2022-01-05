import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as pokeActions from "../state/actions/pokeActions";

type IPoke = {
  name: string;
  id: number;
  image: string;
};

const Homepage: React.FC = () => {
  const [index, setIndex] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState<IPoke>({
    name: "",
    id: 0,
    image: "",
  });

  const pokeTeam = useSelector(
    (state: { poketeam: IPoke[] }) => state.poketeam
  );

  const dispatch = useDispatch();
  const { add_poke, rem_poke } = bindActionCreators(pokeActions, dispatch);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          id: data.order,
          image: data.sprites.other["official-artwork"]["front_default"],
        });
      });
  }, [index]);

  const nextIndex = () => {
    if (index === 151) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
  };

  const prevIndex = () => {
    if (index === 1) {
      setIndex(151);
    } else {
      setIndex(index - 1);
    }
  };

  console.log(pokeTeam);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          border: "3px solid black",
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {pokeTeam.map((p) => {
          return (
            <div
              style={{
                border: "1px solid purple",
                width: "25%",
                height: "20%",
                margin: "0 2%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={p.image}
                style={{ height: "85%", objectFit: "contain" }}
              />
              <h3 style={{ margin: "0", padding: "0" }}>{p.name}</h3>
              <button
                onClick={() => {
                  rem_poke(pokemon);
                }}
              >
                remove pokemon
              </button>
            </div>
          );
        })}
      </div>
      <div style={{ flex: "1" }}>
        <img src={pokemon.image} />
        <h1>{pokemon.name}</h1>
        <h1>poke# {pokemon.id}</h1>
        <button onClick={nextIndex}>next</button>
        <button onClick={prevIndex}>prev</button>
        <button
          onClick={() => {
            add_poke(pokemon);
          }}
        >
          add pokemon
        </button>
      </div>
    </div>
  );
};

export default Homepage;
