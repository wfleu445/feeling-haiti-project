<script lang="ts">
  import Switch from "$lib/components/Switch/Switch.svelte";
  import { type LanguageCode } from "$lib/utils/translationType";
  import {translations as homePageTranslations, translations} from '$lib/pages/home/translations';
  
  type PageSection = keyof typeof homePageTranslations.sections;

  // language-COUNTRYCODE
  const languageOptions: {code: LanguageCode, displayName: string}[] = [{code: 'ht-HT', displayName: 'Kreyòl'}, {code: 'en-US', displayName: 'English'}];
  // todo make this a context variable
  let selectedLanguage = $state<LanguageCode>('ht-HT')
  let expandedSection: PageSection | undefined = $state()
</script>

{#snippet expandingSection(id: PageSection, header: string, shortDescription: string, longDescription: string)}
  <div class="flex flex-col">
    <h2>{header}</h2> . 
    <p>{shortDescription} <i class="fas fa-double-angle-right"></i></p>
    <button onclick={() => {
      if(expandedSection !== undefined){
        expandedSection = undefined
      }else {
        expandedSection = id;
      }
    }}>{homePageTranslations.readMore[selectedLanguage]}</button>
    {#if expandedSection === id} 
    <div>
      <div class="flex">
        {@html longDescription}
      </div>
      <button onclick={() => {
        expandedSection = undefined;
      }}>{homePageTranslations.collapse[selectedLanguage]}<i class="fas fa-angle-up"></i></button>
    </div>
    {/if}
  </div>
{/snippet}

<div class="flex flex-col grow font-serif text-[16pt] leading-relaxed text-slate-800 p-3 gap-3 overflow-auto">
  <Switch options={languageOptions} getOptionValue={(option) => option.code} getOptionLabel={(option) => option.displayName} bind:value={selectedLanguage} />
  <!--Hero-->
  <div class="grid grid-flow-row-dense gap-2">
    <span class="font-sans text-4xl">Filing Ayiti</span>
    <enhanced:img src="/static/hero.jpg" alt="a group of people smiling" class="rounded-lg shadow-md"/>
    <p class="pt-3">
      {homePageTranslations.hero[selectedLanguage]}
    </p>

    <a href="https://github.com/wfleu445/feeling-haiti-project/issues" class="flex flex-row gap-4 font-sans font-semibold rounded-lg px-4 py-2 items-center justify-center bg-slate-800 text-white w-fit cursor-pointer my-4">
      {homePageTranslations.joinUs[selectedLanguage]}
      <i class="fa-brands fa-github text-2xl"></i>
    </a>

  </div>
  <!--Proposal-->
  <div>
  {@render expandingSection("intro", homePageTranslations.sections.intro.title[selectedLanguage], homePageTranslations.sections.intro.shortDescription[selectedLanguage], homePageTranslations.sections.intro.longDescription[selectedLanguage] )}
</div>
  <!--Features Lookout-->
  <div>
    {@render expandingSection("features", homePageTranslations.sections.features.title[selectedLanguage], homePageTranslations.sections.features.shortDescription[selectedLanguage], homePageTranslations.sections.features.longDescription[selectedLanguage] )}
  </div>
  <!--Call to action-->
  <div>
    {@render expandingSection("features", homePageTranslations.sections.cta.title[selectedLanguage], homePageTranslations.sections.cta.shortDescription[selectedLanguage], homePageTranslations.sections.cta.longDescription[selectedLanguage] )}
  </div>
</div>