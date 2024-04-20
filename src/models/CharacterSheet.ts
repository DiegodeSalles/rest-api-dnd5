import { ICharacter } from "../interfaces/characterInterfaces";
import mongoose from "mongoose";

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

const isProficientSubSchema = new mongoose.Schema({
  isProficient: { type: Boolean, default: false },
  value: { type: Number },
});

const savingThrowsSchema = new mongoose.Schema({
  strength: isProficientSubSchema,
  dexterity: isProficientSubSchema,
  constitution: isProficientSubSchema,
  intelligence: isProficientSubSchema,
  wisdom: isProficientSubSchema,
  charisma: isProficientSubSchema,
});

const skillsSchema = new mongoose.Schema({
  acrobatics: isProficientSubSchema,
  animal_handling: isProficientSubSchema,
  arcana: isProficientSubSchema,
  athletics: isProficientSubSchema,
  deception: isProficientSubSchema,
  history: isProficientSubSchema,
  insight: isProficientSubSchema,
  intimidation: isProficientSubSchema,
  investigation: isProficientSubSchema,
  medicine: isProficientSubSchema,
  nature: isProficientSubSchema,
  perception: isProficientSubSchema,
  performance: isProficientSubSchema,
  persuasion: isProficientSubSchema,
  religion: isProficientSubSchema,
  sleight_of_hand: isProficientSubSchema,
  stealth: isProficientSubSchema,
  survival: isProficientSubSchema,
});

const characterStatsSchema = new mongoose.Schema({
  armor_class: { type: Number, required: true },
  initiative: { type: Number, required: true },
  speed: { type: String, required: true },
  hitpoints: {
    maximum: { type: Number, min: 0, required: true },
    current: { type: Number, required: true },
    temporary: { type: Number, min: 0 },
  },
  hitdice: {
    total: { type: Number, min: 0, default: 0 },
    value: { type: Number, default: 0 },
  },
  death_saves: {
    successes: { type: Number, min: 0, max: 3, default: 0 },
    failures: { type: Number, min: 0, max: 3, default: 0 },
  },
});

const personalitySchema = new mongoose.Schema({
  traits: { type: String, required: false },
  ideals: { type: String, required: false },
  bonds: { type: String, required: false },
  flaws: { type: String, required: false },
});

const attacksSchema = new mongoose.Schema({
  name: { type: String },
  atk_bonus: { type: String },
  damage_type: { type: String },
});

const otherProfLanguagesSchema = new mongoose.Schema({
  value: { type: String, required: false },
});

const featuresTraitsSchema = new mongoose.Schema({
  feature_traits: { type: String },
  additional: { type: String },
});

const alliesOrganizationsSubSchema = new mongoose.Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
});

const characterInfo = new mongoose.Schema({
  appearance: { type: String, required: false },
  features: {
    appearance: { type: String, required: false },
    height: { type: String, required: false },
    weight: { type: String, required: false },
    eyes: { type: String, required: false },
    skin: { type: String, required: false },
    hair: { type: String, required: false },
  },
  allies_organizations: [alliesOrganizationsSubSchema],
  backstory: { type: String, required: false },
  treasure: [{ type: String, required: false }],
});

const spellcastingSchema = new mongoose.Schema({
  class_name: { type: String },
  status: {
    ability: { type: String },
    dc: { type: String },
    bonus: { type: String },
  },
});

const spellDataSubSchema = new mongoose.Schema({
  slots_total: { type: Number },
  slots_expended: { type: Number },
  spells: [
    {
      isPrepared: { type: Boolean, default: false },
      name: { type: String },
    },
  ],
});

const spellListSchema = new mongoose.Schema({
  cantrips: [{ type: String }],
  first: { type: spellDataSubSchema, required: false },
  second: { type: spellDataSubSchema, required: false },
  third: { type: spellDataSubSchema, required: false },
  fourth: { type: spellDataSubSchema, required: false },
  fifth: { type: spellDataSubSchema, required: false },
  sixth: { type: spellDataSubSchema, required: false },
  seventh: { type: spellDataSubSchema, required: false },
  eighth: { type: spellDataSubSchema, required: false },
  ninth: { type: spellDataSubSchema, required: false },
});

const characterDataSchema = new mongoose.Schema(
  {
    playerDetails: { type: playerDetailsSchema, required: true },
    attributes: { type: attributesSchema, required: true },
    equipment: [equipmentSchema],
    saving_throws: { type: savingThrowsSchema, required: true },
    skills: { type: skillsSchema, required: true },
    character_stats: { type: characterStatsSchema, required: true },
    personality: { type: personalitySchema, required: true },
    attacks: { type: [attacksSchema], required: true },
    other_proficiencies_languages: [otherProfLanguagesSchema],
    features_traits: [featuresTraitsSchema],
    character_info: characterInfo,
    spellcasting: spellcastingSchema,
    spell_list: spellListSchema,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { id: false }
);

export const Character = mongoose.model<ICharacter>(
  "characters",
  characterDataSchema
);
