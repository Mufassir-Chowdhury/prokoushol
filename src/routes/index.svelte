<script>
	import { data } from './depts.js';
    // import '../app.css';
    import Item from './Item.svelte'
</script>

<svelte:head>
	<title>Prokoushol</title>
</svelte:head>
<main>
	<div class="h-screen w-screen bg-iict bg-cover">
		<div class=" h-full flex justify-center items-center text-white font-sans text-6xl">
			<div>PROKOUSHOL</div>
		</div>
	</div>
	<div class="m-10">
		<h2 class=" font-semibold text-3xl my-5">Departments</h2>
		<div>
			{#each Object.entries(data) as entry}
			<Item {entry} />
			{/each}
		</div>
	</div>
	<img src="https://prokoushol.s3.ap-southeast-1.amazonaws.com/cloudfront-test-image.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCmFwLXNvdXRoLTEiSDBGAiEA1H7HBOBonTQWpTZrPJt%2BwnbIk3jqJHacF3F5%2Fbl2%2FTQCIQC2a7Oxdu3I66nq3K9NUvGQzCNDJFFvIPTC6jhOxuZanCr2AghwEAAaDDA2ODQ0ODQ3ODc3OCIMr9KUptYTsuCw0qSSKtMC1hOyo8C5l%2B6oIUfQLWlnd1ojC8idnao9h0TrUH5ut47yC3cd6zYGUj%2FBLszSc2FC3l6fuCCgjEGehjNYsdrwfEpA%2B2hW0Mqdt7NvZ%2F%2FYRpLBKSyeC99TfNOd0FngrMERx5afHmjDgaQEn1n1lW9YmdlUWz9AmV91HyCc0jB3V2WEt%2FHw5nTVS9%2Bn5CxFbunxq0tU1isvDSkZzpWReFdsIE%2BMaVRGb8%2Bw9gB%2F4MwKE5Nngkz0hLN03ucdT8LqFIxKCx93zhKyHdBWYuRrgNOrRF6KpVIa96UpzALNE1A7aULub%2Bi8aqmBVArkjkq8XRJYWwjwmy0gKqpHmX6PSihUmZceDAOhKTV9i78SD15pdOxmNFOE91mWuocJ4ntLXRoYgWBDy9G4m1oXk3auk4usSr55KmhpXX74scipMICD5Zswu6o%2Bh%2FJvS0aWmA5v3WOdzdgjMN7%2Bmo4GOrICAm43JROb%2BU%2FOIdHknwavYJi7%2FEHGoRtw6uAyxyDv%2FprrOdrFmVpH1AOmlUPTrbM3qtnZ%2BnE9pcCZnqHJPI2dTwjFwDoIqChG%2FNu7Zn1NWEagH1%2FxDB%2B9ymdwn8oGr9xLCPik%2B1GVM1VfBupb0ZXo1ztbomamgz08B1LvO%2FUcwaH4V1LvV%2FpNg3T4chNBuggXPVJKOmsMTzPX95m2CnSQ4Tq%2BEWN%2BI9rpNlza4TQdIKF92DRnbuaG0dMvDx3fg0LqEN2vSGc1Jn5AdNntXOquzYtHR5jDKYN6FXhhsAntrEG%2FPJrUGON8iQuwtr4R%2B8%2FlB9DeEj3jNNcwsw94D%2FntHo76J9kT2xxhhjsGCjUNq3mykOP%2F%2F%2FInGYb0aXvnjGzRzAWQTlMfVHpwkFbct8FsWIYE&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211225T073340Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ736Y4Y5FWXMBBPK%2F20211225%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=8364c106a0f1b543ea5cb8bf087ece59ab606f18a6062f0ae7ac9a1e4e887a68" alt="">
</main>