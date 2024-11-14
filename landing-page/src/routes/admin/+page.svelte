<script lang="ts">
	import { translations } from '$lib/pages/home/translations';
	import RichText from './RichText.svelte';

	let content = $state<string>('Starting text.');
	$effect(() => {
		console.log('content', content);
	});
</script>

<div class="flex">
	<RichText bind:content />
</div>
