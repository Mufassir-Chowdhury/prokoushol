<script lang="ts">
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    let posts;
    let playlists = [];
    let links = [
        'PLOGi5-fAu8bErIxTwvOVjeZosAJCydb0x',
        'PL50C17441DA8A565D',
        'PL-K4T82WsptaboBALkJ5_8aVIfi87VIWs',
        'PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu',
        'PL-K4T82WsptbKLSQSIvfBw-lAG6uhmayh',
        'PLfllocyHVgsRwLkTAhG0E-2QxCf-ozBkk',
        'PLajEH1jD0zp_9Q8wJdvQK_y8pGZ3KSvan',
        'PLlTLLSskDvc9IbD2_CZDE7C2Ffb8dvpSz',
        'PLJicmE8fK0EhX-7k1w5aRaVZJnzmrjzW0',
        'PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN'
    ]
    onMount(async () => {
        links.map(async (link) => {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${link}&key=AIzaSyBElqQmzHw7_76nXlR1kSonknk5KSpEgiI`);
            posts = await response.json();
            playlists = playlists.concat(posts.items);
            console.log(playlists);
            
        })
    })
</script>

<div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-center mb-8">Class Video Playlists</h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each playlists as playlist}
            <div class="m-2">
                <div class=" h-28 aspect-video">
                    <img class="" src="{playlist.snippet.thumbnails.medium.url}" alt="thumbnail">
                </div>
                <div class="h-28 mt-2 flex flex-col justify-between aspect-video font-semibold text-ellipsis">
                    <div class="">
                        {playlist.snippet.title}
                    </div>
                    <div>
                        <div class="text-sm font-light text-gray-700">
                            {playlist.snippet.channelTitle}
                        </div>
                        <div class="text-sm font-semibold text-gray-700">
                            VIEW FULL PLAYLIST
                        </div>
                    </div>
                </div>
            </div>
            {/each}
        </div>

        {#if playlists.length === 0}
            <div class="text-center py-12">
                <span class="material-icons text-4xl text-gray-400 mb-4">
                    video_library
                </span>
                <p class="text-lg text-gray-600">No video playlists available yet</p>
            </div>
        {/if}
    </main>
</div>