export const serializeJsonMetafield = (metafieldObject: object): string =>
	typeof metafieldObject !== "object"
		? "{}"
		: Array.isArray(metafieldObject)
		? "{}"
		: !metafieldObject
		? "{}"
		: JSON.stringify(metafieldObject)

export default serializeJsonMetafield
