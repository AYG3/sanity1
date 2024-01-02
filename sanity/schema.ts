import { type SchemaTypeDefinition } from 'sanity'

import project from './project-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
}
