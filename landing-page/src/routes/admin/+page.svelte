<script lang="ts">
	import { translations } from '$lib/pages/home/translations';
	import RichText from './RichText.svelte';

	let content = $state(translations);
	$effect(() => {
		console.log('content', content.hero['en-US']);
	});
</script>

<div class="flex">
	<!--Hero Editor-->
	<RichText bind:content={content.hero['en-US']} />
	<!--Vision Editor-->
	<div>
		<h2></h2>
		<RichText bind:content={content.sections.intro.title['en-US']} />
		<RichText bind:content={content.sections.intro.shortDescription['en-US']} />
		<RichText bind:content={content.sections.intro.longDescription['en-US']} />
	</div>
	<!--Features Section-->
	<div>
		<RichText bind:content={content.sections.features.title['en-US']} />
		<RichText bind:content={content.sections.features.shortDescription['en-US']} />
		<RichText bind:content={content.sections.features.longDescription['en-US']} />
	</div>
	<!--CTA-->
	<div>
		<RichText bind:content={content.sections.cta.title['en-US']} />
		<RichText bind:content={content.sections.cta.shortDescription['en-US']} />
		<RichText bind:content={content.sections.cta.longDescription['en-US']} />
	</div>
</div>
