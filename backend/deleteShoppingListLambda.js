const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const params = {
        TableName: 'shopping_lists',
        Key: {
            'pk': event.queryStringParameters.listId
        }
    };
    
    try {
        const data = await dynamodb.delete(params).promise();
        return {
            statusCode: 204, // 204 indicates successful deletion
            body: JSON.stringify('Item deleted successfully'),
        };
    } catch (err) {
        console.error('Error deleting item from DynamoDB', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error deleting item from DynamoDB'),
        };
    }
};
