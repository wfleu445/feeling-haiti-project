<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	// this needs to be state
	let { content = $bindable(), class: customClasses = '' }: { content: string; class?: string } =
		$props();
</script>

<div class={twMerge('flex overflow-hidden rounded border focus-within:ring', customClasses)}>
	<span
		class="min-h-20 grow resize whitespace-pre-wrap break-words bg-white p-2 leading-snug outline-none"
		contenteditable
		bind:innerHTML={content}
	></span>
</div>
