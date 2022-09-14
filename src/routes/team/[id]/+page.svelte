<script lang="ts">
	import ContentContainer from "$lib/content/ContentContainer.svelte"
	import type { TeamContentConfig } from "src/lib/content/team/TeamContent"

	export let data
	export let errors

	let { team } = data
	$: ({ team } = data)
</script>

<ContentContainer bind:content={team} {errors} isTeam={true} />
