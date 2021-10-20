<script>
    let is_loading = false

    /**
     * Send the password reset email to the users email address
     */
    const send_password_reset_email = async () => {
        alert('send email')
    }
</script>

<div class="border border-gray-200 rounded p-5 space-y-5">
    <div>
        <p class="text-lg pb-2 text-black">Password Reset</p>
        <p class="text-gray-600 antialiased">
            Click below to reset your password. A password reset link
            will be emailed to you.
        </p>
    </div>
    <div>
        <button
            class="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-5 py-2 transition-all"
            type="submit"
            on:click={() => send_password_reset_email()}
        >
            {is_loading ? 'Loading...' : 'Send Password Reset Email'}
        </button>
    </div>
</div>
