<svelte:head>
    <title>Sign In | Work Hays</title>
</svelte:head>

<script>
    import { is_authenticated } from '../stores'
    import { push } from 'svelte-spa-router'
    const sign_in = () => {
        is_authenticated.set(true)
        // navigate to dashboard
        push('#/dashboard')
    }
</script>

<section>
    <h1 class="text-3xl font-bold text-indigo-600 mb-3">Sign In</h1>
    <div class="prose prose-lg prose-blue">
        <p>
            Don't have an account? <a href="#/register">Click here</a> to
            register and post your jobs for free.
        </p>
    </div>
    <button on:click={() => sign_in()} class="bg-gray-400 p-4 rounded">Sign in</button>
</section>