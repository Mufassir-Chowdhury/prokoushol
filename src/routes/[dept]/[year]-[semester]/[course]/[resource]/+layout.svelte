<script lang="ts">
    import type { LayoutData } from './$types';
    import { page } from '$app/stores';
    export let data: LayoutData;
    
    const department = $page.params.dept;
    const yearSem = $page.params.year + '-' + $page.params.semester;
    const course = $page.params.course;
    const resource = $page.params.resource;
</script>

<div class="min-h-screen flex flex-col">
    <!-- Fixed Top Navigation -->
    <div class="fixed top-0 left-0 right-0 h-14 bg-green-100 flex items-center px-4 justify-between z-50">
        <div class="flex items-center space-x-4">
            <a href="/" class="flex items-center space-x-2">
                <div class="font-bold text-xl">SUSTian View</div>
            </a>
            <div class="text-gray-600 font-medium border-l border-gray-300 pl-4 hidden sm:block">
                {data.lists[department]} | {yearSem} | {course}
            </div>
        </div>
        
        <!-- Navigation breadcrumbs -->
        <div class="flex space-x-2">
            <a 
                href={`/${department}`}
                class="text-gray-600 hover:text-gray-900 p-2 rounded transition-colors duration-100"
            >
                Department
            </a>
            <span class="text-gray-400">/</span>
            <a 
                href={`/${department}/${yearSem}`}
                class="text-gray-600 hover:text-gray-900 p-2 rounded transition-colors duration-100"
            >
                Semester
            </a>
            <span class="text-gray-400">/</span>
            <a 
                href={`/${department}/${yearSem}/${course}`}
                class="text-gray-600 hover:text-gray-900 p-2 rounded transition-colors duration-100"
            >
                Course
            </a>
        </div>
    </div>

    <!-- Main Content Area with proper scrolling -->
    <div class="mt-14">
        <slot></slot>
    </div>
</div>