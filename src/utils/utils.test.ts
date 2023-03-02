import { describe, it, expect } from "vitest"
import inputObject from "../inputObject.js"
import {
	emptyPricebook,
	filterRegionPricebooks,
	isItemAtIndexLastInArray,
} from "./utils.js"

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

describe("emptyPricebook", () => {
	it("should transform a pricebook's values into empty strings", () => {
		const actual = emptyPricebook({
			"EUR.price": "M2:M",
			"EUR.nprice": "N2:N",
			"SEK.price": "O2:O",
			"SEK.nprice": "P2:P",
			"CHF.price": "Q2:Q",
			"CHF.nprice": "R2:R",
			"GBP.price": "S2:S",
			"GBP.nprice": "T2:T",
			"NOK.price": "U2:U",
			"NOK.nprice": "V2:V",
			"DKK.price": "W2:W",
			"DKK.nprice": "X2:X",
			"CZK.price": "Y2:Y",
			"CZK.nprice": "Z2:Z",
			"PLN.price": "AA2:AA",
			"PLN.nprice": "AB2:AB",
			"JPY.price": "AC2:AC",
			"JPY.nprice": "AD2:AD",
		})
		const expected = {
			"EUR.price": "",
			"EUR.nprice": "",
			"SEK.price": "",
			"SEK.nprice": "",
			"CHF.price": "",
			"CHF.nprice": "",
			"GBP.price": "",
			"GBP.nprice": "",
			"NOK.price": "",
			"NOK.nprice": "",
			"DKK.price": "",
			"DKK.nprice": "",
			"CZK.price": "",
			"CZK.nprice": "",
			"PLN.price": "",
			"PLN.nprice": "",
			"JPY.price": "",
			"JPY.nprice": "",
		}

		expect(expected).toEqual(actual)
	})

	it("should return an empty object if given an empty object", () => {
		const actual = emptyPricebook({})
		const expected = {}

		expect(actual).toEqual(expected)
	})

	it("should return an empty object if given no arguments", () => {
		// @ts-ignore
		const actual = emptyPricebook()
		const expected = {}

		expect(actual).toEqual(expected)
	})
})

describe("filterRegionPricebooks", () => {
	const inputObjectFilteredByRegion = {
		pricebooks: {
			eu: {
				"EUR.price": "M2:M",
				"EUR.nprice": "N2:N",
				"SEK.price": "O2:O",
				"SEK.nprice": "P2:P",
				"CHF.price": "Q2:Q",
				"CHF.nprice": "R2:R",
				"GBP.price": "S2:S",
				"GBP.nprice": "T2:T",
				"NOK.price": "U2:U",
				"NOK.nprice": "V2:V",
				"DKK.price": "W2:W",
				"DKK.nprice": "X2:X",
				"CZK.price": "Y2:Y",
				"CZK.nprice": "Z2:Z",
				"PLN.price": "AA2:AA",
				"PLN.nprice": "AB2:AB",
				"JPY.price": "AC2:AC",
				"JPY.nprice": "AD2:AD",
			},
			na: {
				"USD.price": "",
				"USD.nprice": "",
				"CAD.price": "",
				"CAD.nprice": "",
			},
			apac: {
				"AUD.price": "",
				"AUD.nprice": "",
				"NZD.price": "",
				"NZD.nprice": "",
			},
		},
		misc: {
			"global.harmonized_system_code": "",
		},
	}
	it("should filter out the regions that are not chosen, making them empty strings", () => {
		const actual = filterRegionPricebooks(inputObject, "eu")

		expect(actual).toEqual(inputObjectFilteredByRegion)
	})

	it("if given an empty string, it should leave the object unchanged", () => {
		// @ts-ignore
		const actual1 = filterRegionPricebooks(inputObject, "")
		// @ts-ignore
		const actual2 = filterRegionPricebooks(inputObjectFilteredByRegion, "")

		expect(actual1).toEqual(inputObject)
		expect(actual1).toEqual(inputObjectFilteredByRegion)
	})

	it("if given a non-region string, it should leave the object unchanged", () => {
		// @ts-ignore
		const actual = filterRegionPricebooks(inputObject, "wrong")

		expect(actual).toEqual(inputObject)
	})

	it("if given no arguments, it should return an empty input object", () => {
		// @ts-ignore
		const actual = filterRegionPricebooks()

		expect(actual).toEqual({ pricebooks: {}, misc: {} })
	})
})
