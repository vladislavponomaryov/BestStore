import React from 'react'
import { useSelector } from 'react-redux'

import Category from './category'

function Categories() {
	const categories = useSelector(state => state.catalog.categories)

	return (
		<>
			{categories.map(category => (
				<Category key={category} name={category} />
			))}
		</>
	)
}

export default Categories
