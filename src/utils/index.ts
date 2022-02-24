// https://github.com/sindresorhus/array-shuffle/blob/main/index.js
export const shuffle = <T>(arr: T[]) => {
  const array = [...arr];

  for (let index = array.length - 1; index > 0; index -= 1) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[newIndex]] = [array[newIndex], array[index]];
  }

  return array;
};

export const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));
