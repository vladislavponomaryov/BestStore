import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import BasketDrawer from './basketDrawer'
import BasketIcon from './basketIcon'

function Basket() {
	const basketItems = useSelector(state => state.basket.items)
	console.log(basketItems)

	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	})

	const toggleDrawer = (anchor, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}
		setState({ ...state, ['right']: open })
	}

	return (
		<>
			<BasketDrawer basketItems={basketItems} state={state} toggleDrawer={toggleDrawer} />
			<BasketIcon badgeCount={basketItems.length} state={state} toggleDrawer={toggleDrawer} />
		</>
	)
}

export default Basket
