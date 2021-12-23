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
    $: selected_resource = cards.find((o) => o.value === resource);





    </script>

<svelte:head>
    <title>{ department } | { selected.text } | { selected_course.name } | { selected_resource.name }</title>
</svelte:head>

<h3>{ year }</h3>
<h3>{ semester }</h3>
<h3>{ course }</h3>
<h3>{ resource }</h3>

<a target="_blank" href="https://drive.google.com/uc?export=download&id=13L0PqfnDAatJygE-yaHqObBzW5BVUbX7">Get File</a>