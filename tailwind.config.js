/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,vue}',
    './components/**/*.{js,ts,jsx,tsx,mdx,vue}',
    './ui/**/*.{js,ts,jsx,tsx,mdx,vue}',
    './app.vue',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--bg-card)',
        'primary-10': '#9E78CF',
        'primary-20': '#15101C',
        'red-10': '#F8F2F4',
        'red-20': '#B07289',
        'red-30': '#FCEEF5',
        'red-40': '#571032',
        midnight: '#444B55',
        'textfield-border': '#DEE3ED',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
