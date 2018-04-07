export default function selected(state = {}, {type, payload}) {
	switch (type) {
		case 'SELECT_CITY':
		{
			return payload;
		}
		case 'CLEAR_SELECTED':
		{
			return {};
		}
		default:
		{
			return state;
		}
	}
};
