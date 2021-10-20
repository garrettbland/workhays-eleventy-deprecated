<script>
    import Layout from '../components/Layout'
    import UpdateEmail from '../components/profile/UpdateEmail'
    import PasswordReset from '../components/profile/PasswordReset'
</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<Layout>
    <div class="space-y-12">
        <UpdateEmail />
        <PasswordReset />
    </div>
</Layout>
