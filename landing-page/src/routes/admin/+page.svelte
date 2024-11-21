<script lang="ts">
	import { getLanguageContext } from '$lib/components/LanguageContext/LanguageContext.svelte';
	import { translations } from '$lib/pages/home/translations';
	import LandingPageStringEditor from './LandingPageStringEditor.svelte';
	import RichText from './RichTextEditor.svelte';

	let content = $state(translations);
	let selectedLanguage = getLanguageContext();
	$effect(() => {
		console.log('content', content.hero[selectedLanguage.code]);
	});
</script>

<div class="flex flex-col">
	<!--Hero Editor-->
	<div>
		<!-- <h1>{adminPage['hero']}</h1> -->
		<LandingPageStringEditor stringId="hero" />
	</div>
	<!--Vision Editor-->
	<div>
		<LandingPageStringEditor stringId="sections.intro.title" />
		<LandingPageStringEditor stringId="sections.intro.shortDescription" />
		<LandingPageStringEditor stringId="sections.intro.longDescription" />
	</div>
	<!--Features Section-->
	<div>
		<LandingPageStringEditor stringId="sections.features.title" />
		<LandingPageStringEditor stringId="sections.features.shortDescription" />
		<LandingPageStringEditor stringId="sections.features.longDescription" />
	</div>
	<!--CTA-->
	<div>
		<LandingPageStringEditor stringId="sections.cta.title" />
		<LandingPageStringEditor stringId="sections.cta.shortDescription" />
		<LandingPageStringEditor stringId="sections.cta.longDescription" />
	</div>
</div>
