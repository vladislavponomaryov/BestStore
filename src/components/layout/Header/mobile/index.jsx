import MenuIcon from '@mui/icons-material/Menu'
import StoreIcon from '@mui/icons-material/Store'
import { Box, IconButton, Menu, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { STORE_NAME } from '../../../../config/constants'
import Categories from '../../../ui/categories'

function MobileAppBar(props) {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)
	const navigate = useNavigate()

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					onClick={handleOpenNavMenu}
					color='inherit'
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id='menu-appbar'
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
				>
					<Categories view='mobile' />
				</Menu>
			</Box>

			<StoreIcon sx={{ display: { xs: 'flex', md: 'none' }, color: 'white', mr: 1 }} />
			<Typography
				variant='h5'
				noWrap
				onClick={() => navigate('/')}
				sx={{
					mr: 2,
					display: { xs: 'flex', md: 'none' },
					flexGrow: 1,
					fontFamily: 'monospace',
					fontWeight: 700,
					letterSpacing: '.3rem',
					color: 'white',
					textDecoration: 'none',
				}}
			>
				{STORE_NAME}
			</Typography>
		</>
	)
}

export default MobileAppBar
