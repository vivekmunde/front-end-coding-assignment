import data from "./players";

const getPlayers = (args) => {
  return Promise.resolve(
    data
      .sort((a, b) => {
        const aPoints = a.points ?? 0;
        const bPoints = b.points ?? 0;

        return aPoints === bPoints ? 0 : bPoints > aPoints ? 1 : -1;
      })
      .map((it, index) => ({
        ...it,
        rank: index + 1,
      }))
      .filter((it) => (args?.type ? it.type === args?.type : true))
  );
};

export default getPlayers;
