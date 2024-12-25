<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    // Mock data - replace with real data from your backend
    const playlists = [
        {
            snippet: {
                title: "Data Structures and Algorithms - Full Course",
                channelTitle: "Prof. Smith",
                thumbnails: {
                    medium: {
                        url: "/api/placeholder/320/180"
                    }
                }
            }
        },
        {
            snippet: {
                title: "Advanced Topics in Data Structures",
                channelTitle: "Prof. Johnson",
                thumbnails: {
                    medium: {
                        url: "/api/placeholder/320/180"
                    }
                }
            }
        }
    ];
</script>

<div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-center mb-8">Class Video Playlists</h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each playlists as playlist}
                <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <div class="aspect-video w-full">
                        <img 
                            class="w-full h-full object-cover"
                            src={playlist.snippet.thumbnails.medium.url} 
                            alt={playlist.snippet.title}
                        />
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2 line-clamp-2">
                            {playlist.snippet.title}
                        </h3>
                        <div class="space-y-2">
                            <p class="text-sm text-gray-600">
                                {playlist.snippet.channelTitle}
                            </p>
                            <button class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                VIEW FULL PLAYLIST →
                            </button>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        {#if playlists.length === 0}
            <div class="text-center py-12">
                <span class="material-icons text-4xl text-gray-400 mb-4">
                    video_library
                </span>
                <p class="text-lg text-gray-600">No video playlists available yet</p>
            </div>
        {/if}
    </main>
</div>