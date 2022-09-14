/** @type {import('./[id]').PageServerLoad} */
export async function load({ params }) {
	let error: string | null = null

	const { requestLink } = params
	let validation: string = ""

	return { validation, error, requestLink }
}
