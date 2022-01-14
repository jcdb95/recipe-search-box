
export function setUser (state, data) {
	state.user = data;
}

export function setLoading (state, data) {
	state.loading = data
}

export function setIfIsAuthenticated (state, data) {
	state.isAuthenticated = data
}

export function setAuth0 (state, data) {
	state.auth0 = data
}

export function resetData (state) {
	state.user = null
    state.loading = false
    state.isAuthenticated = false
    state.auth0 = null
}
