import createAuth0Client from '@auth0/auth0-spa-js';

const config = {
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    client_id: process.env.VUE_APP_AUTH0_CLIENT_ID
};


export async function stateChangeHandler(context) {
    context.state.isAuthenticated = !!(await context.state.auth0.isAuthenticated());
    context.state.user = await context.state.auth0.getUser();
    context.state.loading = false;
}

export function initAuth(context) {
    context.state.loading = true;
    createAuth0Client({
        domain: config.domain,
        client_id: config.client_id,
        cacheLocation: 'localstorage',
        redirect_uri: window.location.origin
     })
     .then(async auth => {
        context.state.auth0 = auth;
        try {
            await stateChangeHandler(context);
        } catch (error) {
            console.log('Error handling the state', error)
        }
     })
     .catch(error => {
        console.log('Error while creating the instance of Auth0, error:', error)
     })      
}

export async function login(context) {
    try {
        await context.state.auth0.loginWithPopup();
        try {
            await stateChangeHandler(context);
        } catch (error) {
            console.log('Error while handling the state change', error)
        }
    } catch (login_error) {
        console.log('Error while login with popup', login_error)
    }
}

export async function logout(context) {
    try {
        await context.state.auth0.logout({
            returnTo: window.location.origin,
        });
        context.commit('resetData')
    } catch (error) {
        console.log('Error while logout', error)
    }
}
