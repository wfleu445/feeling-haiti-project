<script lang="ts">
	import { getLanguageContext } from '$lib/components/LanguageContext/LanguageContext.svelte';
	import { getTranslation as getAdminPageTranslations } from '$lib/pages/admin/translations';
	import LandingPageStringEditor from './LandingPageStringEditor.svelte';

	let selectedLanguage = getLanguageContext();
</script>

<div
	class="*:even:bg-blue [&_h1]:text-bold flex flex-col items-center gap-3 px-3 [&_.pageSection]:rounded-lg [&_.pageSection]:bg-slate-100 [&_div]:max-w-[700px] [&_h1]:font-sans"
>
	<!--Hero Editor-->
	<div>
		<h1>{getAdminPageTranslations('heroSection', selectedLanguage.code)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor stringId="hero" />
		</div>
	</div>
	<!--Vision Editor-->
	<div>
		<h1>{getAdminPageTranslations('visionSection', selectedLanguage.code)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor stringId="sections.intro.title" />
			<LandingPageStringEditor stringId="sections.intro.shortDescription" />
			<LandingPageStringEditor stringId="sections.intro.longDescription" />
		</div>
	</div>
	<!--Features Section-->
	<div>
		<h1>{getAdminPageTranslations('featuresSection', selectedLanguage.code)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor stringId="sections.features.title" />
			<LandingPageStringEditor stringId="sections.features.shortDescription" />
			<LandingPageStringEditor stringId="sections.features.longDescription" />
		</div>
	</div>
	<!--CTA-->
	<div>
		<h1>{getAdminPageTranslations('ctaSection', selectedLanguage.code)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor stringId="sections.cta.title" />
			<LandingPageStringEditor stringId="sections.cta.shortDescription" />
			<LandingPageStringEditor stringId="sections.cta.longDescription" />
		</div>
	</div>
</div>
