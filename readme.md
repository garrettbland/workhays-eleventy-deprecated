# Work Hays

> Work Hays using 11ty static site generator and serverless

## Development

1. Clone this repo
2. Install packages & install netlify-cli globally
3. Start dev server with `netlify dev`

## How it works

Most of this website is statically generated using @11ty SSG. A few pages are server side rendered
using serverless functions from netlify.

For example, an important page that needs to be SSR, is the individual job. These are shared via
social media and we need the SEO benefits. The remaining pages such as the home page, contact page, admin area,
etc, can all be statically generated.

When a user visits a job page, for example `/jobs/example-job-id`, netlify redirects (assigned in `netlify.toml`)
take over and redirect the user to our serverless function. From there, we grab the job details from the database,
populate the important seo tags, and return the SSG page to the user.
