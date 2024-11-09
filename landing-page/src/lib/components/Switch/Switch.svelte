<script lang="ts" generics="T, Value extends number | string">
	import { clsx } from 'clsx';
	type SwitchProps = {
		options: T[];
		getOptionValue: (option: T) => Value;
		// todo generify this string to Snippet in the future
		getOptionLabel: (option: T) => string;
		value: Value | undefined;
	};

	let { options, getOptionValue, getOptionLabel, value = $bindable() }: SwitchProps = $props();
</script>

<div class="flex w-fit flex-row rounded bg-slate-100 p-1">
	{#each options as option, i (i)}
		<button
			class={clsx(
				'flex rounded px-3 py-1',
				getOptionValue(option) === value ? 'bg-blue-600 text-white' : 'font-normal'
			)}
			onclick={() => {
				value = getOptionValue(option);
			}}
		>
			{getOptionLabel(option)}
		</button>
	{/each}
</div>
