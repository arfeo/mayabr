import { saveData } from '../utils/storage'

export default function temp(state = 0, {type, payload}) {
	switch(type) {
	case "CHANGE_TEMP":
		{
			saveData("temp", payload)
			return payload
		}
	default:
		{
			return state
		}
	}
}