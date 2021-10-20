<script>
    import { is_authenticated } from '../stores'
    import { push } from 'svelte-spa-router'
    import { auth } from '../firebase'
    import { signInWithEmailAndPassword } from 'firebase/auth'

    let is_loading = false
    let inputs_validated = false
    let email = ''
    let password = ''
    let error_message = ''

    /**
     * Validate inputs on state change
     */
    $: {
        if (email === '' || password === '') {
            inputs_validated = false
        } else {
            inputs_validated = true
        }
    }

    const onEnterKey = (event) => {
        if (event.charCode === 13) {
            if (inputs_validated) {
                sign_in()
            }
        }
    }

    const sign_in = async () => {
        try {
            if (!inputs_validated) throw Error('Incomplete fields')
            is_loading = true
            const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            if (user) {
                is_authenticated.set(true)
                // navigate to dashboard
                push('#/dashboard')
            }
        } catch (err) {
            if (err.code === 'auth/invalid-email') {
                error_message =
                    'Invalid email address. Please try again.'
            } else if (err.code === 'auth/user-not-found') {
                error_message =
                    'An account with that email address was not found. Please try again.'
            } else if (err.code === 'auth/wrong-password') {
                error_message =
                    'Incorrect password. Please try again.'
            } else {
                error_message =
                    'There was an error signing in. Please try again'
            }
        } finally {
            is_loading = false
        }
    }
</script>

<svelte:head>
    <title>Sign In | Work Hays</title>
</svelte:head>

<section>
    <h1 class="text-3xl font-bold text-indigo-600 mb-3">Sign In</h1>
    <div class="prose prose-lg mb-8">
        <p>Sign into your account to manage your job postings.</p>
        <p
            class="bg-gray-100 text-gray-600 px-3 py-1 flex flex-row items-center space-x-2 rounded border border-gray-200"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
            </svg>
            <span class="prose">
                Don't have an account? <a href="#/register"
                    >Click here</a
                >
                to register and post your jobs for
                <span class="font-bold">free</span>.
            </span>
        </p>
        {#if error_message !== ''}
            <p
                class="bg-red-100 text-red-600 px-3 py-1 flex flex-row items-center space-x-2 rounded border border-red-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span class="prose">
                    {error_message}
                </span>
            </p>
        {/if}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        <input
            bind:value={email}
            name="email"
            placeholder="Email"
            type="email"
        />
        <input
            bind:value={password}
            name="password"
            placeholder="Password"
            type="password"
            on:keypress={(e) => onEnterKey(e)}
        />
    </div>
    <button
        on:click={() => (inputs_validated ? sign_in() : null)}
        class="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-5 py-2 transition-all"
        class:disabled={inputs_validated === false}
        >{is_loading ? 'Loading...' : 'Sign In'}</button
    >
</section>
