const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event.body)
    const { listId, list } = JSON.parse(event.body);

    const params = {
        TableName: 'shopping_lists',
        Item: {
            'pk': listId, // LIST#
            'list': list,
            'created_at': new Date().toISOString(),
        }
    };

    try {
        await dynamodb.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify('Item created successfully'),
        };
    } catch (err) {
        console.error('Error creating item in DynamoDB', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error creating item in DynamoDB'),
        };
    }
};
