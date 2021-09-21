import React from 'react'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'

const colors = {
	primary: '#F2CC8F',
	secondary: '#81B29A',
	text: '#3D405B',
	info: '#E07A5F',
	background: '#3D405B',
	border: '#F4F1DE',
}

const fonts = {
	primary:
		'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
}

const fontSize = {
	sm: '14px',
	md: '16px',
	lg: '20px',
	xl: '24px',
	xxl: '32px',
}

const heights = {
	sm: '24px',
	md: '32px',
	lg: '40px',
	xl: '60px',
	xxl: '74px',
}

const fontWeight = {
	sm: 400,
	md: 500,
	lg: 600,
	xl: 800,
}

// 244, 241, 222

const shadows = {
	sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
	md: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
	lg: '0 3px 8px 0 rgba(244, 241, 222, 0.15)',
	xl: '0 6px 12px 0 rgba(0, 0, 0, 0.10)',
}

const paddings = {
	xsm: '8px',
	sm: '16px',
	md: '20px',
	lg: '30px',
	xl: '40px',
	xxl: '80px',
}

const radii = {
	sm: '8px',
	md: '10px',
	lg: '12px',
}

const borderWidths = {
	sm: '1px',
	md: '2px',
}

export const theme = {
	colors,
	fonts,
	fontSize,
	heights,
	fontWeight,
	shadows,
	borderWidths,
	paddings,
	radii,
}

const ThemeProvider: React.FC = ({ children }) => {
	return (
		<StyledComponentsProvider theme={theme}>
			{children}
		</StyledComponentsProvider>
	)
}

type ThemeType = typeof theme
export type { ThemeType }

export default ThemeProvider
