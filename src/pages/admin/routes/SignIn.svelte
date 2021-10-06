<svelte:head>
    <title>Sign In | Work Hays</title>
</svelte:head>

<script>
    import { is_authenticated } from '../stores'
    import { push } from 'svelte-spa-router'
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
    const auth = getAuth()

    let email, password = ''

    const sign_in = async () => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            if (user) {
                is_authenticated.set(true)
                // navigate to dashboard
                push('#/dashboard')
            }
        } catch (err) {
            console.log(err)
        }

    }
</script>

<section>
    <h1 class="text-3xl font-bold text-indigo-600 mb-3">Sign In</h1>
    <div class="prose prose-lg prose-blue mb-8">
        <p>
            Don't have an account? <a href="#/register">Click here</a> to
            register and post your jobs for free.
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            />
        </div>
    <button on:click={() => sign_in()} class="bg-gray-400 p-4 rounded">Sign in</button>
</section>