import process from 'node:process'
import { DatabaseSync } from 'node:sqlite'

import { defineRelations } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/node-sqlite'
import { authRelations } from './auth-schema.ts'
import * as appSchema from './schema.ts'

const sqlite = new DatabaseSync(process.env.DATABASE_URL)

export const db = drizzle({
  client: sqlite,
  relations: { ...defineRelations(appSchema), ...authRelations },
})
