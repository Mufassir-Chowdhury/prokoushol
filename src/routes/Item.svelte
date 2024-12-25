<script>
	import { slide } from "svelte/transition";
	export let entry
	let isOpen = false
	const toggle = () => isOpen = !isOpen
</script>
<style>
	svg { transition: transform 0.2s ease-in;
	}
	
	[aria-expanded=true] svg { transform: rotate(0.25turn); }
</style>
<div class="border border-red-900 rounded-lg mt-2">
    <button class="flex flex-row items-baseline" on:click={toggle} aria-expanded={isOpen}>
        <!-- <span>
            <svg style="tran"  width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>
        </span> -->
        <span class=" text-lg m-2">
            {entry[0]} 
        </span>
    </button>
    {#if isOpen}
    <ul transition:slide={{ duration: 300 }} class="mx-8 text-sm">
        {#each entry[1] as item}
        <a href={`${item[1]}`}>
            <li class="">
                <span class="material-icons text-xs">
                    adjust
                </span>    
    
                {item[0]}</li>
        </a>
        {/each}
    </ul>
    {/if}
</div>
