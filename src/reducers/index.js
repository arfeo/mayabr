import { combineReducers } from 'redux'

import widgets from './widgets'
import selected from './selected'
import temp from './temp'

export default combineReducers({
	widgets,
	selected,
	temp
})