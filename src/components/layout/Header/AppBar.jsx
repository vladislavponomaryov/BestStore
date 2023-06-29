import MenuIcon from '@mui/icons-material/Menu'
import StoreIcon from '@mui/icons-material/Store'
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { PAGES, STORE_NAME } from '../../../config/constants'
import Basket from '../../ui/basket'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export default function MyAppBar() {
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
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
						<StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
						<Typography
							variant='h6'
							noWrap
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							{STORE_NAME}
						</Typography>
					</Link>

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
					<StoreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{PAGES.map((page, index) => {
							const { title, path } = page
							return (
								<Link key={`mobile${index}`} to={path}>
									<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
										{title}
									</Button>
								</Link>
							)
						})}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Basket />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
