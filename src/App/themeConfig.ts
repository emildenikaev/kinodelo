import { PaletteMode } from "@mui/material";
import { ruRU } from '@mui/material/locale'

 export const getDesignTokens = (mode: PaletteMode) => ({
		palette: {
			primary: {
				main: 'rgb(104,104,104)',
				light: 'rgb(195,195,195)',
				dark: 'rgb(227,227,227)'
			},
			secondary: {
				main: 'rgb(240,50,37)'
			},

			mode,
			...(mode === 'light'
				? {
						background: {
							default: '#fff',
						}
				  }
				: {
						background: {
							// default: 'rgb(46,47,48)'
						},
						primary: {
							main: '#fff',
							light: 'rgb(195,195,195)',
							dark: 'rgb(88,89,89)'
						}
				  })
		},
		mixins: {
			toolbar: {
				minHeight: 48
			}
		},
		ruRU
	})