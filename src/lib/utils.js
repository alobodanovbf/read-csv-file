export const eachToFormat = (obj, format) => {
  const result = {};

  for (const [k, v] of Object.entries(obj)) {
    result[k] = format(v);
  }
  return result;
};

export const totalResultValue = (data) => {
  // console.log(data);

  return data.ResultValue;
};
