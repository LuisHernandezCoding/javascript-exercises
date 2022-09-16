const ftoc = function(f) {
  // [°C] = ([°F] − 32) × 5⁄9
  let c = ((f - 32) * 5) / 9
  return round(c, 1)
};

const ctof = function(c) {
  // [°F] = [°C] × 9⁄5 + 32
  let f = (c * (9/5)) + 32
  return round(f, 1)
};

const round = function(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
