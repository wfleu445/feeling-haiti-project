<script lang="ts">
	import { getLanguageContext } from '$lib/components/LanguageContext/LanguageContext.svelte';
	import { translations } from '$lib/pages/home/translations';
	import RichText from './RichText.svelte';

	let content = $state(translations);
	let selectedLanguage = getLanguageContext();
	$effect(() => {
		console.log('content', content.hero[selectedLanguage.code]);
	});
</script>

<div class="flex">
	<!--Hero Editor-->
	<RichText bind:content={content.hero[selectedLanguage.code]} />
	<!--Vision Editor-->
	<div>
		<h2></h2>
		<RichText bind:content={content.sections.intro.title[selectedLanguage.code]} />
		<RichText bind:content={content.sections.intro.shortDescription[selectedLanguage.code]} />
		<RichText bind:content={content.sections.intro.longDescription[selectedLanguage.code]} />
	</div>
	<!--Features Section-->
	<div>
		<RichText bind:content={content.sections.features.title[selectedLanguage.code]} />
		<RichText bind:content={content.sections.features.shortDescription[selectedLanguage.code]} />
		<RichText bind:content={content.sections.features.longDescription[selectedLanguage.code]} />
	</div>
	<!--CTA-->
	<div>
		<RichText bind:content={content.sections.cta.title[selectedLanguage.code]} />
		<RichText bind:content={content.sections.cta.shortDescription[selectedLanguage.code]} />
		<RichText bind:content={content.sections.cta.longDescription[selectedLanguage.code]} />
	</div>
</div>
