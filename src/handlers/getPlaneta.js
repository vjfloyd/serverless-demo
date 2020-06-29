import AWS from 'aws-sdk';
import commonMiddleware from '../lib/commonMiddleware';
import createError from 'http-errors';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getPlaneta(event, context) {
  let planeta
  const { id } = event.pathParameters;

  try {
     const result = await dynamodb.get({
        TableName: process.env.PLANETA_TABLE_NAME,
        Key: { id },
     }).promise();
     planeta = result.Item;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);    
  }  

  if (!planeta) {
    throw new createError.NotFound(`El planeta con el id "${id}" no existe`);
  }


  return {
    statusCode: 201,
    body: JSON.stringify({ planeta }),
  };
}

export const handler =  commonMiddleware(getPlaneta);





