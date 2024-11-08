<script lang="ts" generics="T, Value extends number | string">
  import {clsx} from 'clsx';
  type SwitchProps = {
    options: T[]
    getOptionValue: (option: T) => Value,
    // todo generify this string to Snippet in the future
    getOptionLabel: (option: T) => string
    value: Value | undefined
  }

  let {options, getOptionValue, getOptionLabel, value = $bindable()}: SwitchProps = $props();
</script>

<div class="flex flex-row rounded bg-slate-100 w-fit overflow-hidden p-1 h-fit font-sans font-semibold">
  {#each options as option, i (i)}
    <button class={clsx('flex py-1 px-3 rounded', getOptionValue(option) === value ? 'bg-blue-600 text-white': 'font-normal')} onclick={() => {
      value = getOptionValue(option);
    }}>
      {getOptionLabel(option)}
    </button>
  {/each}
</div>