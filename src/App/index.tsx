import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'
import { Root } from '../routes/root'
import { createContext, useMemo, useState } from 'react'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import { getDesignTokens } from './themeConfig'

type ThemeContextType = {toggleColorMode:() => void}
export const ColorModeContext = createContext<ThemeContextType>({
	toggleColorMode: () => {}
})

export const App = () => {
	 const [mode, setMode] = useState<'light' | 'dark'>('light')

		const colorMode = useMemo(
			() => ({
				toggleColorMode: () => {
					setMode((prevMode: PaletteMode) =>
						prevMode === 'light' ? 'dark' : 'light'
					)
				}
			}),
			[]
		)
 const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Root />
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}


