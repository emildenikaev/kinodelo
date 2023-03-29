import { AppBar, Box, FormControl, FormLabel, IconButton, Toolbar, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useContext } from 'react';
import { ColorModeContext } from '../../App';

export const MyHeader = () => {
	 const theme = useTheme()
		const colorMode = useContext(ColorModeContext)
  return (
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position="fixed"
					component="nav"
					color="inherit"
				>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="open drawer"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Box component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
							Кинодело
						</Box>

						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }}>
							<IconButton
								sx={{ ml: 1 }}
								onClick={colorMode.toggleColorMode}
								color="inherit"
							>
								{theme.palette.mode === 'dark' ? (
									<Brightness7Icon />
								) : (
									<Brightness4Icon />
								)}
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			// </Box>
		)
}
