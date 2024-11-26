<script lang="ts" generics="T, Value extends number | string">
	import { clsx } from 'clsx';
	import { twMerge } from 'tailwind-merge';
	type SwitchProps = {
		options: T[];
		getOptionValue: (option: T) => Value;
		// todo generify this string to Snippet in the future
		onChange?: (newValue: Value) => void;
		getOptionLabel: (option: T) => string;
		value: Value | undefined;
		class?: string;
		buttonClasses?: string;
	};

	let {
		options,
		getOptionValue,
		getOptionLabel,
		onChange,
		value = $bindable(),
		class: customClasses,
		buttonClasses
	}: SwitchProps = $props();
</script>

<div class={twMerge('flex w-fit flex-row rounded bg-slate-100 p-1', clsx(customClasses))}>
	{#each options as option, i (i)}
		<button
			class={twMerge(
				clsx(
					'flex rounded px-3 py-1 outline-none focus:ring',
					getOptionValue(option) === value ? 'bg-blue-200 text-blue-900' : 'font-normal',
					buttonClasses
				)
			)}
			onclick={() => {
				if (onChange) {
					onChange(getOptionValue(option));
				} else {
					value = getOptionValue(option);
				}
			}}
		>
			{getOptionLabel(option)}
		</button>
	{/each}
</div>
