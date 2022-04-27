/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

type Locales = import('$i18n/i18n-types').Locales

declare namespace App {
	// interface Locals {}
	// interface Platform {}
	interface Session {
		locale: locales
	}
	// interface Stuff {}
}
