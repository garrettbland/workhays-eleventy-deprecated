const htmlmin = require('html-minifier')
const lazyloadimages = require('@garrettbland/lazy-load-images')
const imagealttagcheck = require('@garrettbland/img-alt-tag-check')

const now = Date.now().toString()

module.exports = function (eleventyConfig) {
    /**
     * Setup nice overlay so we are foreced to fix errors
     */
    eleventyConfig.setBrowserSyncConfig({
        ...eleventyConfig.browserSyncConfig,
    })

    /**
     * Watch styles generated by tailwind
     */
    eleventyConfig.addWatchTarget('dist/style.css')

    /**
     * Pass directories & files to top level of dist
     * Add Alpine JS CDN build directly
     */
    eleventyConfig.addPassthroughCopy({ public: '/' })
    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.min.js': './alpine.js',
    })

    /**
     * Add version shortcode to version and cache bust our stylesheet and
     * javascript packages
     */
    eleventyConfig.addShortcode('version', function () {
        return now
    })

    /**
     * Validates that all images have an alt tag & value
     */
    eleventyConfig.addPlugin(imagealttagcheck)

    /**
     * Add native lazy loading to images
     */
    eleventyConfig.addPlugin(lazyloadimages)

    /**
     * Minify HTML
     */
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
        if (outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
        } else {
            return content
        }
    })

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src/pages',
            includes: '../_includes',
            layouts: '../_includes',
            data: '../_data',
            output: 'dist',
        },
    }
}
