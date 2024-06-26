const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const requestBody = JSON.parse(event.body);
    
    const params = {
        TableName: 'shopping_lists',
        Key: {
            'pk': event.queryStringParameters.listId
        },
        UpdateExpression: 'set #attributeName = :value',
        ExpressionAttributeNames: {
            '#attributeName': requestBody.attributeName
        },
        ExpressionAttributeValues: {
            ':value': requestBody.newValue
        },
        ReturnValues: 'UPDATED_NEW'
    };
    
    try {
        const data = await dynamodb.update(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Attributes),
        };
    } catch (err) {
        console.error('Error updating item in DynamoDB', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error updating item in DynamoDB'),
        };
    }
};
