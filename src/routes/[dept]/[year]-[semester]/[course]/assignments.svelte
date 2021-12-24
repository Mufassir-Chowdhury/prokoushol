<script>
    import { page } from '$app/stores';
    import { options, subjects, lists } from '../../../depts';

    const department = $page.params.dept
    const year = $page.params.year;
    const semester = $page.params.semester;
    const course = $page.params.course;
    const sem = `${year}-${semester}`;

    let assignments = [
        { name: 'Assignment # 20 (Shortest Path in Weighted Graph)', due: 'Due May 31, 2020, 11:59 PM' },
        { name: 'Assignment # 19 (Status of Lights)', due: 'Due May 16, 2020, 11:59 PM'},
        { name: 'Assignment # 18 (Best case of Bubble Sort)', due: 'Due May 10, 2020, 11:59 PM'},
        { name: 'Assignment # 17 (Singly Linked List Delete Functions)', due: 'Due May 10, 2020, 11:59 PM'},
        { name: 'Assignment # 16 (Self Referential Structures)', due: 'Due Apr 30, 2020, 11:59 PM'},
        { name: 'Assignment # 15 (Structures & Unions)', due: 'Due Apr 21, 2020, 11:59 PM'}
    ]

    $: selected = options.find((o) => o.value === sem);
    $: selected_course = subjects.find((o) => o.value === course);
    
</script>

<svelte:head>
    <title>{ department } | { selected.text } | { selected_course.name } | Assignments</title>
</svelte:head>

<body class="mb-8 flex flex-col">
    <h3 class="text-xl font-semibold text-center my-4">Assignments</h3>
    <div class="flex flex-col items-center">
        <h2 class="w-2/3 text-left">Due</h2>
        <div class="w-2/3 flex items-center justify-between py-4 border-b hover:bg-gray-400 rounded-md">
            <div class="flex items-center">
                <span class="material-icons mx-4">
                    assignment
                </span>
                <span class="text-md font-semibold">
                    Assignment # 21 (Data Files)
                </span>
            </div>
            <div class="text-sm text-gray-700 font-light mx-4">
                    Due Dec 29, 2021, 11:59 PM
            </div>
        </div>
        <h2 class="w-2/3 text-left mt-4">Done</h2>

        {#each assignments as assignment}
            <div class="w-2/3 flex items-center justify-between py-4 border-b hover:bg-gray-400 rounded-md">
                <div class="flex items-center">
                    <span class="material-icons mx-4">
                        assignment
                    </span>
                    <span class="text-md font-semibold">
                        {assignment.name}
                    </span>
                </div>
                <div class="text-sm text-gray-700 font-light mx-4">
                        {assignment.due}
                </div>
            </div>
        {/each}
    </div>
</body>