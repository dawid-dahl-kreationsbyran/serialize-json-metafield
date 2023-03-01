const metafieldJsonObject = {
	key: "&A2:A&",
	value: "&D2:D&",
}

const metafieldJsonObject2 = {
	pricebooks: {
		EU: {
			"EUR.price": "<string>",
			"SEK.price": "<string>",
			"GBP.price": "<string>",
			"PLN.price": "<string>",
			"EUR.nprice": "<string>",
			"SEK.nprice": "<string>",
			"GBP.nprice": "<string GBP.nprice>",
			"PLN.nprice": "<string>",
			"CHF.price": "<string>",
			"CHF.nprice": "<string>",
			"NOK.price": "<string>",
			"NOK.nprice": "<string>",
			"JPY.price": "<string>",
			"JPY.nprice": "<string>",
			"DKK.price": "<string>",
			"DKK.nprice": "<string>",
			"CZK.price": "<string>",
			"CZK.nprice": "<string>",
		},
		NA: {
			"USD.price": "<string>",
			"USD.nprice": "<string>",
			"CAD.price": "<string>",
			"CAD.nprice": "<string>",
		},
		APAC: {
			"AUD.price": "<string>",
			"AUD.nprice": "<string>",
			"NZD.price": "<string NZD.price>",
			"NZD.nprice": "<string>",
		},
	},
	misc: {
		"global.harmonized_system_code": "<string global.harmonized>",
	},
}

const isLastItemInArray = (i, arr) => (arr.length === i + 1 ? true : false)

const serializeJsonMetafield = metafieldObject =>
	`{${
		typeof metafieldObject !== "object" && typeof metafieldObject !== "string"
			? ""
			: typeof metafieldObject === "string"
			? metafieldObject
			: Object.entries(metafieldObject).reduce((acc, [k, v], i, arr) => {
					if (typeof v !== "object" && typeof v !== "string") return ""

					if (typeof v === "object") {
						return `${acc}""${k}"":{${serializeJsonMetafield(v)}},`
					} else {
						if (isLastItemInArray(i, arr)) {
							return `${acc}""${k}"":"""${v}"""`
						} else {
							return `${acc}""${k}"":"""${v}""",`
						}
					}
			  }, "")
	}}`

console.log(
	"metafieldJsonObject 1 -> ",
	serializeJsonMetafield(metafieldJsonObject)
)
console.log(
	"metafieldJsonObject 2 -> ",
	serializeJsonMetafield(metafieldJsonObject2)
)
