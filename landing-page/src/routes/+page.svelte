<script lang="ts">
	import Switch from '$lib/components/Switch/Switch.svelte';
	import { type LanguageCode } from '$lib/utils/translationType';
	import { translations as homePageTranslations, translations } from '$lib/pages/home/translations';

	type PageSection = keyof typeof homePageTranslations.sections;

	// language-COUNTRYCODE
	const languageOptions: { code: LanguageCode; displayName: string }[] = [
		{ code: 'ht-HT', displayName: 'Kreyòl' },
		{ code: 'en-US', displayName: 'English' }
	];
	// todo make this a context variable
	let selectedLanguage = $state<LanguageCode>('ht-HT');
	let expandedSection: PageSection | undefined = $state();
</script>

{#snippet expandingSection(
	id: PageSection,
	header: string,
	shortDescription: string,
	longDescription: string
)}
	<div class="flex flex-col">
		<h2 class="header">{header}</h2>
		<p class="short-description">{shortDescription}</p>
		<button
			onclick={() => {
				if (expandedSection !== undefined) {
					expandedSection = undefined;
				} else {
					expandedSection = id;
				}
			}}
			>{homePageTranslations.readMore[selectedLanguage]}
			<i class="fas fa-angles-right"></i></button
		>
		{#if expandedSection === id}
			<div>
				<div class="long-description flex flex-col gap-2">
					{@html longDescription}
				</div>
				<button
					class="collapse-button"
					onclick={() => {
						expandedSection = undefined;
					}}
					>{homePageTranslations.collapse[selectedLanguage]}<i class="fas fa-angles-up"></i></button
				>
			</div>
		{/if}
	</div>
{/snippet}

<div
	class="flex grow flex-col gap-3 overflow-auto p-3 font-serif text-[16pt] leading-relaxed text-slate-800"
>
	<Switch
		options={languageOptions}
		getOptionValue={(option) => option.code}
		getOptionLabel={(option) => option.displayName}
		bind:value={selectedLanguage}
	/>
	<!--Hero-->
	<div class="grid grid-flow-row-dense gap-2">
		<span class="pb-2 font-sans text-5xl font-semibold text-gray-700">Filing Ayiti</span>
		<enhanced:img
			src="/static/hero.jpg"
			alt="a group of people smiling"
			class="rounded-lg shadow-md"
		/>
		<p class="pt-3">
			{homePageTranslations.hero[selectedLanguage]}
		</p>

		<a
			href="https://github.com/wfleu445/feeling-haiti-project/issues"
			class="my-4 flex w-fit cursor-pointer flex-row items-center justify-center gap-4 rounded-lg bg-slate-800 px-4 py-2 font-sans font-semibold text-white"
		>
			{homePageTranslations.joinUs[selectedLanguage]}
			<i class="fa-brands fa-github text-2xl"></i>
		</a>
	</div>
	<!--Proposal-->
	<div
		class="rounded-lg bg-slate-100 p-2 [&_.header]:pb-3 [&_.header]:pt-1 [&_.header]:text-3xl [&_.header]:font-semibold"
	>
		{@render expandingSection(
			'intro',
			homePageTranslations.sections.intro.title[selectedLanguage],
			homePageTranslations.sections.intro.shortDescription[selectedLanguage],
			homePageTranslations.sections.intro.longDescription[selectedLanguage]
		)}
	</div>
	<!--Features Lookout-->
	<div>
		{@render expandingSection(
			'features',
			homePageTranslations.sections.features.title[selectedLanguage],
			homePageTranslations.sections.features.shortDescription[selectedLanguage],
			homePageTranslations.sections.features.longDescription[selectedLanguage]
		)}
	</div>
	<!--Call to action-->
	<div>
		{@render expandingSection(
			'features',
			homePageTranslations.sections.cta.title[selectedLanguage],
			homePageTranslations.sections.cta.shortDescription[selectedLanguage],
			homePageTranslations.sections.cta.longDescription[selectedLanguage]
		)}
	</div>
</div>
