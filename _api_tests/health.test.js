const { makeClient, gql } = require('../core/test.utils')

const APP_VERSION_QUERY = gql`
    query {
        appVersion
    }
`

test('GQL API is healthy', async () => {
    const client = await makeClient()
    const { data } = await client.query(APP_VERSION_QUERY)
    expect(data).toEqual({ 'appVersion': '1.0.0' })
})
