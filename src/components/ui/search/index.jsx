import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'

function SearchComponent(props) {
	return (
		<Paper
			sx={{
				flexGrow: 1,
				display: { xs: 'none', md: 'flex' },
				width: 300,
				maxWidth: '100%',
				mr: 8,
			}}
		>
			<InputBase sx={{ ml: 1, flex: 1 }} placeholder='Search' inputProps={{ 'aria-label': 'search' }} />
			<IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
				<SearchIcon />
			</IconButton>
		</Paper>
	)
}

export default SearchComponent
