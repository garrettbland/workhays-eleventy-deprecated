<script>
    let first_name,
        last_name,
        email,
        business,
        password_confirm,
        password = ''

    const create_account = async () => {
        alert('created account')
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
                your current Work Hays administrator to be added, or <a
                    href="/contact">contact us</a
                > for assistance.
            </span>
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        <input
            bind:value={first_name}
            name="first_name"
            placeholder="First Name"
            type="text"
        />
        <input
            bind:value={last_name}
            name="last_name"
            placeholder="Last Name"
            type="text"
        />
        <input
            bind:value={email}
            name="email"
            placeholder="Email"
            type="email"
        />
        <input
            bind:value={business}
            name="business"
            placeholder="Business or Employer"
            type="text"
        />
        <input
            bind:value={password}
            name="password"
            placeholder="Password"
            type="password"
        />
        <input
            bind:value={password_confirm}
            name="password_confirm"
            placeholder="Confirm Password"
            type="password"
        />
    </div>
    <button
        on:click={() => create_account()}
        class="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-5 py-2 transition-all"
        >Register Employer</button
    >
</section>
