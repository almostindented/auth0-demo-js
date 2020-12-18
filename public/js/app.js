/*

            Copyright 2020 @almostindented.
 Distributed under the Boost Software License, Version 1.0.
        (See accompanying file LICENSE or copy at
          https://www.boost.org/LICENSE_1_0.txt)

 */

let auth0 = null;
const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();

    auth0 = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId
    });
};
const updateUI = async () => {
    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
        let user = await auth0.getUser();
        document.getElementById("user_email").textContent = user.email;
        document.getElementById("user_name").textContent = user.nickname;
        document.getElementById("user_img").src = user.picture;

        document.getElementById('main').scrollIntoView();

    } else {
        document.getElementById('header').scrollIntoView();
    }
};
const login = async () => {
    await auth0.loginWithRedirect({
        redirect_uri: window.location.origin
    });
};

window.onload = async () => {
    await configureClient();
    updateUI();

    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
        // show the gated content
        return;
    }

    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {

        // Process the login state
        await auth0.handleRedirectCallback();

        updateUI();

        // Use replaceState to redirect the user away and remove the querystring parameters
        window.history.replaceState({}, document.title, "/");
    }
}

const logout = () => {
    auth0.logout({
        returnTo: window.location.origin
    });
};