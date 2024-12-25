<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    // Mock data - replace with real data from your backend
    const dueAssignments = [
        {
            id: 1,
            name: "Assignment #3: Graph Algorithms",
            due: "Dec 31, 2024, 11:59 PM",
            files: ["assignment3.pdf", "test_cases.zip"]
        }
    ];

    const completedAssignments = [
        {
            id: 1,
            name: "Assignment #2: Dynamic Programming",
            due: "Dec 15, 2024, 11:59 PM",
            submitted: "Dec 14, 2024, 10:30 PM",
            grade: "95/100"
        },
        {
            id: 2,
            name: "Assignment #1: Sorting Algorithms",
            due: "Nov 30, 2024, 11:59 PM",
            submitted: "Nov 29, 2024, 9:15 PM",
            grade: "90/100"
        }
    ];
</script>

<div class="min-h-screen bg-gray-50">
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-center mb-8">Course Assignments</h1>
        
        <!-- Due Assignments -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-red-600">Due</h2>
            <div class="space-y-4">
                {#each dueAssignments as assignment}
                    <div class="bg-white rounded-lg shadow-sm border border-red-100 hover:border-red-300 transition-colors duration-200">
                        <div class="p-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-4">
                                    <span class="material-icons text-red-600">
                                        assignment
                                    </span>
                                    <div>
                                        <h3 class="font-semibold text-lg">
                                            {assignment.name}
                                        </h3>
                                        <p class="text-sm text-red-600 font-medium">
                                            Due: {assignment.due}
                                        </p>
                                    </div>
                                </div>
                                <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                                    Submit
                                </button>
                            </div>
                            {#if assignment.files}
                                <div class="mt-4 flex flex-wrap gap-2">
                                    {#each assignment.files as file}
                                        <a 
                                            href="#" 
                                            class="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            <span class="material-icons text-sm">
                                                download
                                            </span>
                                            <span>{file}</span>
                                        </a>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Completed Assignments -->
        <div>
            <h2 class="text-xl font-semibold mb-4 text-gray-900">Completed</h2>
            <div class="space-y-4">
                {#each completedAssignments as assignment}
                    <div class="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                        <div class="p-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-4">
                                    <span class="material-icons text-green-600">
                                        check_circle
                                    </span>
                                    <div>
                                        <h3 class="font-semibold text-lg">
                                            {assignment.name}
                                        </h3>
                                        <p class="text-sm text-gray-600">
                                            Submitted: {assignment.submitted}
                                        </p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="font-semibold text-green-600">
                                        {assignment.grade}
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        Due: {assignment.due}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        {#if dueAssignments.length === 0 && completedAssignments.length === 0}
            <div class="text-center py-12">
                <span class="material-icons text-4xl text-gray-400 mb-4">
                    assignment
                </span>
                <p class="text-lg text-gray-600">No assignments available yet</p>
            </div>
        {/if}
    </main>
</div>