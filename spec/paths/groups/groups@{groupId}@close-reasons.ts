import { PathItemObject, OperationObject, SchemaObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as closeReasonSchemaRef } from '../../components/schemas/groups/close-reason';
import { ref as groupId } from '../../components/parameters/groups/groupId';
import { ref as errorResponseRef } from '../../components/responses/error';

const get: OperationObject = {
  description: 'List the valid close reasons for archiving a conversation assigned to a group.',
  tags: ['Groups'],
  responses: {
    200: {
      description: 'Close reasons available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: closeReasonSchemaRef,
            },
          } as SchemaObject,
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
  parameters: [{
    $ref: groupId,
  }],
};

export default path;
