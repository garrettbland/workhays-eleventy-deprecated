<script>
    import { is_authenticated } from '../stores'
    import { push } from 'svelte-spa-router'
    import { getAuth, signOut } from 'firebase/auth'
    const auth = getAuth()

    const sign_out = async () => {
        try {
            await signOut(auth)
            is_authenticated.set(false)
            push('#/sign-in')
        } catch (err) {
            console.error(err)
        }
    }
</script>

<div>
    <a href="#/dashboard">Dashboard</a>
    <a href="#/jobs">Jobs</a>
    <a href="#/users">Users</a>
    <a href="#/profile">Profile</a>
    <button on:click={() => sign_out()}>Sign Out</button>
</div>
