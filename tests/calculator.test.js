import { describe, it, expect } from "vitest";
import {
  normalizeNumberString,
  compute,
  formatResult,
  inputDigit,
  inputDot,
  backspace,
  toggleSign,
  percent
} from "../src/calculator.js";

describe("Calculator unit tests", () => {
  it("correctly adds numbers", () => {
    expect(compute(2, 3, "+")).toBe(5);
  });

  it("correctly subtracts numbers", () => {
    expect(compute(10, 4, "-")).toBe(6);
  });

  it("correctly multiplies numbers", () => {
    expect(compute(3, 4, "*")).toBe(12);
  });

  it("correctly divides numbers", () => {
    expect(compute(8, 2, "/")).toBe(4);
  });

  it("returns NaN when dividing by zero", () => {
    expect(Number.isNaN(compute(8, 0, "/"))).toBe(true);
  });

  it("formats floating-point result correctly", () => {
    expect(formatResult(0.1 + 0.2)).toBe("0.3");
  });

  it("normalizes number string with leading zeros", () => {
    expect(normalizeNumberString("00012")).toBe("12");
  });

  it("adds digit to current number", () => {
    expect(inputDigit("12", "3", false)).toBe("123");
  });

  it("adds decimal dot only once", () => {
    expect(inputDot("12.3", false)).toBe("12.3");
  });

  it("backspace removes last symbol", () => {
    expect(backspace("123", false)).toBe("12");
  });

  it("toggleSign changes positive number to negative", () => {
    expect(toggleSign("15")).toBe("-15");
  });

  it("percent converts number to percentage", () => {
    expect(percent("25")).toBe("0.25");
  });
});