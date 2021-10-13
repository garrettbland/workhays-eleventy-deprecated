/**
 * Firestore database schema
 * Useful to keep track of firestore setup
 * Kind of weird, this would make much more sense using typescript
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
    title: 'STRING',
    website: 'STRING',
}

/**
 * ------------------------
 * Job
 * ------------------------
 */
const job = {
    title: 'STRING',
    employer_id: 'STRING',
}

/**
 * ------------------------
 * User
 * ------------------------
 */
const user = {
    uid: 'STRING',
    first_name: 'STRING',
    last_name: 'STRING',
    role: 'super_admin | admin | owner | member',
}

/**
 * ------------------------
 * Subscriber
 * ------------------------
 */
const subscriber = {
    email: 'STRING',
    industry: 'STRING',
}
