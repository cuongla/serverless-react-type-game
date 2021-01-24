// import { APIGatewayProxyEvent, APIGatewayProxyCallback } from 'aws-lambda';

// exports.handler = (event: APIGatewayProxyEvent, context: any, cabllback: APIGatewayProxyCallback) => {
//     return {
//         statusCode: 200,
//         body: JSON.stringify({
//             msg: "Hello Wortld"
//         })
//     }
// }

exports.handler = (event, context, cabllback) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: "Hello Wortld"
        })
    }
}