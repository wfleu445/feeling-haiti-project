<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-lvh flex-col">
	{@render children()}
</div>
