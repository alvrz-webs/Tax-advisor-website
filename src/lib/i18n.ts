export const LOCALES = ['es', 'en', 'ca', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

/** Antepone el prefijo de idioma a una ruta en español (es = sin prefijo). */
export function localizedPath(path: string, lang: Locale): string {
	if (lang === DEFAULT_LOCALE) return path || '/';
	const limpio = path === '/' ? '' : path;
	return `/${lang}${limpio}`;
}

export const strings = {
	es: {
		nav: {
			laFirma: 'La firma',
			servicios: 'Áreas de práctica',
			contacto: 'Contacto',
			ariaMain: 'Navegación principal',
			openMenu: 'Abrir menú',
		},
		footer: {
			tagline: 'Fiscalidad clara, decisiones seguras.',
			copy: (year: number) => `© ${year} Pilar Nieto Pérez — Asesora Fiscal`,
			ariaSocial: 'Redes profesionales',
			avisoLegal: 'Aviso legal',
		},
		langSwitch: { label: 'Cambiar idioma' },
	},
	en: {
		nav: {
			laFirma: 'The firm',
			servicios: 'Practice areas',
			contacto: 'Contact',
			ariaMain: 'Main navigation',
			openMenu: 'Open menu',
		},
		footer: {
			tagline: 'Clear tax advice, confident decisions.',
			copy: (year: number) => `© ${year} Pilar Nieto Pérez — Tax Advisor`,
			ariaSocial: 'Professional profiles',
			avisoLegal: 'Legal notice',
		},
		langSwitch: { label: 'Switch language' },
	},
	ca: {
		nav: {
			laFirma: 'La firma',
			servicios: 'Àrees de pràctica',
			contacto: 'Contacte',
			ariaMain: 'Navegació principal',
			openMenu: 'Obrir menú',
		},
		footer: {
			tagline: 'Fiscalitat clara, decisions segures.',
			copy: (year: number) => `© ${year} Pilar Nieto Pérez — Assessora Fiscal`,
			ariaSocial: 'Xarxes professionals',
			avisoLegal: 'Avís legal',
		},
		langSwitch: { label: "Canviar d'idioma" },
	},
	ru: {
		nav: {
			laFirma: 'О фирме',
			servicios: 'Направления',
			contacto: 'Контакты',
			ariaMain: 'Основная навигация',
			openMenu: 'Открыть меню',
		},
		footer: {
			tagline: 'Ясные налоги — уверенные решения.',
			copy: (year: number) => `© ${year} Пилар Ньето Перес — Налоговый консультант`,
			ariaSocial: 'Профессиональные профили',
			avisoLegal: 'Правовая информация',
		},
		langSwitch: { label: 'Сменить язык' },
	},
} as const;
