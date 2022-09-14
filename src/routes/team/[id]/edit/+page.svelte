<script lang="ts">
	import EditableContentPage from "$lib/content/EditableContentPage.svelte"
	import type { TeamContentConfig } from "src/lib/content/team/TeamContent"

	export let data
	export let errors

	let { team } = data
	$: ({ team } = data)
</script>

<EditableContentPage bind:content={team} {errors} isTeam={true}>editng team!</EditableContentPage>
