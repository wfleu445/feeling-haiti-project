<script lang="ts">
	import Switch from '$lib/components/Switch/Switch.svelte';
	import {
		languageOptions,
		type TranslationObject,
		type LanguageCode
	} from '$lib/utils/translation/translationType';
	import RichText from './RichTextEditor.svelte';

	type LandingPageStringEditorProps = {
		label: string;
		content: TranslationObject;
	};
	let { label: title, content = $bindable<TranslationObject>() }: LandingPageStringEditorProps =
		$props();
	let language: LanguageCode = $state('ht-HT');
</script>

<div class="flex w-full flex-col gap-2 p-2 pb-5">
	<div class="flex w-full flex-row items-end justify-between">
		<h2 class="">
			{title}
		</h2>
		<Switch
			options={languageOptions}
			getOptionValue={(option) => option.code}
			getOptionLabel={(option) => option.displayName}
			bind:value={language}
			class="h-10 bg-white"
			buttonClasses="p-1 text-lg"
		/>
	</div>
	<RichText bind:content={content[language]} class="border-none" />
</div>
