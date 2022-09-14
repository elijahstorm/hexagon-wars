<script lang="ts">
	import { deleteDocument, updateDocument } from "$lib/firebase/firestore"
	import CopyToClipboard from "$lib/UI/Widgets/CopyToClipboard.svelte"
	import { Datepicker, Popover } from "svelte-calendar"
	import type { TodoContentConfig } from "./TodoContent"
	import Icon from "@iconify/svelte"
	import { onMount } from "svelte"
	import { base } from "$app/paths"

	export let todo: TodoContentConfig
	export let isTeam: boolean
	export let source: string
	export let shown: boolean
	export let editing: boolean

	let clipboard
	let updateDate
	let smallContent

	const colors = [
		"ffda1e",
		"f2a005",
		"f24503",
		"fe9ad2",
		"9d9bfe",
		"1f99fd",
		"7ac6ff",
		"60dfcd",
		"62ca9c"
	] as const

	$: id = todo.id

	const edit = () => {
		editing = true
	}

	const cal = () => {
		const app = new Popover({
			target: clipboard,
			props: {}
		})
		app.$destroy()
	}

	const del = () => {
		todo.status = "[deleted]"
		deleteDocument({
			type: "todo",
			id,
			isTeam,
			source
		})
	}

	const share = () => {
		const value = `${base}/todo/${source}-${isTeam ? 1 : 0}/${id}`
		const app = new CopyToClipboard({
			target: clipboard,
			props: { value }
		})
		app.$destroy()
	}

	const changeColor = (color: typeof colors[number]) => {
		todo.color = `#${color}`
		updateDocument({
			type: "todo",
			id,
			isTeam,
			source,
			content: {
				color: `ff${color}`
			},
			timestamp: "updatedOn"
		})
	}

	const icons = [
		{
			icon: "entypo:edit",
			action: edit
		},
		{
			icon: "ant-design:calendar-filled", // akar-icons:calendar
			action: cal
		},
		{
			icon: "dashicons:trash", // bxs:trash-alt
			action: del
		},
		{
			icon: "bi:share-fill",
			action: share
		}
	]

	const resize = () => {
		smallContent = window.matchMedia("only screen and (max-width: 30em)").matches
	}

	onMount(resize)
</script>

<svelte:window on:resize={resize} />

{#if shown}
	<div class="flex">
		{#each icons as icon}
			<div on:click={icon.action}>
				{#if icon.action === cal}
					<div class="remove-defaults">
						<Datepicker bind:store={updateDate}>
							<Icon icon={icon.icon} width={"1.25rem"} />
						</Datepicker>
					</div>
				{:else}
					<Icon icon={icon.icon} width={"1.25rem"} />
				{/if}
			</div>
		{/each}
		<div bind:this={clipboard} />
	</div>
	{#if smallContent}
		<div class="flex">
			{#each colors.slice(0, 5) as color (color)}
				<div
					class="color"
					style={`background: #${color};`}
					on:click={() => changeColor(color)}
				/>
			{/each}
		</div>
		<div class="flex">
			{#each colors.slice(5) as color (color)}
				<div
					class="color"
					style={`background: #${color};`}
					on:click={() => changeColor(color)}
				/>
			{/each}
		</div>
	{:else}
		<div class="flex">
			{#each colors as color (color)}
				<div
					class="color"
					style={`background: #${color};`}
					on:click={() => changeColor(color)}
				/>
			{/each}
		</div>
	{/if}
{/if}

<style>
	.flex {
		display: flex;
		gap: 0.75rem;
	}
	.flex > * {
		cursor: pointer;
		width: 1.25rem;
		height: 1.25rem;
	}
	.color {
		overflow: hidden;
		border-radius: 50%;
	}
</style>
