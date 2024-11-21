<script lang="ts">
	// this needs to be state
	let { content = $bindable() }: { content: string } = $props();
</script>

<div class="flex overflow-hidden rounded border">
	<span
		class="min-h-20 grow resize whitespace-pre-wrap break-words bg-white p-2 leading-snug outline-none"
		contenteditable
		bind:innerHTML={content}
	></span>
</div>
