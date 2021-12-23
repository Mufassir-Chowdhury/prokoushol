<script>
    import { page } from '$app/stores';
    import { lists, options, subjects, cards } from '../depts';
    const department = $page.params.dept
    let selected;
    let selected_course;

</script>

<svelte:head>
	<title>{ department }</title>
</svelte:head>
<main class="px-10">
    <h3 class="w-screen text-2xl text-center my-5">{ lists[department] }</h3>
    <form class="w-full flex justify-between">
        <label class="text-gray-700 text-center" for="Semester">
            Semester
            <select bind:value={selected} id="Semester" class="block w-52 my-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                {#each options as option}
                    <option value={option}>
                        {option.text}
                    </option>
                {/each}
            </select>
        </label>
        <label class="text-gray-700 text-center" for="Course">
            Course
            <select bind:value={selected_course} id="Course" class="block my-2 w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                {#each subjects as subject}
                    <option value={subject}>
                        {subject.name}
                    </option>
                {/each}
            </select>
        </label>
    </form>
    <section class="my-10 flex flex-wrap justify-between">
        {#each cards as card}
            <a href={selected? selected_course? `/${department}/${selected.value}/${selected_course.value}/${card.value}` : '#' : '#'}>
                <div class=" items-center justify-center flex flex-col w-48 m-4 h-28 shadow-xl rounded-xl border">
                    <span class="material-icons">
                        { card.icon }
                    </span>                
                    <span class="mt-2">{ card.name }</span>
                </div>
            </a>
        {/each}
    </section>
</main>