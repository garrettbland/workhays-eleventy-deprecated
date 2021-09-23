const Liquid = require('liquidjs')
const path = require('path')
exports.handler = async (event, context) => {
    try {
        let engine = new Liquid.default({
            root: path.resolve(__dirname, '../src/'),
            dynamicPartials: true,
            extname: '.liquid',
        })

        console.log('happening...')
        /**
         * We get this from netlify. We split up the string
         * '/jobs/ds9024' into an array ['','jobs','123']
         */
        const event_path = event.path.split('/')
        const job_id = event_path[2]

        /**
         * Make sure we are grabbing the /jobs/{id} and
         * sending whatever else to 404
         */
        if (event_path.length !== 3) {
            return {
                statusCode: 404,
                body: `Error path not found`,
            }
        }

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
            },
            body: await engine.renderFile('pages/jobs/example', {
                name: `job id ${job_id}`,
            }),
        }

        // return {
        //     statusCode: 200,
        //     body: `Hello from serverless job id (${job_id})`,
        // }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: 'Something went wrong',
        }
    }
}
