import React, { useState, useEffect } from "react";
import { NavBar, PokeText } from "../styles/ViewPageStyle";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as pokeActions from "../state/actions/pokeActions";
import {
  TitleDiv,
  TypeDiv,
  Content,
  Control,
  TypeBorder,
  TypeText,
  First,
  Second,
  Third,
} from "../styles/CreatePageStyle";

type IPoke = {
  name: string;
  id: number;
  image: string;
  types: string;
};

const CreatePage: React.FC = () => {
  const [teamInput, setTeamInput] = useState("");
  const [index, setIndex] = useState(1);
  const [description, setDescription] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState<IPoke>({
    name: "",
    id: 0,
    image: "",
    types: "",
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
        let typesArr: string[] = data.types.map(
          (p: { slot: number; type: { name: string; url: string } }) => {
            return p.type.name;
          }
        );
        setPokemon({
          name: data.name,
          id: data.order,
          image: data.sprites.other["official-artwork"]["front_default"],
          types: typesArr.join("/"),
        });
      });
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`)
      .then((res) => res.json())
      .then((data) =>
        setDescription(data["flavor_text_entries"][0]["flavor_text"])
      );
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
    <>
      <NavBar></NavBar>
      <TitleDiv>
        <label id="teamname">Pick your team</label>
        <input
          id="teamname"
          type="text"
          placeholder="teamname"
          value={teamInput}
          onChange={(e) => setTeamInput(e.target.value)}
        />
      </TitleDiv>
      <TypeDiv>
        <TypeBorder>
          <TypeText>{pokemon.types}</TypeText>
        </TypeBorder>
      </TypeDiv>
      <Content>
        <First>
          <img
            style={{ width: "50%", objectFit: "contain" }}
            src={pokeTeam[0].image}
          />
        </First>
        <Second>
          <img src={pokemon.image} />
        </Second>
        <Third>
          <PokeText>{pokemon.name}</PokeText>
          <PokeText>{`#${pokemon.id} ${pokemon.types}`}</PokeText>
          <PokeText>{description}</PokeText>
        </Third>
      </Content>
      <Control>
        <div className="left">
          <button onClick={prevIndex}>prev</button>
        </div>
        <div
          className="middle"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label id="roster-spot">POSITION #</label>
          <select id="roster-spot">
            {[
              { val: 1, str: "1" },
              { val: 2, str: "2" },
              { val: 3, str: "3" },
            ].map((item) => {
              return <option value={item.val}>{item.str}</option>;
            })}
          </select>
          <button
            onClick={() => {
              add_poke(pokemon);
            }}
          >
            add pokemon
          </button>
        </div>
        <div className="right">
          <button onClick={nextIndex}>next</button>
        </div>
      </Control>
    </>
  );
};

export default CreatePage;
