import { z } from 'zod';

export const loginS = z.object({
  email: z.string().email().min(1, 'Enter a valid email'),
  password: z.string().min(6, 'Enter a valid password'),
});

export type LoginS = z.infer<typeof loginS>;
