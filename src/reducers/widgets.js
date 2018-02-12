import { saveData } from '../utils/storage'

export default function widgets(state = [], {type, payload}) {
	switch(type) {
	case "ADD_WIDGET":
		{
			const widgets = [
				...state,
				payload
			]
			saveData("widgets", JSON.stringify(widgets))
			return widgets
		}
	case "REMOVE_WIDGET":
		{
			const widgets = state.filter(widget => widget.id !== payload)
			saveData("widgets", JSON.stringify(widgets))
			return widgets
		}
	case "UPDATE_WIDGET":
		{
			const widgets = state.map(w => w.id === payload.id ? {...w, ...payload} : w)
			saveData("widgets", JSON.stringify(widgets))
			return widgets
		}
	default:
		{
			return state
		}
	}
}