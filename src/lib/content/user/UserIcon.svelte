<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { base } from "$app/paths"
	import { myId } from "$lib/firebase/auth"
	import FallbackImage from "$lib/UI/Widgets/FallbackImage.svelte"
	import { getUser, type UserContentConfig } from "./UserContent"

	export let user: UserContentConfig | null = null
	export let size: number = 2

	$: href = base + (user ? `/user/${user.id}` : "/me")
	$: style = `width: ${size}rem; height: ${size}rem;`

	const myHome = () => {
		if (browser) goto(href)
	}
</script>

<div on:click={myHome} class="profile" {style}>
	{#if user == null}
		{#await getUser({ id: myId() }) then user}
			{#if typeof user !== "string"}
				<FallbackImage src={user.picture} alt="user profile" fallback="/icon/person.svg" />
			{/if}
		{/await}
	{:else}
		<FallbackImage src={user?.picture} alt="user profile" fallback="/icon/person.svg" />
	{/if}
</div>

<style>
	.profile {
		border-radius: 50%;
		border: 1px #555 solid;
		overflow: hidden;
		align-self: center;
		cursor: pointer;
		height: 2rem;
		width: 2rem;
		background: var(--bg);
	}
</style>
