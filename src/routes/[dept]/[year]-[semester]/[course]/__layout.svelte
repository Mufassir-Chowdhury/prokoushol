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

<main class="p-10 flex flex-wrap">
    <h3 class="w-screen text-2xl text-center">{ lists[department] }</h3>
    <form class="w-full flex justify-between mb-4">
        <label class="text-gray-700 text-center" for="Semester">
            Semester
            <select disabled bind:value={selected} id="Semester" class="block bg-gray-300 w-52 my-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                {#each options as option}
                    <option value={option}>
                        {option.text}
                    </option>
                {/each}
            </select>
        </label>
        <label class="text-gray-700 text-center" for="Course">
            Course
            <select disabled bind:value={selected_course} id="Course" class="block bg-gray-300 my-2 w-52 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                {#each subjects as subject}
                    <option value={subject}>
                        {subject.name}
                    </option>
                {/each}
            </select>
        </label>
    </form>
</main>

<slot></slot>