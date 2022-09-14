<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { base } from "$app/paths"
	import { onMount } from "svelte"

	const images = [
		{
			src: "/showcase/01-1.jpg",
			alt: "Share and connect with each other"
		},
		{
			src: "/showcase/01-2.jpg",
			alt: "Welcome to HAJA"
		}
	]

	let shown = 0,
		img,
		style = ""

	const next = () => {
		if (shown == images.length - 1) if (browser) goto(`${base}/login`)

		shown++
	}

	const resize = () => {
		style = `width: ${(img.offsetHeight * 6) / 9}px;`
	}

	onMount(() => {
		resize()

		setTimeout(resize, 500)
	})
</script>

<svelte:window on:resize={resize} />

<section on:click={next}>
	<div class="background">
		<div>&nbsp;</div>
		<div>&nbsp;</div>
	</div>
	>
	{#each images as image, index}
		<img
			bind:this={img}
			{style}
			class:shown={shown == index}
			src={base + image.src}
			alt={image.alt}
		/>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		overflow: hidden;
	}
	.background {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
	}
	.background > div {
		background-color: var(--primary);
	}
	.background > div:first-child {
		background-color: var(--secondary);
	}
	img {
		transition: opacity 0.5s ease;
		opacity: 0;
		height: 100vh;
		max-width: 100vw;
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		justify-self: center;
		align-self: center;
		cursor: pointer;
	}
	.shown {
		opacity: 1;
	}
</style>
