import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function SearchComponent() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const navigate = useNavigate()
	const onSubmit = data => data?.search && navigate(`catalog/search/${data.search}`)

	return (
		<Paper
			sx={{
				flexGrow: 1,
				display: { xs: 'none', md: 'flex' },
				width: 300,
				maxWidth: '100%',
				mr: 8,
			}}
			component='form'
			noValidate
			autoComplete='off'
			onSubmit={handleSubmit(onSubmit)}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search'
				inputProps={{ 'aria-label': 'search' }}
				label='Test'
				{...register('search', { required: true })}
			/>
			<IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
				<SearchIcon />
			</IconButton>
		</Paper>
	)
}

export default SearchComponent
