type IPoke = {
  name: string;
  id: number;
  image: string;
};

export const add_poke = (poke: IPoke) => {
  return {
    type: "ADD_POKE",
    payload: poke,
  };
};

export const rem_poke = (poke: IPoke) => {
  return {
    type: "REM_POKE",
    payload: poke,
  };
};
