import { sum } from "@abelflopes/lerna-monorepo-template-sum";

type Operator = "sum" | "sub" | "multi" | "div";

/**
 * Perform math operations
 * @param operator - describes operation to perform {@link Operator}
 * @param n1 - numeric value
 * @param n2 - numeric value
 * @returns result of the provided operation / values
 */

export const calc = (operator: Operator, n1: number, n2: number): number =>
  operator === "sum"
    ? sum(n1, n2)
    : ((): number => {
        throw new Error("Operator not supported");
      })();
