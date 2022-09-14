<script lang="ts">
	import type { TodoContentConfig } from "./TodoContent"
	import TodoContent from "./TodoContent.svelte"

	export let todo: TodoContentConfig
	export let source: string = null
	export let isTeam: boolean
</script>

<slot />
<TodoContent {todo} {source} {isTeam} />
