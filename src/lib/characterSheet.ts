import { z } from "zod";

export const playerDetailsSchema = z.object({
  char_name: z.string(),
  char_class: z.string(),
  char_level: z.number().min(1).max(20),
  char_background: z.string(),
  char_player_name: z.string(),
  char_race: z.string(),
  char_alignment: z.string(),
  char_xp: z.number().min(0),
});

export const attributesSchema = z.object({
  strength: z.number().min(3),
  dexterity: z.number().min(3),
  constitution: z.number().min(3),
  intelligence: z.number().min(3),
  wisdom: z.number().min(3),
  charisma: z.number().min(3),
  perception: z.number(),
});

export const savingThrowsSchema = z.object({
  strength: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  dexterity: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  constitution: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  intelligence: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  wisdom: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  charisma: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
});

export const skillsSchema = z.object({
  acrobatics: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  animal_handling: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  arcana: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  athletics: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  deception: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  history: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  insight: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  intimidation: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  investigation: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  medicine: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  nature: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  perception: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  performance: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  persuasion: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  religion: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  sleight_of_hand: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  stealth: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
  survival: z.object({
    isProficient: z.boolean().default(false),
    value: z.number(),
  }),
});

export const characterStatsSchema = z.object({
  armor_class: z.number(),
  initiative: z.number(),
  speed: z.string(),
  hitpoints: z.object({
    maximum: z.number(),
    current: z.number(),
    temporary: z.number().nullish(),
  }),
  hitdice: z.object({
    total: z.number().default(1),
    value: z.number().default(1),
  }),
  death_saves: z.object({
    successes: z.number().default(0),
    failures: z.number().default(0),
  }),
});

export const personalitySchema = z
  .object({
    traits: z.string().nullish(),
    ideals: z.string().nullish(),
    bonds: z.string().nullish(),
    flaws: z.string().nullish(),
  })
  .nullish();

export const attacksSchema = z
  .array(
    z.object({
      name: z.string().nullish(),
      atk_bonus: z.string().nullish(),
      damage_type: z.string().nullish(),
    })
  )
  .nullish();

export const otherProfLanguagesSchema = z.array(z.string()).nullish();

export const equipmentSchema = z
  .array(
    z.object({
      item_name: z.string(),
      isEquipped: z.boolean().default(false),
      itemDescription: z.string(),
    })
  )
  .nullish();

export const featuresTraitsSchema = z
  .array(
    z.object({
      features_traits: z.string().nullish(),
      additional: z.string().nullish(),
    })
  )
  .nullish();

export const characterInfoSchema = z
  .object({
    appearance: z.string().nullish(),
    features: z
      .object({
        age: z.string().nullish(),
        height: z.string().nullish(),
        weight: z.string().nullish(),
        eyes: z.string().nullish(),
        skin: z.string().nullish(),
        hair: z.string().nullish(),
      })
      .nullish(),
    allies_organizations: z
      .array(
        z.object({
          name: z.string().nullish(),
          description: z.string().nullish(),
        })
      )
      .nullish(),
    backstory: z.string().nullish(),
    treasure: z.array(z.string()).nullish(),
  })
  .nullish();

export const spellcastingSchema = z
  .object({
    class: z.string(),
    status: z.object({
      ability: z.string(),
      dc: z.number(),
      bonus: z.number(),
    }),
  })
  .nullish();

export const spellListSchema = z
  .object({
    cantrips: z.array(z.string()).nullish(),
    first: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
    second: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
    third: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
    fourth: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
    fifth: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
    sixth: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
    seventh: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
    eighth: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
    ninth: z
      .array(
        z.object({
          slots_total: z.number().min(0).nullish(),
          slots_expended: z.number().nullish(),
          spells: z
            .array(
              z.object({
                isPrepared: z.boolean().default(false),
                name: z.string(),
              })
            )
            .nullish(),
        })
      )
      .nullish(),
  })
  .nullish();

export const characterSchema = z.object({
  playerDetails: playerDetailsSchema,
  attributes: attributesSchema,
  saving_throws: savingThrowsSchema,
  skills: skillsSchema,
  stats: characterStatsSchema,
  personality: personalitySchema,
  attacks: attacksSchema,
  otherProficiencies: otherProfLanguagesSchema,
  equipment: equipmentSchema,
  features_traits: featuresTraitsSchema,
  info: characterInfoSchema,
  spellcasting: spellcastingSchema,
  spells: spellListSchema,
});

export const characterSheetSchema = z.object({
  id: z.number(),
  user_id: z.string().uuid(),
  character_data: characterSchema,
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
});
