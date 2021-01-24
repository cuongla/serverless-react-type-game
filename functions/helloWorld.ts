import { APIGatewayProxyEvent, Context, APIGatewayProxyCallback } from 'aws-lambda';

exports.handler = (event: APIGatewayProxyEvent, context: Context, cabllback: APIGatewayProxyCallback) => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            msg: "Hello Wortld"
        })
    }
}