const isItemAtIndexLastInArray = (i: number, arr: unknown[]) =>
	arr.length === i + 1 ? true : false

export const serializeJsonMetafield = (metafieldObject: object): string =>
	`{${
		typeof metafieldObject !== "object" && typeof metafieldObject !== "string"
			? ""
			: typeof metafieldObject === "string"
			? metafieldObject
			: Object.entries(metafieldObject).reduce((acc, [k, v], i, arr) => {
					if (typeof v !== "object" && typeof v !== "string") return ""

					if (typeof v === "object") {
						return `${acc}""${k}"":${serializeJsonMetafield(v)},`
					} else {
						if (isItemAtIndexLastInArray(i, arr)) {
							return `${acc}""${k}"":"""${v}"""`
						} else {
							return `${acc}""${k}"":"""${v}""",`
						}
					}
			  }, "")
	}}`

export default serializeJsonMetafield
