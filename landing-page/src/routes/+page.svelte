<script lang="ts">
	import { getLanguageContext } from '$lib/components/LanguageContext/LanguageContext.svelte';
	import { translations as homePageTranslations } from '$lib/pages/home/translations.svelte';

	type PageSection = keyof typeof homePageTranslations.sections;

	const languageContext = $derived(getLanguageContext());
	// todo make this a context variable
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
			class="flex items-center gap-2"
			>{#if expandedSection !== id}
				{homePageTranslations.readMore[languageContext]}
				<i class="fas fa-angles-right"></i>
			{:else}
				{homePageTranslations.collapse[languageContext]}<i class="fas fa-angles-up"></i>
			{/if}</button
		>
		{#if expandedSection === id}
			<div>
				<div class="long-description flex flex-col gap-2">
					{@html longDescription}
				</div>
				<button
					class="flex items-center gap-2"
					onclick={() => {
						expandedSection = undefined;
					}}
					>{homePageTranslations.collapse[languageContext]}<i class="fas fa-angles-up"></i></button
				>
			</div>
		{/if}
	</div>
{/snippet}

{#snippet joinButton()}
	<a
		href="https://github.com/wfleu445/feeling-haiti-project/issues"
		class="my-4 flex h-fit w-fit cursor-pointer flex-row items-center justify-center gap-4 rounded-lg bg-slate-800 px-4 py-2 font-sans font-semibold text-white"
	>
		{homePageTranslations.joinUs[languageContext]}
		<i class="fa-brands fa-github text-2xl"></i>
	</a>
{/snippet}

<div class="flex grow flex-col gap-3 [&_.w-restricted]:max-w-[45em]">
	<!--Hero-->
	<div class="flex w-full justify-center p-3">
		<div
			class="grid grid-flow-row-dense gap-2 md:grid-cols-2 md:px-10 lg:my-10 lg:w-[90%] lg:pb-10"
		>
			<div class="flex items-end md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1 md:px-10">
				<span class="pb-2 font-sans text-5xl font-semibold text-gray-700">Filing Ayiti</span>
			</div>
			<div
				class="flex items-center md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-4 md:px-10"
			>
				<enhanced:img
					src="/static/hero.jpg"
					alt="a group of people smiling"
					class="rounded-lg shadow-lg shadow-blue-300"
				/>
			</div>
			<div
				class="flex items-center md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 md:px-10"
			>
				<p class="max-w-96 pt-3 tracking-wide">
					{@html homePageTranslations.hero[languageContext]}
				</p>
			</div>
			<div
				class="flex items-start md:col-start-1 md:col-end-1 md:row-start-3 md:row-end-3 md:px-10"
			>
				{@render joinButton()}
			</div>
		</div>
	</div>
	<!--Proposal-->
	<div class="flex w-full justify-center px-3 pb-10 pt-3">
		<div
			class="w-restricted flex justify-center rounded-lg bg-blue-600 p-5 tracking-wide text-blue-50 [&_.header]:pb-3 [&_.header]:pt-1 [&_.header]:text-3xl [&_.header]:font-semibold [&_.long-description]:flex [&_.long-description]:gap-4 [&_.long-description]:pt-4 [&_.long-description]:leading-normal [&_button]:mt-4 [&_button]:w-fit [&_button]:rounded-md [&_button]:bg-blue-800 [&_button]:px-4 [&_button]:py-2"
		>
			{@render expandingSection(
				'intro',
				homePageTranslations.sections.intro.title[languageContext],
				homePageTranslations.sections.intro.shortDescription[languageContext],
				homePageTranslations.sections.intro.longDescription[languageContext]
			)}
		</div>
	</div>
	<!--Features Lookout-->
	<div class="flex w-full justify-center bg-red-500 py-10 tracking-wide text-white">
		<div
			class="w-restricted &_.long-description]:flex p-5 [&_.header]:pb-3 [&_.header]:pt-1 [&_.header]:text-3xl [&_.header]:font-semibold [&_.long-description]:gap-4 [&_.long-description]:pt-4 [&_.long-description]:leading-normal [&_button]:mt-4 [&_button]:w-fit [&_button]:rounded-md [&_button]:bg-red-700 [&_button]:px-4 [&_button]:py-2"
		>
			{@render expandingSection(
				'features',
				homePageTranslations.sections.features.title[languageContext],
				homePageTranslations.sections.features.shortDescription[languageContext],
				homePageTranslations.sections.features.longDescription[languageContext]
			)}
		</div>
	</div>
	<!--Call to action-->
	<div class="flex w-full justify-center py-10">
		<div
			class="w-restricted &_.long-description]:flex px-5 [&_.header]:pb-3 [&_.header]:pt-1 [&_.header]:text-3xl [&_.header]:font-semibold [&_.long-description]:gap-4 [&_.long-description]:pt-4 [&_.long-description]:leading-normal [&_button]:mt-4 [&_button]:w-fit [&_button]:rounded-md [&_button]:bg-slate-300 [&_button]:px-4 [&_button]:py-2"
		>
			{@render expandingSection(
				'cta',
				homePageTranslations.sections.cta.title[languageContext],
				homePageTranslations.sections.cta.shortDescription[languageContext],
				homePageTranslations.sections.cta.longDescription[languageContext]
			)}
		</div>
	</div>
	<div class="flex w-full justify-center">
		<div class="w-restricted w-full px-5">
			<div class="flex w-full">{@render joinButton()}</div>
		</div>
	</div>
</div>
