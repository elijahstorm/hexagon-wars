<script lang="ts">
	import ImageUploader from "$lib/UI/Widgets/ImageUploader.svelte"
	import type { TeamContentConfig } from "./TeamContent"

	export let team: TeamContentConfig
	export let isTeam: boolean

	const { id } = team
	const source: string = null
</script>

<slot />
<ImageUploader src={team.picture} alt="background" {id} {source} {isTeam} />
