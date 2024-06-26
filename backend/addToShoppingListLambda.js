const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    let listItems = await getShoppingListItems(event.queryStringParameters.listId);
    const requestBody = JSON.parse(event.body);
    listItems.push(requestBody.newItem)
    
    const params = {
        TableName: 'shopping_lists',
        Key: {
            'pk': event.queryStringParameters.listId
        },
        UpdateExpression: 'set #list = :value',
        ExpressionAttributeNames: {
            '#list': "list"
        },
        ExpressionAttributeValues: {
            ':value': listItems
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

async function getShoppingListItems(pk) {
    const params = {
        TableName: 'shopping_lists',
        Key: {
            'pk': pk
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
        return data.Item.list;
    } catch (err) {
        console.error('Error retrieving item from DynamoDB', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error retrieving item from DynamoDB'),
        };
    }
}