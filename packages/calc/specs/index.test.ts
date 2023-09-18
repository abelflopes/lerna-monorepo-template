import { calc } from "../src/index";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(calc("sum", 1, 2)).toBe(3);
  });
});
