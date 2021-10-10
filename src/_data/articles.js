const chalk = require('chalk')
const matter = require('gray-matter')
const fs = require('fs')
const HELP_ARTICLES_DIR = './src/articles/'

/**
 * Retrieve all posts from HELP_ARTICLES_DIR and returns the gray matter object from string
 */
console.log(chalk.green('🚚 Getting articles...'))

const articles = fs
    .readdirSync(HELP_ARTICLES_DIR, {
        withFileTypes: true,
    })
    .filter((item) => !item.isDirectory())
    .map((item) => matter.read(`${HELP_ARTICLES_DIR}/${item.name}`))

console.log(
    chalk.green(`📝 Retrieved ${articles.length} articles...`)
)

module.exports = articles
