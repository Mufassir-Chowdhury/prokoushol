<script context="module">
	import '../../app.css';
</script>

<div class="w-screen h-20 flex px-10 text-black bg-green-100 items-center justify-between">
    <a href="/">
        <div class="font-bold text-xl">SUSTian View</div>
    </a>
    <div class="flex space-x-6 items-center">
        <div>SUST</div>
        <div>GREETING</div>
        <div>ACADEMIC</div>
        <div>NOTICE</div>
        <div>FAQ</div>
        <div>CONTACT</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg></div>
    </div>
</div>


<slot></slot>

<footer class=" bg-primary-dark h-14 text-white text-center py-4">
    <div>Copyright @2021 Prokoushol</div>
</footer>