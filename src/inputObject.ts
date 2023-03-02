import { InputObject } from "./types/types.js"

const inputObject: InputObject = {
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
			"USD.price": "M2:M",
			"USD.nprice": "N2:N",
			"CAD.price": "O2:O",
			"CAD.nprice": "P2:P",
		},
		apac: {
			"AUD.price": "M2:M",
			"AUD.nprice": "N2:N",
			"NZD.price": "O2:O",
			"NZD.nprice": "O2:P",
		},
	},
	misc: {
		"global.harmonized_system_code": "",
	},
}

export default inputObject
