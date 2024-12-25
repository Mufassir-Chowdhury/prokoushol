<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    // Mock data - replace with real data from your backend
    const books = [
        {
            title: "Introduction to Algorithms",
            authors: ["Thomas H. Cormen", "Charles E. Leiserson"],
            publisher: "MIT Press",
            edition: "4th Edition, 2022",
            pages: 1312,
            coverImage: "/api/placeholder/300/400",
            downloadUrl: "#"
        },
        {
            title: "Computer Networks",
            authors: ["Andrew S. Tanenbaum"],
            publisher: "Pearson",
            edition: "6th Edition, 2021",
            pages: 960,
            coverImage: "/api/placeholder/300/400",
            downloadUrl: "#"
        }
    ];
</script>

<div class="min-h-screen bg-gray-50">
    <main class="px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-center mb-8">Reference Books</h1>
        
        <div class="space-y-8">
            {#each books as book}
                <div class="bg-white rounded-lg shadow-lg">
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-1/4 p-6 flex items-center justify-center bg-gray-50">
                            <img 
                                class="max-w-xs rounded-lg shadow-md"
                                src={book.coverImage} 
                                alt={book.title}
                            />
                        </div>
                        <div class="md:w-3/4 p-6 md:p-8 flex flex-col">
                            <div class="flex-grow">
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">
                                    {book.title}
                                </h2>
                                <div class="space-y-4 text-gray-600">
                                    <p class="text-lg">
                                        By: <span class="text-blue-600">{book.authors.join(", ")}</span>
                                    </p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <p>Publisher: <span class="text-blue-600">{book.publisher}</span></p>
                                        <p>Edition: <span class="text-blue-600">{book.edition}</span></p>
                                        <p>Pages: <span class="text-blue-600">{book.pages}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6">
                                <a 
                                    href={book.downloadUrl}
                                    class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                                >
                                    Download Book
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        {#if books.length === 0}
            <div class="text-center py-12">
                <span class="material-icons text-4xl text-gray-400 mb-4">
                    menu_book
                </span>
                <p class="text-lg text-gray-600">No reference books available yet</p>
            </div>
        {/if}
    </main>
</div>