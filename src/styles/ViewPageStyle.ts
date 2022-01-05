import styled from "styled-components";

export const NavBar = styled.div`
  border: 3px solid black;
  width: 100vw;
  height: 10vh;
  display: flex;
  padding: 1% 3%;
  justify-content: space-around;
  align-items: center;
`;

export const TeamNameDiv = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamTitle = styled.p`
  font-weight: 500;
  font-size: 2rem;
  font-family: Ubuntu;
`;
export const PokeBody = styled.div`
  display: flex;
`;

export const PokeListDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PokeList = styled.ul`
  list-style: none;
  height: 100%;
`;
export const PokeListItem = styled.li`
  border: 1px solid black;
  margin: 10% 0;
`;
export const PokeName = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-family: helvetica;
  font-size: 1.5rem;
`;

export const PokeInfo = styled.div`
  flex: 1;
`;
export const PokeImage = styled.img``;
export const PokeText = styled.p``;
