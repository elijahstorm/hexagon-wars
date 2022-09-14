import { error } from "@sveltejs/kit"
import { getUser } from "$lib/content/user/UserContent"
import { pipe } from "$lib/utils"

/** @type {import('./[id]').PageServerLoad} */
export async function load({ params }) {
	const prefilteredData = await getUser({
		id: params.id
	})

	let user = pipe(() => prefilteredData, JSON.stringify, JSON.parse)

	if (typeof user === "string") {
		throw error(404, "todo not found")
	}

	return { user }
}
