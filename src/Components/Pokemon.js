export const getPokemon = async (url) => {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res(data);
      });
  });
};
