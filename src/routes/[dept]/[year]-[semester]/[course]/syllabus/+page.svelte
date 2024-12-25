<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const course = $page.params.course;

    // Mock data - replace with real data from your backend
    const syllabus = {
        courseTitle: "Data Structures and Algorithms",
        courseCode: "CSE 2201",
        credit: 3,
        prerequisites: ["CSE 1201: Introduction to Programming"],
        description: "This course covers fundamental data structures and algorithms...",
        objectives: [
            "Understanding basic data structures and their implementations",
            "Analysis of algorithms and their complexities",
            "Problem-solving using appropriate data structures"
        ],
        topics: [
            {
                title: "Basic Data Structures",
                subtopics: [
                    "Arrays and Linked Lists",
                    "Stacks and Queues",
                    "Trees and Graphs"
                ]
            },
            {
                title: "Algorithm Analysis",
                subtopics: [
                    "Time Complexity",
                    "Space Complexity",
                    "Big-O Notation"
                ]
            }
        ],
        evaluation: {
            classTests: 20,
            midterm: 30,
            finalExam: 40,
            attendance: 10
        },
        textbooks: [
            {
                title: "Introduction to Algorithms",
                authors: "Cormen, Leiserson, Rivest, Stein",
                publisher: "MIT Press",
                edition: "3rd Edition"
            }
        ]
    };
</script>

<div class="bg-gray-100">
    <main class=" px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="bg-white rounded-lg shadow-sm  mb-6">
            <div class="px-6 py-8 border-b border-gray-200">
                <div class="flex items-center justify-between mb-4">
                    <h1 class="text-3xl font-bold text-gray-900">
                        {syllabus.courseTitle}
                    </h1>
                    <button class="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <span class="material-icons">download</span>
                        <span>Download PDF</span>
                    </button>
                </div>
                <div class="flex items-center space-x-6 text-gray-600">
                    <div>Course Code: <span class="font-medium">{syllabus.courseCode}</span></div>
                    <div>Credit Hours: <span class="font-medium">{syllabus.credit}</span></div>
                </div>
            </div>
        </div>

        <!-- Course Content -->
        <div class="space-y-6">
            <!-- Prerequisites -->
            <section class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-xl font-semibold mb-4">Prerequisites</h2>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    {#each syllabus.prerequisites as prereq}
                        <li>{prereq}</li>
                    {/each}
                </ul>
            </section>

            <!-- Description -->
            <section class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-xl font-semibold mb-4">Course Description</h2>
                <p class="text-gray-700">{syllabus.description}</p>
            </section>

            <!-- Objectives -->
            <section class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-xl font-semibold mb-4">Course Objectives</h2>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    {#each syllabus.objectives as objective}
                        <li>{objective}</li>
                    {/each}
                </ul>
            </section>

            <!-- Topics -->
            <section class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-xl font-semibold mb-4">Course Topics</h2>
                <div class="space-y-6">
                    {#each syllabus.topics as topic, i}
                        <div>
                            <h3 class="text-lg font-medium mb-3">
                                {i + 1}. {topic.title}
                            </h3>
                            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-6">
                                {#each topic.subtopics as subtopic}
                                    <li>{subtopic}</li>
                                {/each}
                            </ul>
                        </div>
                    {/each}
                </div>
            </section>

            <!-- Evaluation -->
            <section class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-xl font-semibold mb-4">Evaluation</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="bg-gray-50 p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-blue-600 mb-1">
                            {syllabus.evaluation.classTests}%
                        </div>
                        <div class="text-sm text-gray-600">Class Tests</div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-blue-600 mb-1">
                            {syllabus.evaluation.midterm}%
                        </div>
                        <div class="text-sm text-gray-600">Midterm</div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-blue-600 mb-1">
                            {syllabus.evaluation.finalExam}%
                        </div>
                        <div class="text-sm text-gray-600">Final Exam</div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg text-center">
                        <div class="text-2xl font-bold text-blue-600 mb-1">
                            {syllabus.evaluation.attendance}%
                        </div>
                        <div class="text-sm text-gray-600">Attendance</div>
                    </div>
                </div>
            </section>

            <!-- Textbooks -->
            <section class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-xl font-semibold mb-4">Textbooks</h2>
                <div class="space-y-4">
                    {#each syllabus.textbooks as book}
                        <div class="p-4 border border-gray-200 rounded-lg">
                            <h3 class="font-medium text-lg mb-2">{book.title}</h3>
                            <div class="text-gray-600">
                                <p>Authors: {book.authors}</p>
                                <p>Publisher: {book.publisher}</p>
                                <p>Edition: {book.edition}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </section>
        </div>
    </main>
</div>