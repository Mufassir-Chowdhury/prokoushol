<script>
	import { data } from './depts.js';
    // import '../app.css';
    import Item from './Item.svelte'
</script>

<svelte:head>
	<title>Prokoushol</title>
</svelte:head>
<main>
	<div class="h-screen w-screen bg-iict bg-cover">
		<div class=" h-full flex justify-center items-center text-white font-sans text-6xl">
			<div>PROKOUSHOL</div>
		</div>
	</div>
	<div class="m-10">
		<h2 class=" font-semibold text-3xl my-5">Departments</h2>
		<div>
			{#each Object.entries(data) as entry}
			<Item {entry} />
			{/each}
		</div>
	</div>
</main>
