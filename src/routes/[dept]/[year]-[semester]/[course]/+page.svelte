<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const department = $page.params.dept;
    const yearSem = $page.params.year + '-' + $page.params.semester;
    const course = $page.params.course;
</script>

<svelte:head>
    <title>{department} | {yearSem} | {course}</title>
</svelte:head>

<div class="w-full h-full p-4 md:p-6">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-2xl md:text-3xl font-bold mb-6">
            {course} Resources
        </h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {#each data.cards as card}
                <a 
                    href={`/${department}/${yearSem}/${course}/${card.value}`}
                    class="flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
                >
                    <span class="material-icons text-3xl md:text-4xl text-gray-700 mb-2 md:mb-3">
                        {card.icon}
                    </span>
                    <span class="text-base md:text-lg font-medium text-gray-900">{card.name}</span>
                </a>
            {/each}
        </div>
    </div>
</div>