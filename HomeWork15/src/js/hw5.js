export const arrayEvenNumbers = [1, 2, 3, 4, 5, 6];

export const filterEvenNumbers = (newArray) => {
  console.log(newArray);

  return newArray.filter((element) => element % 2 !== 0);
};
