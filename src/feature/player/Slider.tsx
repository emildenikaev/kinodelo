import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export const SliderColors = ()  => {
	return (
		<Box width={200}>
			<Typography gutterBottom>Изменить контрастность</Typography>
			<Slider
				defaultValue={50}
				aria-label="Default"
				step={10}
				min={10}
				max={110}
			/>
		</Box>
	)
}
