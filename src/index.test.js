const lib = require("./index");

describe("lib", () => {
  describe("all", () => {
    test("is an array of size 7", () => {
      expect(Array.isArray(lib.all)).toBeTruthy();
      expect(lib.all).toHaveLength(7);
    });

    test("contains object person", () => {
      lib.all.forEach((person) => {
        expect(person).toEqual({
          name: expect.any(String),
          age: expect.any(Number),
          job: expect.any(String),
        });
      });
    });
  });

  describe("random", () => {
    test("is a function", () => {
      expect(typeof lib.random).toBe("function");
    });

    test("returns a person from all", () => {
      const person = lib.random();
      expect(
        lib.all.some((p) => JSON.stringify(p) === JSON.stringify(person))
      ).toBeTruthy();
    });
  });
});
