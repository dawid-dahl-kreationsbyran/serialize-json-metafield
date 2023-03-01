import {
	metafieldJsonObject,
	metafieldJsonObject2,
} from "./test-data/test-data.js"
import { describe, it, expect } from "vitest"
import { serializeJsonMetafield } from "./serializeJsonMetafield.js"

describe("serializeJsonMetafield", () => {
	const metafieldJsonObjectExpected = metafieldJsonObject
	const metafieldJsonObject2Expected = metafieldJsonObject2

	it("should return a properly formatted JSON string for the corresponding input object", () => {
		expect(serializeJsonMetafield(metafieldJsonObjectExpected)).toBe(
			'{""key"":"""&A2:A&""",""value"":"""&D2:D&"""}'
		)
		expect(serializeJsonMetafield(metafieldJsonObject2Expected)).toBe(
			'{""pricebooks"":{""EU"":{""EUR.price"":"""<string>""",""SEK.price"":"""<string>""",""GBP.price"":"""<string>""",""PLN.price"":"""<string>""",""EUR.nprice"":"""<string>""",""SEK.nprice"":"""<string>""",""GBP.nprice"":"""<string GBP.nprice>""",""PLN.nprice"":"""<string>""",""CHF.price"":"""<string>""",""CHF.nprice"":"""<string>""",""NOK.price"":"""<string>""",""NOK.nprice"":"""<string>""",""JPY.price"":"""<string>""",""JPY.nprice"":"""<string>""",""DKK.price"":"""<string>""",""DKK.nprice"":"""<string>""",""CZK.price"":"""<string>""",""CZK.nprice"":"""<string>"""},""NA"":{""USD.price"":"""<string>""",""USD.nprice"":"""<string>""",""CAD.price"":"""<string>""",""CAD.nprice"":"""<string>"""},""APAC"":{""AUD.price"":"""<string>""",""AUD.nprice"":"""<string>""",""NZD.price"":"""<string NZD.price>""",""NZD.nprice"":"""<string>"""},},""misc"":{""global.harmonized_system_code"":"""<string global.harmonized>"""},}'
		)
	})

	it("should return an empty string for non-object inputs", () => {
		// @ts-ignore
		expect(serializeJsonMetafield()).toBe("{}")
	})
})
