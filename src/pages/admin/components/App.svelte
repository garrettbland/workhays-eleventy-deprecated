<script>
    /**
     * Authentication state from store
     */
    import {
        is_authenticated,
        user_email,
        user_email_verified,
    } from '../stores'
    import { onAuthStateChanged } from 'firebase/auth'
    import { auth } from '../firebase'
    import Loading from './Loading'

    let is_loading = true

    /**
     * Check if local storage key exists. If it doesn't, then
     * create it. We use this to display "Sign in" or "Dashboard"
     * in navbar.liquid
     */
    onMount(() => {
        if (!localStorage.getItem('is_user_authenticated') === null) {
            localStorage.setItem('is_user_authenticated', 'false')
        } else {
            console.log(localStorage.getItem('is_user_authenticated'))
        }
    })

    const set_user_local_storage = (user_state) => {
        /**
         * Set local storage item so we can display 'sign in'
         * or 'dashboard' in navbar.liquid.
         *
         * We have to manually dispatch the storage event, because
         * the 'storage' event only gets picked up by the listener
         * if localStorage was changed in another browsers tab/window
         */
        localStorage.setItem('is_user_authenticated', user_state)
        dispatchEvent(new Event('storage'))
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            /**
             * User is signed in
             */
            is_loading = false
            is_authenticated.set(true)
            user_email.set(user.email)
            user_email_verified.set(user.emailVerified)
            set_user_local_storage(true)
        } else {
            /**
             * User is not signed in
             */
            is_loading = false
            is_authenticated.set(false)
            set_user_local_storage(false)
        }
    })

    /**
     * Admin Router
     * Svelte SPA Router Documentation Below
     * https://github.com/ItalyPaleAle/svelte-spa-router
     */
    import Router from 'svelte-spa-router'

    /**
     * Import all available routes
     */
    import Dashboard from '../routes/Dashboard'
    import Jobs from '../routes/Jobs'
    import Users from '../routes/Users'
    import Profile from '../routes/Profile'
    import NotFound from '../routes/NotFound'
    import SignIn from '../routes/SignIn'
    import Register from '../routes/Register'
    import { onMount } from 'svelte'

    const authenticated_routes = {
        '/': Dashboard,
        '/sign-in': Dashboard,
        '/register': Dashboard,
        '/dashboard': Dashboard,
        '/jobs': Jobs,
        '/users': Users,
        '/profile': Profile,
        '*': NotFound,
    }

    /**
     * Define authenticated routes
     */
    const public_routes = {
        '/': SignIn,
        '/sign-in': SignIn,
        '/register': Register,
        '*': NotFound,
    }
</script>

{#if is_loading}
    <Loading />
{:else if $is_authenticated}
    <Router routes={authenticated_routes} />
{:else}
    <Router routes={public_routes} />
{/if}
