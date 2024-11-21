<script lang="ts">
	import '../app.css';
	import Firebase from '$lib/firebase/Firebase.svelte';
	import Switch from '$lib/components/Switch/Switch.svelte';
	import { languageOptions, type LanguageCode } from '$lib/utils/translationType';
	import {
		selectedLanguage,
		setLanguageContext
	} from '$lib/components/LanguageContext/LanguageContext.svelte';

	let { children } = $props();

	setLanguageContext(selectedLanguage.code);
</script>

<Firebase>
	<div class="flex h-lvh flex-col font-serif text-[16pt] leading-relaxed text-slate-800">
		<div class="flex p-2">
			<Switch
				options={languageOptions}
				getOptionValue={(option) => option.code}
				getOptionLabel={(option) => option.displayName}
				bind:value={selectedLanguage.code}
			/>
		</div>
		{@render children()}
	</div>
</Firebase>
