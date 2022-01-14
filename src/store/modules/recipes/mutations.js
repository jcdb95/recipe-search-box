export function setList (state, data) {
	console.log('DATA ON MUTATION', data)
	state.list = data
}

export function noResults (state, data) {
	state.noResults = data
}
