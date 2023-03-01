//import inputObject from "./src/inputObject.js"
//import serializeJsonMetafield from "./src/serializeJsonMetafield.js"
import serializeEscapedJsonMetafield from "./src/serializeEscapedJsonMetafield.js"

console.log(
	serializeEscapedJsonMetafield({
		["EUR.price"]: "A2:A",
		["CAD.nprice"]: 123456,
	})
)
