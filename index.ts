import inputObject from "./src/inputObject.js"
import serializeEscapedJsonMetafield from "./src/serializeEscapedJsonMetafield.js"

const validArguments: string[] = ["eu", "na", "apac"]

const arg = process.argv[2]

if (validArguments.includes(arg)) {
	console.log(serializeEscapedJsonMetafield(inputObject))
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
