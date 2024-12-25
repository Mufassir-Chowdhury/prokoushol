<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    import type { Subject } from '../../../+layout';
    
    export let data: PageData;
    const department = $page.params.dept;
    const yearSem = $page.params.year + '-' + $page.params.semester;
    
    let selected_course: Subject | undefined;
    let isMobileRailsOpen = false;

    function toggleMobileRails() {
        isMobileRailsOpen = !isMobileRailsOpen;
    }
</script>

<svelte:head>
    <title>{department} | {yearSem}</title>
</svelte:head>

<div class="flex h-full w-full relative">
    <!-- Mobile Rails Toggle Button -->
    <button 
        class="md:hidden absolute top-2 left-2 z-30 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        on:click={toggleMobileRails}
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>

    <!-- Rails Container -->
    <div class="{isMobileRailsOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 absolute md:relative z-20 transition-transform duration-300 ease-in-out">
        <!-- Courses Rail -->
        <div class="w-48 md:w-64 bg-gray-50 border-r border-gray-200 h-full flex flex-col shrink-0">
            <div class="p-4 border-b border-gray-200">
                <div class="font-bold text-gray-800 mb-1">{data.departments[department]}</div>
                <div class="text-sm text-gray-600">{yearSem}</div>
            </div>
            <div class="flex flex-col space-y-1 p-2 overflow-y-auto">
                {#each data.subjects as course}
                    <button 
                        class="p-2 text-left rounded transition-colors duration-100 {selected_course === course ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-200'}"
                        on:click={() => selected_course = course}
                    >
                        {course.name}
                    </button>
                {/each}
            </div>
        </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 bg-white h-full overflow-y-auto">
        {#if selected_course}
            <div class="p-4 md:p-6">
                <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">{selected_course.name}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {#each data.cards as card}
                        <a 
                            href={`/${department}/${yearSem}/${selected_course.value}/${card.value}`}
                            class="block"
                        >
                            <div class="flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200">
                                <span class="material-icons text-3xl md:text-4xl text-gray-700 mb-2 md:mb-3">
                                    {card.icon}
                                </span>
                                <span class="text-base md:text-lg font-medium text-gray-900">{card.name}</span>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        {:else}
            <div class="flex items-center justify-center h-full text-gray-500 p-4 text-center">
                Select a course to view content
            </div>
        {/if}
    </div>
</div>