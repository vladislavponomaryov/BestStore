import { AppBar, Box, Container, Toolbar } from '@mui/material'
import * as React from 'react'

import Basket from '../../ui/basket'

import DesktopAppBar from './desktop'
import MobileAppBar from './mobile'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export default function MyAppBar() {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<DesktopAppBar />
					<MobileAppBar />
					<Box sx={{ flexGrow: 0 }}>
						<Basket />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
