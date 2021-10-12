const chalk = require('chalk')
const matter = require('gray-matter')
const fs = require('fs')
const HELP_ARTICLES_DIR = './src/articles/'

/**
 * Retrieve all posts from HELP_ARTICLES_DIR and returns the gray matter object from string
 */
console.log(chalk.green('🚚 Getting articles...'))

const sort_alphabetically = (x, y) => {
    if (x.data.title.toLowerCase() < y.data.title.toLowerCase()) {
        return -1
    }
    if (x.data.title.toLowerCase() > y.data.title.toLowerCase()) {
        return 1
    }
    return 0
}

const articles = fs
    .readdirSync(HELP_ARTICLES_DIR, {
        withFileTypes: true,
    })
    .filter((item) => !item.isDirectory())
    .map((item) => matter.read(`${HELP_ARTICLES_DIR}/${item.name}`))
    .sort(sort_alphabetically)

console.log(
    chalk.green(`📝 Retrieved ${articles.length} articles...`)
)

module.exports = articles
