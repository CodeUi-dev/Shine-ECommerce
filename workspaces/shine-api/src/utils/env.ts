import { z } from "zod";

const envSchema = z.object({
	PORT: z.coerce.number(),
	DB_HOST: z.string(),
	DB_PORT: z.coerce.number(),
	DB_USERNAME: z.string(),
	DB_PASSWORD: z.string(),
	DB_DATABASE: z.string(),
	STRIPE_PUBLIC_KEY: z.string(),
	STRIPE_PRIVATE_KEY: z.string()
})

const env = envSchema.safeParse(process.env)

if(!env.success) {
	console.error('Invalid Environment variables!', env.error.format())
  throw new Error('Invalid Environment variables')
}

export default env.data