import { z } from 'zod'

export const formSchema = z.object({
	firstName: z
		.string()
		.min(8, 'First name must be at least 8 characters long')
		.max(15, 'First name must be at most 15 characters long'),
	lastName: z
		.string()
		.min(8, 'Last name must be at least 8 characters long')
		.max(15, 'Last name must be at most 15 characters long')
})

export type FormSchemaProps = z.infer<typeof formSchema>
