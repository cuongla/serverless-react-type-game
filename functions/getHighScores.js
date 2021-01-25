require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
});


const base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE_NAME);
const table = base.table(process.env.REACT_APP_AIRTABLE_TABLE);


exports.handler = async (event) => {
    try {
        // get first page of table
        const records = await table.select({}).firstPage();
        const formattedRecords = records.map(record => ({
            id: record.id,
            fields: record.fields
        }))
        return {
            statusCode: 200,
            body: JSON.stringify(formattedRecords)
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                err: 'Fialed to query records in Airtable'
            })
        }
    }
}