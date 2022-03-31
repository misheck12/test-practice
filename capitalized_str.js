const capitalized = str => {
  if(typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }
   return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = capitalized;
