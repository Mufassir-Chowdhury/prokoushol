<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const resource = $page.params.resource;
    const course = $page.params.course;
    
    // Configure based on resource type
    const config = {
        'notes': {
            title: 'Lecture Notes',
            icon: 'edit_note',
            itemIcon: 'description',
            emptyText: 'No lecture notes available yet'
        },
        'question-ct': {
            title: 'Class Test Questions',
            icon: 'help_outline',
            itemIcon: 'quiz',
            emptyText: 'No class test questions available yet'
        },
        'question-term': {
            title: 'Term Final Questions',
            icon: 'help',
            itemIcon: 'assignment',
            emptyText: 'No term final questions available yet'
        }
    }[resource] || {
        title: 'Documents',
        icon: 'folder',
        itemIcon: 'description',
        emptyText: 'No documents available yet'
    };

    // Mock data - replace with real data from your backend
    const sessions = [
        { 
            year: "2024", 
            items: [
                { 
                    title: "Lecture 1: Introduction",
                    date: "Jan 15, 2024",
                    fileSize: "2.3 MB",
                    downloadUrl: "#"
                },
                {
                    title: "Lecture 2: Basic Concepts",
                    date: "Jan 22, 2024",
                    fileSize: "1.8 MB",
                    downloadUrl: "#"
                }
            ]
        },
        { 
            year: "2023", 
            items: [
                {
                    title: "Final Term Question Paper",
                    date: "Dec 15, 2023",
                    fileSize: "500 KB",
                    downloadUrl: "#"
                }
            ]
        }
    ];
</script>

<div class="min-h-screen bg-gray-50">
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="flex items-center justify-center space-x-3 mb-8">
            <span class="material-icons text-3xl text-gray-700">
                {config.icon}
            </span>
            <h1 class="text-3xl font-bold text-center">
                {config.title}
            </h1>
        </div>

        {#if sessions.length > 0}
            <div class="space-y-8">
                {#each sessions as session}
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                        <!-- Year Header -->
                        <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <h2 class="text-xl font-semibold text-gray-900">
                                {session.year}
                            </h2>
                        </div>
                        
                        <!-- Items -->
                        <div class="divide-y divide-gray-200">
                            {#each session.items as item}
                                <div class="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-4">
                                            <span class="material-icons text-gray-600">
                                                {config.itemIcon}
                                            </span>
                                            <div>
                                                <h3 class="font-medium text-lg text-gray-900">
                                                    {item.title}
                                                </h3>
                                                <div class="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                                    <span>{item.date}</span>
                                                    {#if item.fileSize}
                                                        <span>•</span>
                                                        <span>{item.fileSize}</span>
                                                    {/if}
                                                </div>
                                            </div>
                                        </div>
                                        <a 
                                            href={item.downloadUrl} 
                                            class="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                                        >
                                            <span class="material-icons">
                                                download
                                            </span>
                                            <span class="font-medium">Download</span>
                                        </a>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="text-center py-12">
                <span class="material-icons text-4xl text-gray-400 mb-4">
                    {config.icon}
                </span>
                <p class="text-lg text-gray-600">{config.emptyText}</p>
            </div>
        {/if}
    </main>
</div>