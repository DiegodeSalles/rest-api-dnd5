// import { z } from "zod";
import mongoose from "mongoose";

interface PlayerDetails {
  char_player_name: string;
  char_name: string;
  char_class: string;
  char_level: number;
  char_background: string;
  char_race: string;
  char_alignment: string;
  char_xp: number;
}

const playerDetailsSchema = new mongoose.Schema(
  {
    char_player_name: { type: String, required: true },
    char_name: { type: String, required: true },
    char_class: { type: String, required: true },
    char_level: { type: Number, min: 1, required: true },
    char_background: { type: String, required: true },
    char_race: { type: String, required: true },
    char_alignment: { type: String, required: true },
    char_xp: { type: Number, min: 0, required: true },
  },
  { id: false }
);

const attributesSchema = new mongoose.Schema(
  {
    strength: { type: Number, min: 3, required: true },
    dexterity: { type: Number, min: 3, required: true },
    constitution: { type: Number, min: 3, required: true },
    intelligence: { type: Number, min: 3, required: true },
    wisdom: { type: Number, min: 3, required: true },
    charisma: { type: Number, min: 3, required: true },
  },
  { id: false }
);

const equipmentSchema = new mongoose.Schema(
  {
    item_name: { type: String, required: true },
    description: { type: String, required: true },
    is_equipped: { type: Boolean, default: false },
  },
  { id: false }
);

const characterDataSchema = new mongoose.Schema(
  {
    playerDetails: { type: playerDetailsSchema, required: true },
    attributes: { type: attributesSchema, required: true },
    equipment: [equipmentSchema],
  },
  { id: false }
);

interface ICharacter extends Document {
  playerDetails: any;
  attributes: any;
  equipment: any;
}

export const Character = mongoose.model<ICharacter>(
  "characters",
  characterDataSchema
);

// export const testeCharacter = mongoose.model("characters", character);

// export const savingThrowsSchema = new mongoose.Schema({
//   strength: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   dexterity: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   constitution: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   intelligence: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   wisdom: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   charisma: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
// });

// export const skillsSchema = new mongoose.Schema({
//   acrobatics: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   animal_handling: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   arcana: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   athletics: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   deception: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   history: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   insight: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   intimidation: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   investigation: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   medicine: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   nature: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   perception: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   performance: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   persuasion: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   religion: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   sleight_of_hand: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   stealth: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
//   survival: {
//     isProficient: { type: Boolean, default: false },
//     value: { type: Number },
//   },
// });

// export const characterStatsSchema = new mongoose.Schema({
//   armor_class: { type: Number, required: true },
//   initiative: { type: Number, required: true },
//   speed: { type: String, required: true },
//   hitpoints: {
//     maximum: { type: Number, min: 0, required: true },
//     current: { type: Number, required: true },
//     temporary: { type: Number, min: 0 },
//   },
//   hitdice: {
//     total: { type: Number, min: 0, default: 0 },
//     value: { type: Number, default: 0 },
//   },
//   death_saves: {
//     successes: { type: Number, min: 0, max: 3, default: 0 },
//     failures: { type: Number, min: 0, max: 3, default: 0 },
//   },
// });

// export const personalitySchema = z
//   .object({
//     traits: z.string().nullish(),
//     ideals: z.string().nullish(),
//     bonds: z.string().nullish(),
//     flaws: z.string().nullish(),
//   })
//   .nullish();

// export const attacksSchema = z
//   .array(
//     z.object({
//       name: z.string().nullish(),
//       atk_bonus: z.string().nullish(),
//       damage_type: z.string().nullish(),
//     })
//   )
//   .nullish();

// export const otherProfLanguagesSchema = z.array(z.string()).nullish();

// export const equipmentSchema = z
//   .array(
//     z.object({
//       item_name: z.string(),
//       isEquipped: z.boolean().default(false),
//       itemDescription: z.string(),
//     })
//   )
//   .nullish();

// export const featuresTraitsSchema = z
//   .array(
//     z.object({
//       features_traits: z.string().nullish(),
//       additional: z.string().nullish(),
//     })
//   )
//   .nullish();

// export const characterInfoSchema = z
//   .object({
//     appearance: z.string().nullish(),
//     features: z
//       .object({
//         age: z.string().nullish(),
//         height: z.string().nullish(),
//         weight: z.string().nullish(),
//         eyes: z.string().nullish(),
//         skin: z.string().nullish(),
//         hair: z.string().nullish(),
//       })
//       .nullish(),
//     allies_organizations: z
//       .array(
//         z.object({
//           name: z.string().nullish(),
//           description: z.string().nullish(),
//         })
//       )
//       .nullish(),
//     backstory: z.string().nullish(),
//     treasure: z.array(z.string()).nullish(),
//   })
//   .nullish();

// export const spellcastingSchema = z
//   .object({
//     class: z.string(),
//     status: z.object({
//       ability: z.string(),
//       dc: z.number(),
//       bonus: z.number(),
//     }),
//   })
//   .nullish();

// export const spellListSchema = z
//   .object({
//     cantrips: z.array(z.string()).nullish(),
//     first: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//     second: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//     third: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//     fourth: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//     fifth: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//     sixth: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//     seventh: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//     eighth: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//     ninth: z
//       .array(
//         z.object({
//           slots_total: z.number().min(0).nullish(),
//           slots_expended: z.number().nullish(),
//           spells: z
//             .array(
//               z.object({
//                 isPrepared: z.boolean().default(false),
//                 name: z.string(),
//               })
//             )
//             .nullish(),
//         })
//       )
//       .nullish(),
//   })
//   .nullish();

// export const characterSchema = z.object({
//   playerDetails: playerDetailsSchema,
//   attributes: attributesSchema,
//   saving_throws: savingThrowsSchema,
//   skills: skillsSchema,
//   stats: characterStatsSchema,
//   personality: personalitySchema,
//   attacks: attacksSchema,
//   otherProficiencies: otherProfLanguagesSchema,
//   equipment: equipmentSchema,
//   features_traits: featuresTraitsSchema,
//   info: characterInfoSchema,
//   spellcasting: spellcastingSchema,
//   spells: spellListSchema,
// });

// export const characterSheetSchema = z.object({
//   id: z.number(),
//   user_id: z.string().uuid(),
//   character_data: characterSchema,
//   createdAt: z.date().nullish(),
//   updatedAt: z.date().nullish(),
// });
