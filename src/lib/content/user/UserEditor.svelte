<script lang="ts">
	import ImageUploader from "$lib/UI/Widgets/ImageUploader.svelte"
	import type { UserContentConfig } from "./UserContent"

	export let user: UserContentConfig
	export let isTeam: boolean

	const { id } = user
	const source: string = null
</script>

<slot />
<ImageUploader src={user.picture} alt="profile" {id} {source} {isTeam} />
<ImageUploader src={user.background} dest={"background"} alt="background" {id} {source} {isTeam} />
