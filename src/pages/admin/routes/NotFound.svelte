<svelte:head>
    <title>Not Found</title>
</svelte:head>

<script>
    import Layout from '../components/Layout.svelte'
    import { is_authenticated } from '../stores'
</script>

<section>
    {#if $is_authenticated}
        <Layout>
            <h1 class="text-3xl font-bold text-indigo-600 mb-3">
                Something went wrong
            </h1>
            <div class="prose prose-lg prose-blue">
                <p>
                    We're sorry, this page couldn't be found. Try refreshing your
                    browser and trying again, your session may have timed out.
                </p>
                <p>
                    If the problem persists, please <a href="/contact">contact us</a> and
                    we will be happy to assist.
                </p>
            </div>
        </Layout>
    {:else}
        <h1 class="text-3xl font-bold text-indigo-600 mb-3">
            Must be signed in
        </h1>
        <div class="prose prose-lg prose-blue">
            <p>
                Sorry! This page is for authenticated users only. If you believe
                this is an error, please try refreshing your browser or <a href="#/sign-in">click here</a> to
                try signing in.
            </p>
            <p>
                If the problem persists, please <a href="/contact">contact us</a> and
                we will be happy to assist.
            </p>
        </div>
    {/if}
</section>