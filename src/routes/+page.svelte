<script lang="ts">
	import { base } from "$app/paths"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"
	import Grid from "$lib/UI/Widgets/Grid.svelte"
	import Modal from "$lib/UI/Widgets/Modal.svelte"

	const imgs = [
		"/showcase/todos1.png",
		"/showcase/10.jpg",
		"/showcase/11-3.jpg",
		"/showcase/11-8.jpg",
		"/showcase/todos2.png",
		"/showcase/11-12.jpg"
	]

	const cols = 3
	const gap = "2rem 1rem"
</script>

<Casing logoLink={"/demo"} backBtn={false}>
	<div>
		<a href="{base}/demo">Let's Do Together -- Today!</a>
	</div>

	<p>
		A cross-platform, sharable todo app powered up by the creation of teams and groups of
		friends to work together to accomplish common goals -- or just to plan a fun day at the
		park. Haja uses simplicity to feel organic, and fun and extremely easy to use!
	</p>
	<p>
		Haja [하자] means "Let's do it together" in Korean. During my time in Korea, I was really
		impacted by how beautiful their systems are. From the language, to architecture, to media
		and tech design. There is so much uniquness that can be felt in the designs of South Korea.
		It can best be described as Elegant Simplicity. I wanted to try and capture that sense of
		grandeur in simplicity. Under the hood, making a product that feels simple and elegant might
		require a lot of complexities and a lot of necessary abstractions.
	</p>
	<p>
		Hop in via the phone app, or just dive in the browser. Share your personal todo list, or
		keep it private. You can combine your efforts on a collabrative team to help you track with
		your friends what is getting done. You can keep track of all the requirements on a school
		project, or organize a fund raiser, or plan a picnic and figure out what still needs to be
		bought!
	</p>

	<div>
		<Grid {cols} {gap} items={imgs} let:item let:index>
			<Modal caption={item}>
				<img src={base + item} alt="showcase image {index}" />
			</Modal>
		</Grid>
	</div>
</Casing>

<style>
	div {
		text-align: center;
		margin: 1rem 0;
		padding: 0.5rem 0;
	}
	a {
		font-size: 30px;
		color: var(--primary);
		text-decoration: none;
		font-weight: bold;
	}
	a:hover {
		border-bottom: 4px solid;
	}
	img {
		max-height: 100%;
	}
	p {
		margin: 1rem 0;
		text-indent: 2rem;
	}

	p:nth-child(odd) {
		color: #000a;
	}
</style>
