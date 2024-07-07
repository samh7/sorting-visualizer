export const getInsertionSortAnims = (items) => {
  const newArray = [...items];
  const animArray = [];
  for (let i = 1; i < newArray.length; i++) {
    let j = i;
    while (j > 0 && newArray[j] < newArray[j - 1]) {
      animArray.push([j - 1, j]);
      const tmp = newArray[j - 1];
      newArray[j - 1] = newArray[j];
      newArray[j] = tmp;
      j--;
    }
  }
  return [newArray, animArray];
};
