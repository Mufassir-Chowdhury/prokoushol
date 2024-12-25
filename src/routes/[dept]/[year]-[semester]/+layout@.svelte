<script lang="ts">
    import type { LayoutData } from './$types';
    import { page } from '$app/stores';
    export let data: LayoutData;
    
    let isMobileMenuOpen = false;
    const department = $page.params.dept;
    const yearSem = $page.params.year + '-' + $page.params.semester;
</script>

<div class="flex h-screen w-screen overflow-hidden">
    <!-- Top Navigation -->
    <div class="absolute top-0 left-0 right-0 h-14 bg-green-100 flex items-center px-4 justify-between z-50">
        <div class="flex items-center space-x-4">
            <a href="/" class="flex items-center space-x-2">
                <div class="font-bold text-xl">SUSTian View</div>
            </a>
            <div class="text-gray-600 font-medium border-l border-gray-300 pl-4 hidden sm:block">
                {data.lists[department]} | Year {yearSem}
            </div>
        </div>
        
        <!-- Mobile menu button -->
        <button 
            class="md:hidden"
            on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6 items-center">
            <div>SUST</div>
            <div>GREETING</div>
            <div>ACADEMIC</div>
            <div>NOTICE</div>
            <div>FAQ</div>
            <div>CONTACT</div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    </div>

    <!-- Mobile Navigation Menu -->
    {#if isMobileMenuOpen}
        <div class="absolute top-14 left-0 right-0 bg-green-100 md:hidden z-40">
            <div class="flex flex-col p-4 space-y-4">
                <div>SUST</div>
                <div>GREETING</div>
                <div>ACADEMIC</div>
                <div>NOTICE</div>
                <div>FAQ</div>
                <div>CONTACT</div>
            </div>
        </div>
    {/if}

    <!-- Main Content Area -->
    <div class="flex w-full mt-14">
        <slot></slot>
    </div>
</div>
