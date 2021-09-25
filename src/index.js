const persons = require("./persons.json");
const uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: persons,
  random: uniqueRandomArray(persons),
};
