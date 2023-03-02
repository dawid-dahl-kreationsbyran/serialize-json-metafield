import {
	ApacPricebook,
	EuPricebook,
	InputObject,
	NaPricebook,
	Object,
	Region,
} from "../types/types.js"

export const isItemAtIndexLastInArray = (i: number, arr: unknown[]) =>
	arr.length === i + 1 ? true : false

export const emptyPricebook = (pricebook: Object) => {
	if (!pricebook) return {}

	for (const currency in pricebook) {
		pricebook[currency] = ""
	}

	return pricebook
}

export const filterRegionPricebooks = (
	inputObject: InputObject,
	region: Region
): InputObject => {
	if (!inputObject) return { pricebooks: {}, misc: {} }

	const inputObjectCopy = inputObject

	const euPricebook = inputObjectCopy.pricebooks["eu"]
	const naPricebook = inputObjectCopy.pricebooks["na"]
	const apacPricebook = inputObjectCopy.pricebooks["apac"]

	switch (region) {
		case "eu":
			inputObjectCopy.pricebooks.na = emptyPricebook(
				naPricebook as Object
			) as NaPricebook
			inputObjectCopy.pricebooks.apac = emptyPricebook(
				apacPricebook as Object
			) as ApacPricebook

			break
		case "na":
			inputObjectCopy.pricebooks.eu = emptyPricebook(
				euPricebook as Object
			) as EuPricebook
			inputObjectCopy.pricebooks.apac = emptyPricebook(
				apacPricebook as Object
			) as ApacPricebook

			break
		case "apac":
			inputObjectCopy.pricebooks.eu = emptyPricebook(
				euPricebook as Object
			) as EuPricebook
			inputObjectCopy.pricebooks.na = emptyPricebook(
				naPricebook as Object
			) as NaPricebook
			break

		default:
			break
	}

	return inputObjectCopy
}
