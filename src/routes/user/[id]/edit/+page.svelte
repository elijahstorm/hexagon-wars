<script lang="ts">
	import EditableContentPage from "$lib/content/EditableContentPage.svelte"
	import type { UserContentConfig } from "src/lib/content/user/UserContent"

	export let data
	export let errors: string | null

	let { user } = data
	$: ({ user } = data)
</script>

<EditableContentPage bind:content={user} {errors} isTeam={false}>editing!</EditableContentPage>
