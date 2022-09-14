<script lang="ts">
	import { base } from "$app/paths"

	import BackButton from "$lib/UI/BackButton.svelte"
	import Login from "$lib/UI/Login.svelte"

	export let backBtn: boolean = true
	export let logoLink: string = "/"

	const logo = `${base}/haja/logo_horizontal_full.png`
</script>

<div class="flex">
	{#if backBtn}
		<BackButton />
	{/if}
	<a href={base + logoLink}>
		<img src={logo} alt="HAJA" />
	</a>
	<div class="center" />
	<Login />
</div>

<style>
	.flex {
		display: flex;
		flex-direction: horizontal;
	}
	img {
		max-width: 120px;
		cursor: pointer;
	}
	.center {
		flex: 1;
	}
</style>
