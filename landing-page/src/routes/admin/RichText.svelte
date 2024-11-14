<script lang="ts">
	// this needs to be state
	let { content = $bindable() }: { content: string } = $props();
</script>

<div class="flex">
	<span class="flex grow whitespace-pre-wrap break-words" contenteditable bind:innerHTML={content}
	></span>
</div>
