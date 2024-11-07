<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="flex h-lvh overflow-auto">
  {@render children()}
</div>
