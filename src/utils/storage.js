export const saveData = (c, d) => {
	try {
		localStorage.setItem(c, d)
	} catch(e) {
		alert(e)
	}
}