import StoreIcon from '@mui/icons-material/Store'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { STORE_NAME } from '../../../../config/constants'
import Categories from '../../../ui/categories'
import SearchComponent from '../../../ui/search'

function DesktopAppBar(props) {
	return (
		<>
			<Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }}>
				<Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
					<StoreIcon sx={{ mr: 1, color: 'white' }} />
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
			</Box>

			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<Categories />
			</Box>

			<SearchComponent />
		</>
	)
}

export default DesktopAppBar
