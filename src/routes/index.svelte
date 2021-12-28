<script>
	import { data } from './depts.js';
    import '../app.css';
    import Item from './Item.svelte'
</script>

<svelte:head>
	<title>SUSTian View</title>
</svelte:head>
<main>
	<div class="h-screen w-screen bg-iict bg-cover flex flex-col justify-between text-black">
		<script context="module">
			import '../app.css';
		</script>
		
		<div class="w-screen h-20 flex px-10 text-black items-center justify-between">
			<a href="/">
				<div class="font-bold text-xl"></div>
			</a>
			<div class="flex space-x-6 items-center">
				<div>SUST</div>
				<div>GREETING</div>
				<div>ACADEMIC</div>
				<div>NOTICE</div>
				<div>FAQ</div>
				<div>CONTACT</div>
				<div><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				  </svg></div>
			</div>
		</div>
		<div class="px-10 h-full flex justify-between items-center  font-sans text-6xl">
			<div class=" ">
				<h2 class=" font-semibold text-xl">Schools</h2>
				<div>
					{#each Object.entries(data) as entry}
						<Item {entry} />
					{/each}
				</div>
			</div>		
			<div class=" w-2/5 text-right">
				<div class="text-blue-400">আমাদের সম্পর্কে</div>
				<!-- <div>SUSTian View</div> -->
				<div class=" text-lg mt-10">
					যাঁকে চুমু দেওয়া যেত৷ প্রত্যুত্তরে তিনি চুমু দিতেন৷ যাঁর সঙ্গে ঠাট্টা করা যেত৷ তিনিও ঠাট্টা-তামাশা করতেন৷ তাঁর শরীরে ভর দিয়ে কথা বলা যেত৷ আর তিনিও কথা বলতেন অপরজনের কাঁধে কিংবা হাঁটুতে হাত রেখে৷ যাঁর কাছে হারার সব গল্পগুলো বলা যেত৷
				</div>
			</div>
		</div>
		<footer class="h-14  text-center">
			JOIN US
			<span class="material-icons">
				facebook
			</span>    
			<div>Copyright @2021 Prokoushol</div>
		</footer>
	</div>
</main>