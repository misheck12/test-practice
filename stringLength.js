const stringLength = (str) => {
  if(str < 1 || str > 10) {
    throw new Error("String's length should be between 1 and 10");
  }
  return str.length;
};

module.exports = stringLength;
