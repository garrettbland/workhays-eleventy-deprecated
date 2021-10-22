import { writable } from 'svelte/store'

export const is_authenticated = writable(false)
export const user_email = writable(null)
export const user_email_verified = writable(true)
