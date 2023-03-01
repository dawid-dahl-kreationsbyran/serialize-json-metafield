import { describe, it, expect } from "vitest"
import { serializeJsonMetafield } from "./serializeJsonMetafield.js"
import {
	metafield_json_object_one_level_nesting,
	metafield_json_object_simple,
	metafield_json_object_two_level_nesting,
} from "./test-data/test-data.js"

describe("serializeJsonMetafield", () => {
	const metafield_json_object_simple_expected = metafield_json_object_simple
	const metafield_json_object_one_level_nesting_expected =
		metafield_json_object_one_level_nesting
	const metafield_json_object_two_level_nesting_expected =
		metafield_json_object_two_level_nesting

	it("should return a properly formatted JSON string for the corresponding simple input object", () => {
		expect(serializeJsonMetafield(metafield_json_object_simple_expected)).toBe(
			'{"key":"&A2:A&","value":"&A2:A&"}'
		)
	})

	it("should return a properly formatted JSON string for the corresponding input object with one level of nesting", () => {
		expect(
			serializeJsonMetafield(metafield_json_object_one_level_nesting_expected)
		).toBe('{"pricebooks":{"key":"&A2:A&","value":"&A2:A&"}}')
	})

	it("should return a properly formatted JSON string for the corresponding input object with two levels of nesting", () => {
		expect(
			serializeJsonMetafield(metafield_json_object_two_level_nesting_expected)
		).toBe(
			'{"pricebooks":{"eu":{"EUR.price":"&A2:A&","SEK.price":"&A2:A&","GBP.price":"&A2:A&","PLN.price":"&A2:A&","EUR.nprice":"&A2:A&","SEK.nprice":"&A2:A&","GBP.nprice":"<string GBP.nprice>","PLN.nprice":"&A2:A&","CHF.price":"&A2:A&","CHF.nprice":"&A2:A&","NOK.price":"&A2:A&","NOK.nprice":"&A2:A&","JPY.price":"&A2:A&","JPY.nprice":"&A2:A&","DKK.price":"&A2:A&","DKK.nprice":"&A2:A&","CZK.price":"&A2:A&","CZK.nprice":"&A2:A&"},"na":{"USD.price":"&A2:A&","USD.nprice":"&A2:A&","CAD.price":"&A2:A&","CAD.nprice":"&A2:A&"},"apac":{"AUD.price":"&A2:A&","AUD.nprice":"&A2:A&","NZD.price":"<string NZD.price>","NZD.nprice":"&A2:A&"}},"misc":{"global.harmonized_system_code":"<string global.harmonized>"}}'
		)
	})

	it("should return a string with an empty object non-object inputs", () => {
		// @ts-ignore
		expect(serializeJsonMetafield()).toBe("{}")
		// @ts-ignore
		expect(serializeJsonMetafield(3)).toBe("{}")
		// @ts-ignore
		expect(serializeJsonMetafield([])).toBe("{}")
	})
})
