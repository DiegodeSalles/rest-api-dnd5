import { z } from "zod";
import { characterSchema } from "./characterSheet";

export const usersSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.date(),
  character_sheets: z.array(characterSchema),
});
