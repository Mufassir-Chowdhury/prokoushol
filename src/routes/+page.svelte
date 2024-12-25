<script lang="ts">
    import type { PageData } from './$types';
    import Item from './Item.svelte';
    
    export let data: PageData;
    let isMobileMenuOpen = false;
</script>

<main class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <div class="relative h-screen w-full bg-iict bg-cover bg-center">
        <!-- Navigation -->
        <div class="w-full h-20 flex px-4 md:px-10 text-white items-center justify-between">
            <div class="font-bold text-xl">Prokoushol</div>
            
            <!-- Mobile Menu Button -->
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        {#if isMobileMenuOpen}
            <div class="absolute w-full bg-black bg-opacity-90 text-white md:hidden z-50">
                <div class="flex flex-col items-center space-y-4 py-4">
                    <div>SUST</div>
                    <div>GREETING</div>
                    <div>ACADEMIC</div>
                    <div>NOTICE</div>
                    <div>FAQ</div>
                    <div>CONTACT</div>
                </div>
            </div>
        {/if}

        <!-- Hero Content -->
        <div class="absolute inset-0 flex justify-center items-center text-white font-sans">
            <div class="text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4">
                PROKOUSHOL
            </div>
        </div>
    </div>

    <!-- Departments Section -->
    <div class="px-4 md:px-10 py-8 md:py-12">
        <h2 class="font-semibold text-2xl md:text-3xl mb-6 md:mb-8">Departments</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {#each Object.entries(data.departments) as entry}
                <Item {entry} />
            {/each}
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-primary-dark mt-auto">
        <div class="text-white text-center py-4 px-4">
            Copyright @2021 Prokoushol
        </div>
    </footer>
</main>

