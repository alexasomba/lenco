import { existsSync } from 'node:fs'
import process from 'node:process'
import { defineConfig } from 'drizzle-kit'

for (const envFile of ['.env.local', '.env']) {
  if (existsSync(envFile)) process.loadEnvFile(envFile)
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/*.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
})
