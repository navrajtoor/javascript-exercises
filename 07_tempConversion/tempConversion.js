const ftoc = function(temp) {
  let newTemp = (temp-32)*5/9;
  let roundedTemp = Math.round(newTemp*10)/10;
  return roundedTemp;
};

const ctof = function(temp) {
  let newTemp = temp*(9/5)+32;
  let roundedTemp = Math.round(newTemp*10)/10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
