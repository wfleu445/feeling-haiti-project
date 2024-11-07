<script lang="ts">
  import Switch from "$lib/components/Switch/Switch.svelte";
  import { type LanguageCode } from "$lib/utils/translationType";
  import {translations as homePageTranslations} from '$lib/pages/home/translations';

  // language-COUNTRYCODE
  const languageOptions: {code: LanguageCode, displayName: string}[] = [{code: 'ht-HT', displayName: 'Kreyòl'}, {code: 'en-US', displayName: 'English'}];
  let selectedLanguage = $state<LanguageCode>('ht-HT')
</script>
<div class="flex flex-col grow font-serif text-[16pt] leading-relaxed text-slate-800 p-3 gap-3 overflow-auto">
  <Switch options={languageOptions} getOptionValue={(option) => option.code} getOptionLabel={(option) => option.displayName} bind:value={selectedLanguage} />
  <!--Hero-->
  <div class="grid grid-flow-row-dense gap-2">
    <span class="font-sans text-4xl">Filing Ayiti</span>
    <enhanced:img src="/static/hero.jpg" alt="a group of people smiling" class="rounded-lg shadow-md"/>
    <p>
      {homePageTranslations.hero[selectedLanguage]}
    </p>
  </div>
  <!---->
</div>