import { z } from "zod";

export const characterSchema = z.object({
  charName: z.string(),
  race: z.string(),
  character_class: z.string(),
  strength: z.number(),
  dexterity: z.number(),
  constitution: z.number(),
  intelligence: z.number(),
  wisdom: z.number(),
  charisma: z.number(),
  health: z.number(),
});
