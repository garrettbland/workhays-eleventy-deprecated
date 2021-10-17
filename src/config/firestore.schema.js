/**
 * Firestore database schema
 * Useful to keep track of firestore setup
 * Might be weird, but helps visualize for development
 */

/**
 * ------------------------
 * All collections in firestore
 * Each item in a collection is referred to as a 'document'
 * Each document has a uniquely assigned id
 * ------------------------
 */
const collections = {
    employers: [employer],
    jobs: [job],
    subscribers: [subscriber],
    users: [user],
}

/**
 * ------------------------
 * Employer
 * ------------------------
 */
const employer = {
    members: `[
        {
            user_id: 'STRING',
            role: 'owner | admin | manager'
        }
    ]`,
    title: 'STRING',
    website: 'STRING',
    status: 'pending | verified | disabled',
    created_at: 'timestamp',
    updated_at: 'timestamp',
}

/**
 * ------------------------
 * Job
 * ------------------------
 */
const job = {
    employer_id: 'STRING',
    title: 'STRING',
    job_type: 'part_time | full_time',
    description: 'STRING',
    application_link: 'STRING',
    status: 'active | inactive | archived',
    created_at: 'timestamp',
    updated_at: 'timestamp',
}

/**
 * ------------------------
 * User
 * ------------------------
 */
const user = {
    uid: 'STRING',
    member_of: '[employer_id]',
    first_name: 'STRING',
    last_name: 'STRING',
    status: 'active | disabled',
    created_at: 'timestamp',
    updated_at: 'timestamp',
}

/**
 * ------------------------
 * Subscriber
 * ------------------------
 */
const subscriber = {
    email: 'STRING',
    industry: 'STRING',
    status: 'active | disabled',
    created_at: 'timestamp',
    updated_at: 'timestamp',
}
