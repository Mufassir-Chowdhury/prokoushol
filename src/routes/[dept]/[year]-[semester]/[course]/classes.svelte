<script>
    import { page } from '$app/stores';
    import { options, subjects, lists } from '../../../depts';
    import {onMount} from 'svelte';

    const department = $page.params.dept
    const year = $page.params.year;
    const semester = $page.params.semester;
    const course = $page.params.course;
    const sem = `${year}-${semester}`;

    $: selected = options.find((o) => o.value === sem);
    $: selected_course = subjects.find((o) => o.value === course);

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

<svelte:head>
    <title>{ department } | { selected.text } | { selected_course.name } | Class Videos</title>
</svelte:head>

<main class="p-10 flex flex-wrap">
    <h3 class="w-screen text-2xl text-center">{ lists[department] }</h3>
    <form class="w-full flex justify-between mb-4">
        <label class="text-gray-700 text-center" for="Semester">
            Semester
            <select disabled bind:value={selected} id="Semester" class="block bg-gray-300 w-52 my-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                {#each options as option}
                    <option value={option}>
                        {option.text}
                    </option>
                {/each}
            </select>
        </label>
        <label class="text-gray-700 text-center" for="Course">
            Course
            <select disabled bind:value={selected_course} id="Course" class="block bg-gray-300 my-2 w-52 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                {#each subjects as subject}
                    <option value={subject}>
                        {subject.name}
                    </option>
                {/each}
            </select>
        </label>
    </form>
    <h3 class="w-screen text-xl font-semibold text-center mb-2">Class Videos</h3>
    <div class="flex flex-wrap justify-center">
        {#if playlists}
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
        {/if}
    </div>
</main>