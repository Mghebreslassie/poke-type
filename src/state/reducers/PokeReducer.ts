type IPoke = {
  name: string;
  id: number;
  image: string;
  types: string;
};
type IAction = {
  type: string;
  payload: any;
};
const initialState: IPoke[] = [
  {
    name: "charmander",
    id: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    types: "fire",
  },
  {
    name: "bulbasaur",
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: "grass/poison",
  },
  {
    name: "squirtle",
    id: 7,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    types: "water",
  },
];

const PokeReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "ADD_POKE":
      return [...state, action.payload];
    case "REM_POKE":
      return state.filter((p) => {
        return p.id === action.payload.id;
      });
    default:
      return state;
  }
};

export default PokeReducer;
