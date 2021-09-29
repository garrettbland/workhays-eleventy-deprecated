<script>
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

    /**
     * Authentication state from store
     */
    import { is_authenticated } from '../stores'

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

{#if $is_authenticated}
    <Router routes={authenticated_routes}/>
{:else}
    <Router routes={public_routes}/>
{/if}
