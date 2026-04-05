/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'on-secondary-fixed': '#001a42',
        'surface-tint': '#d2bbff',
        'on-tertiary-fixed': '#0f0069',
        'inverse-on-surface': '#2c303d',
        'on-primary-fixed-variant': '#5a00c6',
        'on-tertiary': '#1d00a5',
        'primary-container': '#7c3aed',
        'on-secondary-fixed-variant': '#004395',
        'on-error-container': '#ffdad6',
        'surface-container': '#1b1f2c',
        surface: '#0f131f',
        'on-background': '#dfe2f3',
        error: '#ffb4ab',
        'on-tertiary-container': '#e6e3ff',
        'surface-container-lowest': '#0a0e1a',
        'surface-container-high': '#262a37',
        outline: '#958da1',
        'inverse-primary': '#732ee4',
        'on-tertiary-fixed-variant': '#3323cc',
        'tertiary-fixed-dim': '#c3c0ff',
        'on-error': '#690005',
        'on-surface-variant': '#ccc3d8',
        'primary-fixed-dim': '#d2bbff',
        tertiary: '#c3c0ff',
        'surface-variant': '#313442',
        primary: '#d2bbff',
        'on-secondary': '#002e6a',
        'on-primary-fixed': '#25005a',
        'surface-container-highest': '#313442',
        'primary-fixed': '#eaddff',
        'on-surface': '#dfe2f3',
        'on-primary': '#3f008e',
        'outline-variant': '#4a4455',
        'secondary-container': '#0566d9',
        secondary: '#adc6ff',
        'surface-dim': '#0f131f',
        'tertiary-fixed': '#e2dfff',
        'surface-container-low': '#171b28',
        'surface-bright': '#353946',
        'secondary-fixed-dim': '#adc6ff',
        'on-secondary-container': '#e6ecff',
        'secondary-fixed': '#d8e2ff',
        'inverse-surface': '#dfe2f3',
        'tertiary-container': '#564eec',
        'error-container': '#93000a',
        'on-primary-container': '#ede0ff',
        background: '#0f131f'
      },
      fontFamily: {
        'noto-serif': ['Noto Serif', 'Playfair Display', 'serif'],
        headline: ['Noto Serif', 'Playfair Display', 'serif'],
        'serif-editorial': ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        label: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem'
      }
    }
  },
  plugins: []
}

