<script>
    import { is_authenticated } from '../stores'
    import { push, link } from 'svelte-spa-router'
    import active from 'svelte-spa-router/active'
    import { auth } from '../firebase'
    import { signOut } from 'firebase/auth'

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

<div class="flex flex-col space-y-5">
    <a
        href="/dashboard"
        use:link
        use:active={{
            className: 'text-indigo-600',
            inactiveClassName: 'text-gray-700',
        }}>Dashboard</a
    >
    <a
        href="/jobs"
        use:link
        use:active={{
            className: 'text-indigo-600',
            inactiveClassName: 'text-gray-700',
        }}>Jobs</a
    >
    <a
        href="/users"
        use:link
        use:active={{
            className: 'text-indigo-600',
            inactiveClassName: 'text-gray-700',
        }}>Users</a
    >
    <a
        href="/profile"
        use:link
        use:active={{
            className: 'text-indigo-600',
            inactiveClassName: 'text-gray-700',
        }}>Profile</a
    >
    <button on:click={() => sign_out()}>Sign Out</button>
</div>
