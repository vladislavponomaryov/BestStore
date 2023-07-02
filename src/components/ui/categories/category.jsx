import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { Link } from 'react-router-dom'

function Category({ name, view = 'desktop' }) {
	const link = '/catalog/categories/' + name
	//const link = '/catalog/categories/' + name.toLowerCase().replace(/[^A-Za-z]/g, '')

	const BootstrapButton = styled(Button)({
		color: view == 'mobile' ? 'primary' : 'white',
	})

	return (
		<Link to={link}>
			<BootstrapButton sx={{ my: 2, display: 'block' }}>{name}</BootstrapButton>
		</Link>
	)
}

export default Category
