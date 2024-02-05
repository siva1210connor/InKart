export const increment = data => {
  return {type: 'Increment', data: data};
};

export const decrement = data => {
  return {type: 'Decrement', data: data};
};
