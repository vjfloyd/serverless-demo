import AWS from 'aws-sdk';
import commonMiddleware from '../lib/commonMiddleware';
import createError from 'http-errors';


const dynamo = new AWS.DynamoDB.DocumentClient();

async function getPlanetas(event, context) {
  let planetas
  try {
      const result = await dynamo.scan({ 
        TableName: process.env.PLANETA_TABLE_NAME 
    }).promise();
    planetas = result.Items;

  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);    
  }  

  return {
    statusCode: 201,
    body: JSON.stringify({ planetas }),
  };
}

export const handler = commonMiddleware(getPlanetas);




