import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Category({ name }) {
	const link = '/catalog/categories/' + name
	//const link = '/catalog/categories/' + name.toLowerCase().replace(/[^A-Za-z]/g, '')
	return (
		<>
			<Link to={link}>
				<Button sx={{ my: 2, color: 'white', display: 'block' }}>{name}</Button>
			</Link>
		</>
	)
}

export default Category
