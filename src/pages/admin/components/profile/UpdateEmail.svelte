<script>
    let is_loading = false
    let input_validated = false
    let new_email = ''

    /**
     * Validate inputs on state change
     */
    $: {
        if (new_email === '') {
            input_validated = false
        } else {
            input_validated = true
        }
    }

    /**
     * Reset the users email and sign out
     */
    const reset_email = async () => {
        alert('reset email')
    }
</script>

<div class="border border-gray-200 rounded p-5 space-y-5">
    <div>
        <p class="text-lg pb-2 text-black">Update Email</p>
        <p class="text-gray-600 antialiased">
            Update your email below. Please make sure you have access
            to this new email for future password resets,
            notifications, and more. This email is not public and only
            used to login.
        </p>
    </div>
    <div>
        <input
            bind:value={new_email}
            class="w-full"
            name="email"
            placeholder="Email"
            type="email"
        />
    </div>
    <div>
        <button
            on:click={() => (input_validated ? reset_email() : null)}
            class="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-5 py-2 transition-all"
            class:disabled={input_validated === false}
            >{is_loading ? 'Loading...' : 'Submit'}</button
        >
    </div>
</div>
