import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '../components/layout'
import CategoryPage from '../components/screens/category'
import CheckoutPage from '../components/screens/checkout/checkoutPage'
import HomePage from '../components/screens/home'
import ProductPage from '../components/screens/product'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'catalog/product/:productId',
				element: <ProductPage />,
			},
			{
				path: 'catalog/categories/:categoryName',
				element: <CategoryPage />,
			},
			{
				path: 'checkout',
				element: <CheckoutPage />,
			},
		],
		errorElement: (
			<Layout>
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					This is an error alert — <strong>404 Page not Found!</strong>
				</Alert>
			</Layout>
		),
	},
])
