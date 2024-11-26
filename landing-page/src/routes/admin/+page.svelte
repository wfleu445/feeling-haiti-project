<script lang="ts">
	import { getLanguageContext } from '$lib/components/LanguageContext/LanguageContext.svelte';
	import { getTranslation as getAdminPageTranslations } from '$lib/pages/admin/translations';
	import { getTranslation as getCommonTranslations } from '$lib/utils/translation/commonTranslations';
	import LandingPageStringEditor from './LandingPageStringEditor.svelte';

	let saveCode = $state<string>('');

	let selectedLanguage = $derived(getLanguageContext());
</script>

<div
	class="*:even:bg-blue [&_h1]:text-bold flex flex-col items-center gap-3 p-3 [&_.pageSection]:rounded-lg [&_.pageSection]:bg-slate-100 [&_div]:max-w-[700px] [&_h1]:font-sans"
>
	<!--Save button-->
	<div
		class="sticky top-0 flex h-16 w-full flex-row items-center justify-start gap-x-2 bg-white bg-opacity-50 backdrop-blur"
	>
		<input
			class="min-w-60 rounded border-none bg-gray-200 outline-none focus:ring"
			placeholder={getAdminPageTranslations('enterPasscode', selectedLanguage)}
			value={saveCode}
		/>
		<button class="flex items-center justify-center rounded-md bg-gray-800 px-4 text-gray-50">
			Save
		</button>
	</div>
	<!--Hero Editor-->
	<div>
		<h1>{getAdminPageTranslations('heroSection', selectedLanguage)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor stringId="hero" />
		</div>
	</div>
	<!--Vision Editor-->
	<div>
		<h1>{getAdminPageTranslations('visionSection', selectedLanguage)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor
				stringId="sections.intro.title"
				title={getCommonTranslations('title', selectedLanguage)}
			/>
			<LandingPageStringEditor stringId="sections.intro.shortDescription" />
			<LandingPageStringEditor stringId="sections.intro.longDescription" />
		</div>
	</div>
	<!--Features Section-->
	<div>
		<h1>{getAdminPageTranslations('featuresSection', selectedLanguage)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor
				stringId="sections.features.title"
				title={getCommonTranslations('title', selectedLanguage)}
			/>
			<LandingPageStringEditor
				stringId="sections.features.shortDescription"
				title={getCommonTranslations('shortDescription', selectedLanguage)}
			/>
			<LandingPageStringEditor
				stringId="sections.features.longDescription"
				title={getCommonTranslations('longDescription', selectedLanguage)}
			/>
		</div>
	</div>
	<!--CTA-->
	<div>
		<h1>{getAdminPageTranslations('ctaSection', selectedLanguage)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor
				stringId="sections.cta.title"
				title={getCommonTranslations('title', selectedLanguage)}
			/>
			<LandingPageStringEditor
				stringId="sections.cta.shortDescription"
				title={getCommonTranslations('shortDescription', selectedLanguage)}
			/>
			<LandingPageStringEditor
				stringId="sections.cta.longDescription"
				title={getCommonTranslations('longDescription', selectedLanguage)}
			/>
		</div>
	</div>
</div>
