<script lang="ts">
	import { base } from "$app/paths"
	import { getUser } from "$lib/content/user/UserContent"
	import UserContent from "$lib/content/user/UserContent.svelte"
	import { myId } from "$lib/firebase/auth"
	import ProtectedPage from "$lib/UI/PageContainers/ProtectedPage.svelte"
	import Loader from "$lib/UI/Widgets/Loader.svelte"
</script>

<ProtectedPage>
	{#await getUser({ id: myId() })}
		<Loader loadingStyle="dots" />
	{:then user}
		{#if typeof user === "string"}
			{user}
		{:else}
			<UserContent {user}>
				<div>
					<a href="{base}/team">
						<button class="button color primary"> My Teams </button>
					</a>
				</div>
			</UserContent>
		{/if}
	{/await}
</ProtectedPage>

<style>
	div {
		margin: 1rem 0;
	}
</style>
