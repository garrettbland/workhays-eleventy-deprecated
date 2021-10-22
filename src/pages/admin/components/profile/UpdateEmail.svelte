<script>
    import { user_email } from '../../stores'
    import { auth } from '../../firebase'
    import { updateEmail } from 'firebase/auth'

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
        <p class="text-gray-600 antialiased mb-4">
            Update your email below. An email will be sent to the
            current email address that allows to revoke the email
            address change, in order to protect against account
            hijacking.
        </p>
        <p class="text-gray-600 antialiased">
            Current: <span class="text-black">{$user_email}</span>
        </p>
    </div>
    <div>
        <input
            bind:value={new_email}
            class="w-full"
            name="email"
            placeholder="New Email Address"
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
