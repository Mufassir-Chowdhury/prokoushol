<script>
    import {onMount} from 'svelte';
    let posts;
    let playlists;
    onMount(async () => {
        const response = await fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PL50C17441DA8A565D&key=AIzaSyBElqQmzHw7_76nXlR1kSonknk5KSpEgiI');
        posts = await response.json();
        playlists = posts.items;
    })
    
</script>


<main>
{#if playlists}
    {playlists.length}
    {#each playlists as playlist}
    <div>
        <div>
            <img class="" src="{playlist.snippet.thumbnails.medium.url}" alt="thumbnail">
        </div>
        <div>
            {playlist.snippet.title}
        </div>
    </div>
    {/each}
{/if}

</main>