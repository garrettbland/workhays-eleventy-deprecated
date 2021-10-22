<script>
    /**
     * Authentication state from store
     */
    import {
        is_authenticated,
        user_email,
        user_email_verified,
    } from '../stores'

    /**
     * Initialize Firebase and check authorization
     */
    //import { firebaseapp } from '../firebase'
    // import { onAuthStateChanged } from '@firebase/auth'
    import { onAuthStateChanged } from 'firebase/auth'
    import { auth } from '../firebase'
    import Loading from './Loading'

    let is_loading = true

    onAuthStateChanged(auth, (user) => {
        // check on user status
        console.log('checking user...')
        if (user) {
            is_loading = false
            console.log('setting logged in status to true...')
            is_authenticated.set(true)
            user_email.set(user.email)
            user_email_verified.set(user.emailVerified)
        } else {
            is_loading = false
            console.log('setting logged in status to false...')
            is_authenticated.set(false)
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
