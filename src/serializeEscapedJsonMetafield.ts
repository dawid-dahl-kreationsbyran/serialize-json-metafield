import { isItemAtIndexLastInArray } from "./utils/utils.js"

export const serializeEscapedJsonMetafield = (
	metafieldObject: object
): string =>
	`{${
		typeof metafieldObject !== "object" && typeof metafieldObject !== "string"
			? ""
			: typeof metafieldObject === "string"
			? metafieldObject
			: Object.entries(metafieldObject).reduce((acc, [k, v], i, arr) => {
					if (typeof v === "object") {
						const res = `${acc}""${k}"":${serializeEscapedJsonMetafield(v)}`

						return isItemAtIndexLastInArray(i, arr) ? `${res}` : `${res},`
					} else {
						const val = String(v)

						const res = val.length
							? `${acc}""${k}"":"""&${val}&"""`
							: `${acc}""${k}"":""${val}""`

						return isItemAtIndexLastInArray(i, arr) ? `${res}` : `${res},`
					}
			  }, "")
	}}`

export default serializeEscapedJsonMetafield
