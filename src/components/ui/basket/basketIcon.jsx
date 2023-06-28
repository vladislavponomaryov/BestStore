import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import * as React from 'react'

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))

export default function BasketIcon({ badgeCount, toggleDrawer, state }) {
	return (
		<IconButton aria-label='cart' color='inherit' onClick={toggleDrawer('right', true)}>
			<StyledBadge badgeContent={badgeCount} color='secondary'>
				<ShoppingCartIcon />
			</StyledBadge>
		</IconButton>
	)
}
