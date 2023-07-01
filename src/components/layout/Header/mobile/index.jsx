import MenuIcon from '@mui/icons-material/Menu'
import StoreIcon from '@mui/icons-material/Store'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { PAGES, STORE_NAME } from '../../../../config/constants'

function MobileAppBar(props) {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

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
					{PAGES.map((page, index) => {
						const { title, path } = page
						return (
							<Link key={`main${index}`} to={path}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{title}</Typography>
								</MenuItem>
							</Link>
						)
					})}
				</Menu>
			</Box>

			<Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
				<StoreIcon sx={{ mr: 1 }} />
				<Typography
					variant='h5'
					noWrap
					component='a'
					href=''
					sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
						flexGrow: 1,
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					{STORE_NAME}
				</Typography>
			</Box>
		</>
	)
}

export default MobileAppBar
