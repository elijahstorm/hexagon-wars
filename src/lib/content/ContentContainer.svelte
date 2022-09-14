<script lang="ts">
	import Casing from "$lib/UI/PageContainers/Casing.svelte"
	import Loader from "$lib/UI/Widgets/Loader.svelte"
	import type { ContentConfig } from "./Content"
	import Content from "./Content.svelte"

	export let content: Promise<ContentConfig | null>
	export let errors: string | null
	export let source: string = null
	export let isTeam: boolean
</script>

<svelte:head>
	{#await content then content}
		{#if content}
			<title>{content.title} | Haja: Do Together</title>
		{/if}
	{/await}
</svelte:head>

<Casing>
	{#if content}
		{#await content}
			<Loader />
		{:then content}
			<Content {content} source={source ?? content.id} {isTeam} />
		{/await}
	{:else}
		<p>{errors ?? "Sorry, we can't find what you're looking for 🔎"}</p>
		<p>You may need to login to view this content</p>
	{/if}
</Casing>

<style>
	p {
		margin-top: 2rem;
		width: 100%;
	}
</style>
