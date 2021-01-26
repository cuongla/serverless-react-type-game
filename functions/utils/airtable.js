require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
});


const base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE_NAME);
const table = base.table(process.env.REACT_APP_AIRTABLE_TABLE);

const getHighScores = async (filterEmptyRecords) => {
    // sort score from high to low
    const queryOptions = {
        sort: [{ field: 'score', direction: 'desc' }],
    };

    // check filtering
    if (filterEmptyRecords) {
        queryOptions.filterByFormula = `AND(name != "", score > 0)`;
    }
    // get records of airtable
    const records = await table.select(queryOptions).firstPage();
    const formattedRecords = records.map((record) => ({
        id: record.id,
        fields: record.fields,
    }));
    return formattedRecords;
};

module.exports = {
    table,
    getHighScores,
};