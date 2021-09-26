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

    /**
     * Define routes
     */
    const routes = {
        // Exact path
        '/': Dashboard,
        '/jobs': Jobs,
        '/users': Users,
        '/profile': Profile,

        // Catch-all
        // This is optional, but if present it must be the last
        '*': NotFound,
    }
</script>

<Router {routes}/>