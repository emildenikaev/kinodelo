import { Menu, MenuItem } from '@mui/material'
import { SliderColors } from './Slider'

interface IPlayerMenu {
	anchorEl: HTMLElement | null
	setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
 open: boolean
}

export const PlayerMenu = ({ anchorEl, setAnchorEl, open }: IPlayerMenu) => {
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<Menu
			id="demo-positioned-menu"
			aria-labelledby="demo-positioned-button"
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
			transformOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
		>
			<MenuItem autoFocus={false} selected={false}>
				{' '}
				<SliderColors />{' '}
			</MenuItem>
			<MenuItem onClick={handleClose}> Дальтоник или эпилептик</MenuItem>
			<MenuItem onClick={handleClose}>Скинуть настройки</MenuItem>
		</Menu>
	)
}
