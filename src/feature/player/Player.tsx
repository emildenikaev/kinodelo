import { MouseEvent, useEffect, useRef, useState } from 'react'
import {
	Player,
	BigPlayButton,
	ControlBar,
	LoadingSpinner,
	ForwardControl,
	ReplayControl
} from 'video-react'
import styles from './styles.module.scss'
import SettingsIcon from '@mui/icons-material/Settings'
import classNames from 'classnames'
import { PlayerMenu } from './MenuPlayer'

interface IPlayer {
	controls?: boolean
	muted?: boolean
	poster?: string
	src: string
	type?: string
	className?: string
}

export const MyPlayer = ({
	src,
	poster,
	muted = false,
	type = 'video/mp4',
	className = ''
}: IPlayer) => {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	return (
		<div className={styles.player}>
			<PlayerMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open} />
			<Player poster={poster} muted={muted}>
				<source src={src} type={type} />
				<ControlBar autoHide={false}>
					<ReplayControl
						seconds={10}
						//@ts-ignore
						order={1.1}
					/>
					<ForwardControl
						seconds={30}
						//@ts-ignore
						order={1.2}
					/>

					<button
						id="demo-positioned-button"
						aria-controls={open ? 'demo-positioned-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						className={classNames(className, {
							'video-react-control': true,
							'video-react-button': true
						})} //@ts-ignore
						order={7}
					>
						<SettingsIcon />
					</button>
				</ControlBar>
				<LoadingSpinner />
				<BigPlayButton position="center" />
			</Player>
		</div>
	)
}
