<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import type { UserContentConfig } from "$lib/content/user/UserContent"
	import FallbackImage from "$lib/UI/Widgets/FallbackImage.svelte"
	import InfoCard from "$lib/UI/Widgets/InfoCard.svelte"
	import TodoList from "$lib/content/todo/TodoList.svelte"
	import { getTodoList } from "$lib/content/todo/TodoList"
	import GlassyButton from "$lib/UI/Widgets/GlassyButton.svelte"
	import { myId } from "$lib/firebase/auth"
	import type { TeamContentConfig } from "$lib/content/team/TeamContent"
	import DateInput from "$lib/UI/Widgets/DateInput.svelte"
	import { base } from "$app/paths"

	export let entity: UserContentConfig | TeamContentConfig
	export let amount: number = 10
	export let isTeam: boolean = false
	export let background: string = null

	const WEEK = 604800000
	const DAY = WEEK / 7

	const { id, title, caption, picture } = entity
	const source = id
	$: src = background ?? picture

	let date

	$: dateRange = {
		start: new Date(($date?.selected ?? new Date()) - WEEK),
		end: new Date(($date?.selected ?? new Date()) + DAY)
	}

	const edit = () => {
		if (browser) goto(`${base}/${isTeam ? "team" : "user"}/${source}/edit`)
	}
</script>

<section>
	<div class="header">
		<div class="description">
			<p>{caption == "" ? "something differenctxs" : caption}</p>
			<slot />
		</div>

		<div class="info"><slot name="info" /></div>
	</div>

	<div class="background">
		<div>
			<FallbackImage {src} alt={`${isTeam ? "team" : "user"} ${title}`} />
		</div>
		<div class="overlay">&nbsp;</div>
		{#if isTeam || source === myId()}
			<div class="btn">
				<GlassyButton callback={edit} />
			</div>
		{/if}
	</div>

	<div class="picture">
		<slot name="picture" />
	</div>

	<div class="card">
		<InfoCard>
			<p slot="title">{title}'s todos!</p>

			<DateInput bind:date />

			{#await getTodoList({ source, isTeam, amount, dateRange }) then todos}
				<TodoList {todos} {source} {isTeam} />
			{/await}
		</InfoCard>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto 6rem 1fr;
		justify-content: space-between;
		align-content: space-between;
		user-select: none;
	}
	.background {
		aspect-ratio: 2 / 1;
		grid-column: 1 / 3;
		grid-row: 2 / 4;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		overflow: hidden;
	}
	.background > * {
		grid-row: 1 / 3;
		grid-column: 1;
	}
	.background > .btn {
		grid-row: 1 / 3;
		grid-column: 1;
		align-self: flex-start;
		justify-self: flex-end;
		margin: 1rem;
		opacity: 0;
		transition: opacity 0.7s ease;
	}
	.background:hover > .btn {
		opacity: 0.8;
	}
	.background > .overlay {
		background-image: linear-gradient(transparent, transparent, #fff2, #fffb, var(--bg));
	}
	.card {
		grid-column: 1 / 3;
		grid-row: 3 / 4;
	}

	.header {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		margin-bottom: 1rem;
		grid-column: 1 / 3;
	}
	.description {
		display: inherit;
	}
	.description > p {
		margin: auto;
	}
	.picture {
		margin-left: 1rem;
		grid-column: 1;
		grid-row: 2;
		align-self: center;
		justify-self: flex-start;
		height: 50%;
		aspect-ratio: 1;
	}
</style>
