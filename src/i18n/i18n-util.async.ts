// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

const localeTranslationLoaders = {
	by: () => import('./by'),
	de: () => import('./de'),
	en: () => import('./en'),
	ru: () => import('./ru'),
}

const updateDictionary = (locale: Locales, dictionary: Partial<Translations>) =>
	loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary }

export const loadLocaleAsync = async (locale: Locales): Promise<void> => {
	updateDictionary(
		locale,
		(await localeTranslationLoaders[locale]()).default as unknown as Translations
	)
	loadFormatters(locale)
}

export const loadAllLocalesAsync = (): Promise<void[]> => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
