/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: '#292F36',
        bg2: '#1A1E23',
        bg3: '#22313f',
        main1: '#12F7D6',
        main2: '#98FAEC',
        white: '#FFFFFF',
        redHtml: '#E54F26',
        blueCss: '#0C73B8',
        yellowJs: '#F0DB4F',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'custom-bg': "url('/public/topo3.png')",
        'code-bg': "url('/public/codeback.jpg')"
      },
      backgroundPosition: {
        'center-50': '50%',
      },
      backgroundSize: {
        'cover': 'cover',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
      boxShadow: {
        '3d': '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'custom': '160px 0 160px 0',
        'custom2': '80px 80px 80px 80px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '.text-wrap': {
              'overflow-wrap': 'break-word',
              'white-space': 'pre-wrap',
              'text-align': 'center',
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
