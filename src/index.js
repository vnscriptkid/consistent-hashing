import persons from "./persons.json";
import uniqueRandomArray from "unique-random-array";

module.exports = {
  all: persons,
  random: uniqueRandomArray(persons),
};
