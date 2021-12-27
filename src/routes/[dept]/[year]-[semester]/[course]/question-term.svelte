<script>
    import { page } from '$app/stores';
    import { options, subjects, cards } from '../../../depts';
    const department = $page.params.dept
    const year = $page.params.year;
    const semester = $page.params.semester;
    const course = $page.params.course;
    const resource = $page.params.resource;
    const sem = `${year}-${semester}`;
    $: selected = options.find((o) => o.value === sem);
    $: selected_course = subjects.find((o) => o.value === course);

    const sessions = [
        '2019-2020',
        '2018-2019',
        '2017-2018',
        '2016-2017',
        '2015-2016',
    ]

</script>

<svelte:head>
    <title>{ department } | { selected.text } | { selected_course.name } | Term Final Questions</title>
</svelte:head>

<main class="px-10 mb-10">
    <h3 class="w-screen text-xl font-semibold text-center mb-2">Term Final Questions</h3>
    <div class="flex flex-col items-center w-screen">
        <div class="w-2/3 text-left">
            {#each sessions as session}
                <div>
                    <h2>{session}</h2>
                    <a href="https://d2oyykus2uvtq8.cloudfront.net/questions/{session}.pdf">
                        <div class="font-semibold ml-8 my-4">
                            {selected_course.name} term final question: {session}
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</main>