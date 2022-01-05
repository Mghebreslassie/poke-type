import React, { useState, useEffect } from "react";
import {
  NavBar,
  TeamNameDiv,
  TeamTitle,
  PokeListDiv,
  PokeList,
  PokeListItem,
  PokeName,
  PokeBody,
  PokeInfo,
  PokeImage,
  PokeText,
} from "../styles/ViewPageStyle";
import { useSelector } from "react-redux";

type IPoke = {
  name: string;
  id: number;
  image: string;
  types: string;
};

const ViewPage: React.FC = () => {
  const [currentPokemon, setCurrentPokemon] = useState<IPoke>({
    name: "",
    id: 0,
    image: "",
    types: "",
  });

  const pokeTeam = useSelector(
    (state: { poketeam: IPoke[] }) => state.poketeam
  );
  return (
    <div>
      <NavBar>
        <h5>Go Home</h5>
        <h5>Go Create Team</h5>
      </NavBar>
      <TeamNameDiv>
        <TeamTitle>My Team Name</TeamTitle>
      </TeamNameDiv>
      <PokeBody>
        <PokeListDiv>
          <PokeList>
            {pokeTeam.map((p) => {
              return (
                <PokeListItem onClick={() => setCurrentPokemon(p)}>
                  <PokeName>{p.name}</PokeName>
                </PokeListItem>
              );
            })}
          </PokeList>
        </PokeListDiv>
        <PokeInfo>
          <PokeImage src={currentPokemon.image} />
          <PokeName>{`${currentPokemon.name} ${currentPokemon.id}`}</PokeName>
          <PokeText>
            A fire type pokemon with a flame on the tip of his tail
          </PokeText>
        </PokeInfo>
      </PokeBody>
    </div>
  );
};

export default ViewPage;
