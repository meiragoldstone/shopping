const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    console.log(event.queryStringParameters);
    const params = {
        TableName: 'shopping_lists',
        Key: {
            'pk': event.queryStringParameters.listId
        }
    };
    
    try {
        const data = await dynamodb.get(params).promise();
        if (!data.Item) {
            return {
                statusCode: 404,
                body: JSON.stringify('Item not found'),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify(data.Item),
        };
    } catch (err) {
        console.error('Error retrieving item from DynamoDB', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error retrieving item from DynamoDB'),
        };
    }
};
