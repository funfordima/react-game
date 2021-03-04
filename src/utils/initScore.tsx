const initScore = (type: string, value = 0): number => {
  let score = value;

  if (localStorage.getItem(type)) {
    score = Number(localStorage.getItem(type));
  }

  return score;
};

export default initScore;
