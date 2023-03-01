import { describe, it, expect } from "vitest"
import { isItemAtIndexLastInArray } from "./utils.js"

describe("isItemAtIndexLastInArray", () => {
	it("returns true if the item is the last item in the array", () => {
		const arr = [1, 2, 3, "fourth", 5]
		expect(isItemAtIndexLastInArray(4, arr)).toBe(true)
	})

	it("returns false if the item is not the last item in the array", () => {
		const arr = ["first", 2, "third", 4, 5, 2, 5]
		expect(isItemAtIndexLastInArray(3, arr)).toBe(false)
	})

	it("returns true for an array with only one item", () => {
		const arr = ["apple"]
		expect(isItemAtIndexLastInArray(0, arr)).toBe(true)
	})

	it("returns false for an empty array", () => {
		const arr: unknown[] = []
		expect(isItemAtIndexLastInArray(0, arr)).toBe(false)
	})
})
