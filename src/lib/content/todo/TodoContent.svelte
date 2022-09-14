<script lang="ts">
	import type { TodoContentConfig } from "./TodoContent"
	import { updateDocument } from "$lib/firebase/firestore"
	import InlineTodoEditor from "./InlineTodoEditor.svelte"
	import { fade } from "svelte/transition"
	import Icon from "@iconify/svelte"
	import FallbackImage from "$lib/UI/Widgets/FallbackImage.svelte"

	export let todo: TodoContentConfig
	export let source: string
	export let isTeam: boolean

	const width = 30

	let shown = false
	let editing = false
	let input

	$: timeStr = new Date(todo.date).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	})
	$: dateStr = new Date(todo.date).toLocaleDateString([], {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric"
	})
	$: icon = todo.status == "done" ? "akar-icons:circle-check-fill" : "akar-icons:circle"
	$: color = todo.color == "" ? "var(--primary)" : todo.color

	const toggleDone = () => {
		const status = todo.status == "done" ? "todo" : "done"
		todo.status = status

		updateDocument({
			id: todo.id,
			source,
			isTeam,
			type: "todo",
			content: {
				status
			}
		})
	}

	const toggleShowInlineEditor = () => {
		shown = !shown
	}

	const save = () => {
		if (!editing) return

		editing = false

		if (input.value == "") return

		updateDocument({
			type: "todo",
			id: todo.id,
			isTeam,
			source,
			content: {
				title: input.value
			},
			timestamp: "updatedOn"
		})
	}

	const saveOnEnter = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			save()
		}
	}
</script>

{#if todo.status == "[broken]"}
	<FallbackImage alt="todo not found" />
{:else if todo.status != "[deleted]"}
	<div class="flex" out:fade>
		<div class="icon" on:click|preventDefault={toggleDone}>
			<Icon {color} {width} {icon} />
		</div>
		<div class="flex column">
			{#if editing}
				<!-- svelte-ignore a11y-autofocus -->
				<input
					bind:this={input}
					bind:value={todo.title}
					placeholder="Let's do Together!"
					on:blur={save}
					on:keydown={saveOnEnter}
					autofocus
				/>
			{:else}
				<div class="todo flex column" on:click={toggleShowInlineEditor}>
					<p class="bold">{todo.title}</p>
					{#if todo.caption != ""}
						<p class="caption">{todo.caption}</p>
					{/if}
					{#if shown}
						<p class="date">{timeStr} : {dateStr}</p>
					{/if}
				</div>
				<InlineTodoEditor bind:todo bind:editing {shown} {source} {isTeam} />
			{/if}
		</div>
	</div>
{/if}

<style>
	.flex {
		display: flex;
		gap: var(--default-padding);
		align-items: flex-start;
	}
	.column {
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 0.2rem;
	}
	.todo {
		cursor: pointer;
		font-size: 20px;
		margin: auto 0;
	}
	.bold {
		font-weight: bold;
	}
	.caption,
	.date {
		opacity: 0.6;
	}
	.icon {
		cursor: pointer;
		position: relative;
	}
	input {
		width: 100%;
		border: none;
		font-size: 20px;
		font-weight: bold;
		background: transparent;
	}
</style>
