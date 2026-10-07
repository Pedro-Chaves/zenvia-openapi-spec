import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const closeReason: SchemaObject = {
  title: 'Close reason',
  description: 'A valid reason to archive (close) a conversation assigned to a group.',
  type: 'object',
  properties: {
    key: {
      title: 'Key',
      description: 'The immutable identifier to use as the reason key when archiving a conversation.',
      type: 'string',
      readOnly: true,
      example: 'blocked',
    },
    name: {
      title: 'Name',
      description: 'The close reason display name.',
      type: 'string',
      readOnly: true,
      example: 'Blocked by user',
    },
    type: {
      title: 'Type',
      description: 'Present and set to PURCHASE when closing with this reason counts as a sale.',
      type: 'string',
      enum: ['PURCHASE'],
      readOnly: true,
    },
  },
  required: [
    'key',
    'name',
  ],
};

export const ref = createComponentRef(__filename);
export default closeReason;
