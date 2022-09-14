<script lang="ts">
	import ContentContainer from "$lib/content/ContentContainer.svelte"
	import type { TodoContentConfig } from "src/lib/content/todo/TodoContent"

	export let data
	export let errors: string | null

	let { todo, source, isTeam } = data
	$: ({ todo, source, isTeam } = data)
</script>

<ContentContainer bind:content={todo} {errors} {source} {isTeam} />
