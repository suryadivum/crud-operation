import { getByText, render, screen, waitFor } from "@testing-library/react";
import Home from "./home";
import userEvent from "@testing-library/user-event";
import add from "./script"
describe("numberTest", () => {
  test("renders learn react link", async () => {
    await expect(add({ num1: 5, num2: 7 })).toBe(12)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: -5, num2: -3 })).toBe(-8)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: 10, num2: -4 })).toBe(6)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: 0, num2: 9 })).toBe(9)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: 3, num2: 2 })).toBe(5)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: 1000000, num2: 500000 })).toBe(1500000)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: 2.5, num2: 1.75 })).toBe(4.25)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: -7, num2: 7 })).toBe(0)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: Number.MAX_SAFE_INTEGER+1, num2: Number.MIN_SAFE_INTEGER-1 })).toBe(0);
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: Number.MAX_SAFE_INTEGER+10, num2: Number.MIN_SAFE_INTEGER-10 })).toBe(0);
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: null+5, num2: null+8 })).toBe(13)
  });
  test("renders learn react link", async () => {
    await expect(add({ num1: "hello", num2: 3 })).toBe("hello3")
  });
});
