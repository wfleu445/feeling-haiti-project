<script lang="ts">
	import '../app.css';
	import Firebase from '$lib/firebase/Firebase.svelte';
	let { children } = $props();
</script>

<Firebase>
	<div class="flex h-lvh flex-col font-serif text-[16pt] leading-relaxed text-slate-800">
		{@render children()}
	</div>
</Firebase>
