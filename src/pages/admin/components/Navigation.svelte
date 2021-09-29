<script>
    import { is_authenticated } from '../stores'
    import { push } from 'svelte-spa-router'

    const sign_out = () => {
        is_authenticated.set(false)
        push('#/sign-in')
    }
</script>

<div>
    <a href="#/dashboard">Dashboard</a>
    <a href="#/jobs">Jobs</a>
    <a href="#/users">Users</a>
    <a href="#/profile">Profile</a>
    <button on:click={() => sign_out()}>Sign Out</button>
</div>