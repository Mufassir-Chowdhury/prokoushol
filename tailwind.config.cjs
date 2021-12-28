module.exports = {
  content: {
    enabled: !process.env.ROLLUP_WATCH,
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  theme: {
    extend: {
      backgroundColor: {
        'primary-dark': '#0B031B',
      },
      backgroundImage: {
       'iict': "url('/img/iict.png')",
      }
    }
  },
  plugins: [],
}
