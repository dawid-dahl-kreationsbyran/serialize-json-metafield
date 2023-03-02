import inputObject from "../inputObject.js"

export type Object = { [key: string]: string }

export type Region = "eu" | "na" | "apac"

export type Pricebook =
	| InputObject["pricebooks"]["eu"]
	| InputObject["pricebooks"]["na"]
	| InputObject["pricebooks"]["apac"]

const euPricebook = inputObject["pricebooks"]["eu"]!
const naPricebook = inputObject["pricebooks"]["na"]!
const apacPricebook = inputObject["pricebooks"]["apac"]!

export type EuPricebook = typeof euPricebook
export type NaPricebook = typeof naPricebook
export type ApacPricebook = typeof apacPricebook

export type PricebooksKey =
	| keyof typeof euPricebook
	| keyof typeof naPricebook
	| keyof typeof apacPricebook

export type EuPricebooksKey = keyof typeof euPricebook
export type NaPricebooksKey = keyof typeof naPricebook
export type ApacPricebooksKey = keyof typeof apacPricebook

export type InputObject = {
	pricebooks: {
		eu?: {
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
		na?: {
			"USD.price": string | number | boolean
			"USD.nprice": string | number | boolean
			"CAD.price": string | number | boolean
			"CAD.nprice": string | number | boolean
		}
		apac?: {
			"AUD.price": string | number | boolean
			"AUD.nprice": string | number | boolean
			"NZD.price": string | number | boolean
			"NZD.nprice": string | number | boolean
		}
	}
	misc: { ["global.harmonized_system_code"]?: string | number | boolean }
}
