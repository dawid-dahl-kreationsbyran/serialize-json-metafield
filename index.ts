import inputObject from "./src/inputObject.js"
import serializeEscapedJsonMetafield from "./src/serializeEscapedJsonMetafield.js"
import { filterRegionPricebooks } from "./src/utils/utils.js"

const validArguments: string[] = ["eu", "na", "apac"]

const arg = process.argv[2]

if (validArguments.includes(arg)) {
	switch (arg) {
		case "eu":
			const filteredEuInputObject = filterRegionPricebooks(inputObject, "eu")

			console.log(serializeEscapedJsonMetafield(filteredEuInputObject))

			break
		case "na":
			const filteredNaInputObject = filterRegionPricebooks(inputObject, "na")

			console.log(serializeEscapedJsonMetafield(filteredNaInputObject))

			break
		case "apac":
			const filteredApacInputObject = filterRegionPricebooks(
				inputObject,
				"apac"
			)

			console.log(serializeEscapedJsonMetafield(filteredApacInputObject))

			break
		default:
			break
	}
} else {
	const formatter = new Intl.ListFormat("en", {
		style: "long",
		type: "conjunction",
	})
	const formattedValidArgs = formatter.format(validArguments)

	console.log(
		`When you run the app, please supply an argument indicating which region you are in. Available options are ${formattedValidArgs}. ${
			arg ? `Your argument was -> ${arg}` : ""
		}`
	)
}
