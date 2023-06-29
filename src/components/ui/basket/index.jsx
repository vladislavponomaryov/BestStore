import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import BasketIcon from './basketIcon'
import BasketDrawerBar from './drawer/drawerBar'

function Basket() {
	const basketItems = useSelector(state => state.basket.items)

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
			<BasketDrawerBar basketItems={basketItems} state={state} toggleDrawer={toggleDrawer} />
			<BasketIcon badgeCount={basketItems.length} state={state} toggleDrawer={toggleDrawer} />
		</>
	)
}

export default Basket
