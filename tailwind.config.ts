import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
		  backgroundColor: {
			'primary-dark': '#0B031B',
		  },
		  backgroundImage: {
		   'iict': "url('/img/iict.jpg')",
		  }
		}
	  },

	plugins: [typography, forms, containerQueries]
} satisfies Config;
