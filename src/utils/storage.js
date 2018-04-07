export const saveData = (c, d) => {
	try {
		localStorage.setItem(c, d);
	} catch(e) {
		console.error(e);
	}
};
