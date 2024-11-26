<script lang="ts">
	import { getLanguageContext } from '$lib/components/LanguageContext/LanguageContext.svelte';
	import {
		getTranslation as getAdminPageTranslations,
		getTranslation
	} from '$lib/pages/admin/translations';
	import { translations as landingPageTransations } from '$lib/pages/home/translations.svelte';
	import { getTranslation as getCommonTranslations } from '$lib/utils/translation/commonTranslations';
	import { clsx } from 'clsx';
	import LandingPageStringEditor from './LandingPageStringEditor.svelte';
	import { type LandingPageSectionsRevision } from '$lib/firebase/collections';

	let saveCode = $state<string>('');

	let selectedLanguage = $derived(getLanguageContext());

	let landingPageSections = $state<
		Pick<LandingPageSectionsRevision, 'hero' | 'intro' | 'features' | 'cta'>
	>({
		hero: landingPageTransations.hero,
		intro: landingPageTransations.sections.intro,
		features: landingPageTransations.sections.features,
		cta: landingPageTransations.sections.cta
	});

	let savingStatus = $state<
		{ message: string; type: 'pending' | 'success' | 'error' } | undefined
	>();

	async function saveRevision() {
		if (saveCode.length === 0) {
			savingStatus = {
				message: getAdminPageTranslations('saveNoCodeMessage', selectedLanguage),
				type: 'error'
			};

			window.setTimeout(() => {
				savingStatus = undefined;
			}, 5000);
			return;
		}
		savingStatus = {
			message: getAdminPageTranslations('pendingSaveMesage', selectedLanguage),
			type: 'pending'
		};

		const response = await fetch('/api/saveLandingPageRevision', {
			method: 'POST',
			body: JSON.stringify({
				code: saveCode,
				revision: landingPageSections
			})
		});

		if (response.ok) {
			savingStatus = {
				message: getTranslation('successfulSave', selectedLanguage),
				type: 'success'
			};
		} else {
			savingStatus = {
				message: getAdminPageTranslations('unsuccessfulSave', selectedLanguage),
				type: 'error'
			};
		}

		setTimeout(() => {
			savingStatus = undefined;
		}, 5000);
	}
</script>

<div
	class="*:even:bg-blue [&_h1]:text-bold flex flex-col items-center gap-3 p-3 [&_.pageSection]:rounded-lg [&_.pageSection]:bg-slate-100 [&_div]:max-w-[700px] [&_h1]:font-sans"
>
	<!--Save button-->
	<div class="sticky top-0 flex w-full flex-col bg-white bg-opacity-50 backdrop-blur">
		<div class="flex h-16 w-full flex-row items-center justify-start gap-x-2">
			<input
				class="min-w-60 rounded border-none bg-gray-200 outline-none focus:ring"
				placeholder={getAdminPageTranslations('enterPasscode', selectedLanguage)}
				bind:value={saveCode}
			/>
			<button
				class="flex items-center justify-center rounded-md bg-gray-800 px-4 text-gray-50"
				onclick={() => {
					saveRevision();
				}}
			>
				Save
			</button>
		</div>
		{#if savingStatus}
			<span
				class={clsx(
					{
						'text-green-500': savingStatus?.type === 'success',
						'text-red-500': savingStatus?.type === 'error'
					},
					'py-1'
				)}
				>{savingStatus?.message}
				{#if savingStatus.type === 'pending'}
					<i class="fas fa-spinner fa-spin"></i>
				{/if}
			</span>
		{/if}
	</div>
	<!--Hero Editor-->
	<div>
		<h1>{getAdminPageTranslations('heroSection', selectedLanguage)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor label="Hero" bind:content={landingPageSections.hero} />
		</div>
	</div>
	<!--Vision Editor-->
	<div>
		<h1>{getAdminPageTranslations('visionSection', selectedLanguage)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor
				label={getCommonTranslations('title', selectedLanguage)}
				bind:content={landingPageSections.intro.title}
			/>
			<LandingPageStringEditor
				bind:content={landingPageSections.intro.shortDescription}
				label={getCommonTranslations('shortDescription', selectedLanguage)}
			/>
			<LandingPageStringEditor
				label={getCommonTranslations('longDescription', selectedLanguage)}
				bind:content={landingPageSections.intro.longDescription}
			/>
		</div>
	</div>
	<!--Features Section-->
	<div>
		<h1>{getAdminPageTranslations('featuresSection', selectedLanguage)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor
				bind:content={landingPageSections.features.title}
				label={getCommonTranslations('title', selectedLanguage)}
			/>
			<LandingPageStringEditor
				bind:content={landingPageSections.features.shortDescription}
				label={getCommonTranslations('shortDescription', selectedLanguage)}
			/>
			<LandingPageStringEditor
				bind:content={landingPageSections.features.longDescription}
				label={getCommonTranslations('longDescription', selectedLanguage)}
			/>
		</div>
	</div>
	<!--CTA-->
	<div>
		<h1>{getAdminPageTranslations('ctaSection', selectedLanguage)}</h1>
		<div class="pageSection">
			<LandingPageStringEditor
				bind:content={landingPageSections.cta.title}
				label={getCommonTranslations('title', selectedLanguage)}
			/>
			<LandingPageStringEditor
				bind:content={landingPageSections.cta.shortDescription}
				label={getCommonTranslations('shortDescription', selectedLanguage)}
			/>
			<LandingPageStringEditor
				bind:content={landingPageSections.cta.longDescription}
				label={getCommonTranslations('longDescription', selectedLanguage)}
			/>
		</div>
	</div>
</div>
