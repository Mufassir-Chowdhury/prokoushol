<script lang="ts">
    import type { LayoutData } from './$types';
    import { page } from '$app/stores';
    export let data: LayoutData;
    
    let isMobileMenuOpen = false;
    const department = $page.params.dept;
    const yearSem = $page.params.year + '-' + $page.params.semester;
    const course = $page.params.course;
</script>

<div class="flex h-screen w-screen">
    <!-- Top Navigation -->
    <div class="absolute top-0 left-0 right-0 h-14 bg-green-100 flex items-center px-4 justify-between z-50">
        <div class="flex items-center space-x-4">
            <a href="/" class="flex items-center space-x-2">
                <div class="font-bold text-xl">SUSTian View</div>
            </a>
            <div class="text-gray-600 font-medium border-l border-gray-300 pl-4 hidden sm:block">
                {data.lists[department]} | {yearSem} | {course}
            </div>
        </div>
        
        <!-- Navigation buttons (similar to previous layouts) -->
        <div class="flex space-x-2">
            <a 
                href={`/${department}`}
                class="text-gray-600 hover:text-gray-900 p-2 rounded transition-colors duration-100"
            >
                Department
            </a>
            <a 
                href={`/${department}/${yearSem}`}
                class="text-gray-600 hover:text-gray-900 p-2 rounded transition-colors duration-100"
            >
                Semester
            </a>
        </div>
    </div>

    <!-- Main Content Area -->
    <div class="w-full justify-center mt-20 mx-4 md:mx-10 rounded-lg">
        <slot></slot>
    </div>
</div>