import React, { useEffect, useState } from 'react'

import Category from './category'

function Categories({ view }) {
	const [categories, setСategories] = useState([])
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/categories`)
			.then(res => res.json())
			.then(json => setСategories(json))
	}, [])

	return (
		<>
			{categories.map(category => (
				<Category key={category} name={category} view={view} />
			))}
		</>
	)
}

export default Categories
