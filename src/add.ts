export const add = (x: number, y: number) => {
	try {
		if (typeof x !== "number" || typeof y !== "number") return NaN

		return x + y
	} catch (error) {
		return error
	}
}
