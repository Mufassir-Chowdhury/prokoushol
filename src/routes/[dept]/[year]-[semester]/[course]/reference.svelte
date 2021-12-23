<script>
    import { page } from '$app/stores';
    import { options, subjects, lists } from '../../../depts';

    const department = $page.params.dept
    const year = $page.params.year;
    const semester = $page.params.semester;
    const course = $page.params.course;
    const sem = `${year}-${semester}`;

    $: selected = options.find((o) => o.value === sem);
    $: selected_course = subjects.find((o) => o.value === course);

    
    
</script>

<svelte:head>
    <title>{ department } | { selected.text } | { selected_course.name } | Reference Books</title>
</svelte:head>

<main class="mx-10 mb-8 flex flex-wrap bg-gray-200 shadow-2xl">
    <h3 class="w-screen text-xl font-semibold text-center my-4">Reference Books</h3>
    <div class="flex">
        <img class="m-10" src="https://www.mheducation.com/cover-images/Jpeg_400-high/125967651X.jpeg" alt="">
        <div class="flex flex-col justify-between border-l border-red-700 my-10 px-10">
            <div>
                <div class="text-3xl">Discrete Mathematics and Its Applications</div>
                <div class="text-md my-4">By: <span class="text-blue-600">Rosen</span></div>
            </div>
            <div class="text-md my-16">
                <div class="text-md mb-4">Publisher: <span class="text-blue-600"> Mcgraw Hill Education </span></div>
                <div class="text-md my-4">Edition: <span class="text-blue-600">8th Edition, 20 something</span></div>
                <div class="text-md mt-4">Pages: <span class="text-blue-600">1072 pages</span></div>
            </div>
            <button class="w-64 bg-red-700 p-4 rounded-lg shadow-lg shadow-red-300 text-white">
                Click to download 
            </button>
        </div>
    </div>
</main>