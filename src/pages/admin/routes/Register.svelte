<script>
    import { push } from 'svelte-spa-router'
    import { is_authenticated } from '../stores'
    import { auth, db } from '../firebase'
    import { createUserWithEmailAndPassword } from 'firebase/auth'
    import { collection, addDoc, Timestamp } from 'firebase/firestore'

    let is_loading = false
    let inputs_validated = false
    let error_message = ''
    let form = {
        first_name: '',
        last_name: '',
        email: '',
        business: '',
        password: '',
        password_confirm: '',
    }

    /**
     * Validate inputs on state change
     */
    $: {
        if (Object.values(form).includes('')) {
            inputs_validated = false
        } else {
            inputs_validated = true
        }
    }

    const validate_passwords = () => {
        return new Promise((resolve) => {
            if (form.password !== form.password_confirm) {
                resolve(false)
            }
            resolve(true)
        })
    }

    const create_account = async () => {
        try {
            // start loading
            is_loading = true

            // validate that passwords match
            const passwords_match = await validate_passwords()
            if (!passwords_match) throw Error('password-mismatch')

            // Create the user in firebase authentication
            const { user } = await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.password
            )

            // Create the user account in firestore
            const userRef = await addDoc(collection(db, 'users'), {
                uid: user.uid,
                first_name: form.first_name,
                last_name: form.last_name,
                status: 'active',
                created_at: Timestamp.fromDate(new Date()),
                updated_at: Timestamp.fromDate(new Date()),
            })

            // Create the employer account in firestore
            const employerRef = await addDoc(
                collection(db, 'employers'),
                {
                    members: [
                        {
                            user_id: userRef.id,
                            role: 'owner',
                        },
                    ],
                    title: form.business,
                    status: 'pending',
                    created_at: Timestamp.fromDate(new Date()),
                    updated_at: Timestamp.fromDate(new Date()),
                }
            )

            if (userRef && employerRef) {
                is_authenticated.set(true)
                // navigate to dashboard
                push('#/dashboard')
            }
        } catch (err) {
            if (err.code === 'auth/weak-password') {
                error_message =
                    'Password should be at least 6 characters long. Please try again.'
            } else if (err.code === 'auth/invalid-email') {
                error.error_message =
                    'Invalid email address. Please try again.'
            } else if (err.message === 'password-mismatch') {
                error_message =
                    'Passwords do not match. Please try again.'
            } else if (err.code === 'auth/email-already-in-use') {
                error_message =
                    'That email is already in use. Please try again'
            } else {
                /**
                 * Could track these alerts in log rocket or sentry or something
                 */
                error_message =
                    'There was an error during registration. Please try again.'
            }
        } finally {
            is_loading = false
        }
    }
</script>

<svelte:head>
    <title>Registration | Work Hays</title>
</svelte:head>

<section>
    <h1 class="text-3xl font-bold text-indigo-600 mb-3">
        Employer Registration
    </h1>
    <div class="prose prose-lg mb-8">
        <p>
            Please fill out the following form and submit to request
            account access. Once submitted, we will review your
            information and get your new account verified. If you have
            questions, please <a href="/contact">contact us</a>.
        </p>
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
                Already have an account? <a href="#/sign-in"
                    >Click here</a
                > to sign in.
            </span>
        </p>
        <p
            class="bg-orange-100 text-orange-600 px-3 py-1 flex flex-row items-start space-x-2 rounded border border-orange-200"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span class="prose prose-blue">
                If your organization is already registered, you can be
                added to their account to manage job listings. Contact
                the employer administrator to be added, or <a
                    href="/contact">contact us</a
                > for assistance.
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
            bind:value={form.first_name}
            name="first_name"
            placeholder="First Name"
            type="text"
        />
        <input
            bind:value={form.last_name}
            name="last_name"
            placeholder="Last Name"
            type="text"
        />
        <input
            bind:value={form.email}
            name="email"
            placeholder="Email"
            type="email"
        />
        <input
            bind:value={form.business}
            name="business"
            placeholder="Business or Employer"
            type="text"
        />
        <input
            bind:value={form.password}
            name="password"
            placeholder="Password"
            type="password"
        />
        <input
            bind:value={form.password_confirm}
            name="password_confirm"
            placeholder="Confirm Password"
            type="password"
        />
    </div>
    <button
        on:click={() => (inputs_validated ? create_account() : null)}
        class="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-5 py-2 transition-all"
        class:disabled={inputs_validated === false}
        >{is_loading ? 'Loading...' : 'Register'}</button
    >
</section>
