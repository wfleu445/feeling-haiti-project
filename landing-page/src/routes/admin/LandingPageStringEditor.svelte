<script lang="ts">
	import Switch from '$lib/components/Switch/Switch.svelte';
	import { getTranslation } from '$lib/pages/home/translations';
	import {
		languageOptions,
		type TranslationObject,
		type LanguageCode
	} from '$lib/utils/translationType';
	import RichText from './RichTextEditor.svelte';
	import { camelCase, startCase } from 'lodash-es';

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

<div class="flex w-full flex-col gap-2 p-2 pb-5">
	<div class="flex w-full flex-row items-end justify-between">
		<h2 class="">
			{startCase(camelCase(title ?? stringId.split('.')?.at(-1) ?? ''))}
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
