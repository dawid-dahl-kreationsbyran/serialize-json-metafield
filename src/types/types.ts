export type InputObject = {
	pricebooks: {
		eu: {
			"EUR.price": string | number | boolean
			"EUR.nprice": string | number | boolean
			"SEK.price": string | number | boolean
			"SEK.nprice": string | number | boolean
			"GBP.price": string | number | boolean
			"GBP.nprice": string | number | boolean
			"PLN.price": string | number | boolean
			"PLN.nprice": string | number | boolean
			"CHF.price": string | number | boolean
			"CHF.nprice": string | number | boolean
			"NOK.price": string | number | boolean
			"NOK.nprice": string | number | boolean
			"JPY.price": string | number | boolean
			"JPY.nprice": string | number | boolean
			"DKK.price": string | number | boolean
			"DKK.nprice": string | number | boolean
			"CZK.price": string | number | boolean
			"CZK.nprice": string | number | boolean
		}
		na: {
			"USD.price": string | number | boolean
			"USD.nprice": string | number | boolean
			"CAD.price": string | number | boolean
			"CAD.nprice": string | number | boolean
		}
		apac: {
			"AUD.price": string | number | boolean
			"AUD.nprice": string | number | boolean
			"NZD.price": string | number | boolean
			"NZD.nprice": string | number | boolean
		}
	}
	misc?: { ["global.harmonized_system_code"]: string | number | boolean }
}
