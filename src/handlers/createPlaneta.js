import { v4 as uuid } from 'uuid';
import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../lib/commonMiddleware';

const dynamo = new AWS.DynamoDB.DocumentClient();

async function createPlaneta(event, context) {
  const { clima, fechaCreacion, diametro, gravedad, nombre, periodo_orbital, poblacion,
          periodo_rotacion, supercie_agua, terreno, url
   } = event.body;
  const now = new Date();
  const planeta = {
    id: uuid(),
    clima,
    fechaCreacion,
    diametro,
    fechaEdicion : now.toISOString,
    gravedad,
    nombre,
    periodo_orbital,
    poblacion,
    periodo_rotacion,
    supercie_agua,
    terreno,
    url,
  };

    

  try {
    await dynamo.put({
      TableName: process.env.PLANETA_TABLE_NAME,
      Item: planeta,
    }).promise();
      
  } catch (error) {
      console.error(error);
      throw new createError.InternalServerError(error);    
  }

  return {
    statusCode: 201,
    body: JSON.stringify({ planeta }),
  };
}

export const handler =  commonMiddleware(createPlaneta);




