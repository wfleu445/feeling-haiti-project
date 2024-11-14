<script lang="ts">
	import '../app.css';
	import Firebase from '$lib/firebase/Firebase.svelte';
	let { children } = $props();
</script>

<Firebase>
	<div class="flex h-lvh flex-col">
		{@render children()}
	</div>
</Firebase>
