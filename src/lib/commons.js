import AWS from 'aws-sdk';
import middy from '@middy/core'
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';
import createError from 'http-errors';
import { handler } from '../handlers/createPlaneta';

export default handler => middy(handler)
    .use([
        httpJsonBodyParser(),
        httpEventNormalizer(),
        httpErrorHandler(),
    ]);