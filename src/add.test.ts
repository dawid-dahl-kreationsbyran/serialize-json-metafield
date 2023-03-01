import { it, expect, describe } from "vitest"
import { add } from "./add.js"

describe("add function", () => {
	it("should add two numbers correctly", () => {
		expect(add(2, 3)).toBe(5)
	})

	it("should return NaN if one or more arguments are not a number", () => {
		// @ts-ignore
		expect(add(2, "3")).toBeNaN()
		// @ts-ignore
		expect(add("2", "3")).toBeNaN()
		// @ts-ignore
		expect(add("hello", "world")).toBeNaN()
	})
})
