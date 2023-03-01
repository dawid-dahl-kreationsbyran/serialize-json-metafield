import { InputObject } from "../types/types.js"

export const metafield_json_object_simple = {
	key: "A2:A",
	keyTwo: "A2:A",
}

export const metafield_json_object_simple_with_int = {
	key: "A2:A",
	keyTwo: 123456,
}

export const metafield_json_object_simple_with_boolean = {
	key: "A2:A",
	keyTwo: true,
}

export const metafield_json_object_one_level_nesting = {
	pricebooks: {
		key: "A2:A",
		keyTwo: "A2:A",
	},
}

export const metafield_json_object_two_level_nesting: InputObject = {
	pricebooks: {
		eu: {
			"EUR.price": "A2:A",
			"SEK.price": "A2:A",
			"GBP.price": "A2:A",
			"PLN.price": "A2:A",
			"EUR.nprice": "A2:A",
			"SEK.nprice": "A2:A",
			"GBP.nprice": "<string GBP.nprice>",
			"PLN.nprice": "A2:A",
			"CHF.price": "A2:A",
			"CHF.nprice": "A2:A",
			"NOK.price": "A2:A",
			"NOK.nprice": "A2:A",
			"JPY.price": "A2:A",
			"JPY.nprice": "A2:A",
			"DKK.price": "A2:A",
			"DKK.nprice": "A2:A",
			"CZK.price": "A2:A",
			"CZK.nprice": "A2:A",
		},
		na: {
			"USD.price": "A2:A",
			"USD.nprice": "A2:A",
			"CAD.price": "A2:A",
			"CAD.nprice": "A2:A",
		},
		apac: {
			"AUD.price": "A2:A",
			"AUD.nprice": "A2:A",
			"NZD.price": "<string NZD.price>",
			"NZD.nprice": "A2:A",
		},
	},
	misc: {
		"global.harmonized_system_code": "<string global.harmonized>",
	},
}
