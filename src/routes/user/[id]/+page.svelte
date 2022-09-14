<script lang="ts">
	import ContentContainer from "$lib/content/ContentContainer.svelte"
	import type { UserContentConfig } from "src/lib/content/user/UserContent"

	export let data
	export let errors: string | null

	let { user } = data
	$: ({ user } = data)
</script>

<ContentContainer bind:content={user} {errors} isTeam={false} />
