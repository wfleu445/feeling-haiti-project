<script lang="ts">
	import Switch from '$lib/components/Switch/Switch.svelte';
	import { getTranslation } from '$lib/pages/home/translations';
	import {
		languageOptions,
		type TranslationObject,
		type LanguageCode
	} from '$lib/utils/translationType';
	import RichText from './RichTextEditor.svelte';
	type LandingPageStringEditorProps = {
		stringId: Parameters<typeof getTranslation>[0];
		title?: string;
	};
	let { stringId, title }: LandingPageStringEditorProps = $props();
	let language: LanguageCode = $state('en-US');
	let content = $state<TranslationObject>({
		'en-US': getTranslation(stringId, 'en-US'),
		'ht-HT': getTranslation(stringId, 'ht-HT')
	});
</script>

<div class="flex w-full flex-col gap-2 p-2">
	<h2>{title ?? stringId.split('.')?.at(-1)}</h2>
	<RichText bind:content={content[language]} />
	<Switch
		options={languageOptions}
		getOptionValue={(option) => option.code}
		getOptionLabel={(option) => option.displayName}
		bind:value={language}
		class="h-10"
		buttonClasses="p-1"
	/>
</div>
