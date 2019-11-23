const arr = function() {
  const arr = Array.from(arguments);
  arr.push("at your mother's");
  return arr.join(" ");
};

console.log(arr("was", "it", "in"));
