// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

module.exports = {
  destructivelyPrependCat: destructivelyPrependCat,
};

function destructivelyAppendCat(name) {
  cats.push(name);
}

module.exports = {
  destructivelyAppendCat: destructivelyAppendCat,
};

function destructivelyRemoveLastCat() {
  cats.pop();
}

module.exports = {
  destructivelyRemoveLastCat: destructivelyRemoveLastCat,
};

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

module.exports = {
  appendCat: appendCat,
};

function prependCat(name) {
  return [name, ...cats];
}

module.exports = {
  prependCat: prependCat,
};

function removeLastCat() {
  return cats.slice(0, -1);
}

module.exports = {
  removeLastCat: removeLastCat,
};

function removeFirstCat() {
  return cats.slice(1);
}
module.exports = {
  removeFirstCat: removeFirstCat,
};
