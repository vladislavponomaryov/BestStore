import React from 'react'
import { useSelector } from 'react-redux'

import Category from './category'

function Categories({ view }) {
	const categories = useSelector(state => state.catalog.categories)

	return (
		<>
			{categories.map(category => (
				<Category key={category} name={category} view={view} />
			))}
		</>
	)
}

export default Categories
