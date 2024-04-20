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

interface Attributes {
  strength: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
}

interface Equipment {
  item_name: string;
  description: string;
  is_equipped: boolean;
}

interface ProficiencyCheck {
  isProficient: boolean;
  value: number;
}

interface SavingThrows {
  strength: ProficiencyCheck;
  dexterity: ProficiencyCheck;
  constitution: ProficiencyCheck;
  intelligence: ProficiencyCheck;
  wisdom: ProficiencyCheck;
  charisma: ProficiencyCheck;
}

interface Skills {
  acrobatics: ProficiencyCheck;
  animal_handling: ProficiencyCheck;
  arcana: ProficiencyCheck;
  athletics: ProficiencyCheck;
  deception: ProficiencyCheck;
  history: ProficiencyCheck;
  insight: ProficiencyCheck;
  intimidation: ProficiencyCheck;
  investigation: ProficiencyCheck;
  medicine: ProficiencyCheck;
  nature: ProficiencyCheck;
  perception: ProficiencyCheck;
  performance: ProficiencyCheck;
  persuasion: ProficiencyCheck;
  religion: ProficiencyCheck;
  sleight_of_hand: ProficiencyCheck;
  stealth: ProficiencyCheck;
  survival: ProficiencyCheck;
}

interface CharacterStats {
  armor_class: number;
  initiative: number;
  speed: string;
  hitpoints: {
    maximum: number;
    current: number;
    temporary: number;
  };
  hitdice: {
    total: number;
    value: number;
  };
  death_saves: {
    successes: number;
    failures: number;
  };
}

interface Personality {
  traits: string;
  ideals: string;
  bonds: string;
  flaws: string;
}

interface Attacks {
  name: string;
  atk_bonus: string;
  damage_type: string;
}

interface OtherProficienciesLanguages {
  value: string;
}

interface FeaturesTraits {
  feature_traits: string;
  additional: string;
}

interface CharacterInfo {
  appearance?: string;
  features?: {
    age?: string;
    height?: string;
    weight?: string;
    eyes?: string;
    skin?: string;
    hair?: string;
  };
  allies_organizations: {
    name?: string;
    description?: string;
  }[];
  backstory?: string;
  treasure?: string[];
}

interface Spellcasting {
  class_name: string;
  status: {
    ability: string;
    dc: string;
    bonus: string;
  };
}

interface SpellData {
  slots_total: number;
  slots_expended: number;
  spells: {
    isPrepared: boolean;
    name: string;
  }[];
}

interface SpellList {
  cantrips: string[];
  first?: SpellData;
  second?: SpellData;
  third?: SpellData;
  fourth?: SpellData;
  fifth?: SpellData;
  sixth?: SpellData;
  seventh?: SpellData;
  eighth?: SpellData;
  ninth?: SpellData;
}

export interface ICharacter extends Document {
  playerDetails: PlayerDetails;
  attributes: Attributes;
  equipment?: Equipment[];
  saving_throws: SavingThrows;
  skills: Skills;
  character_stats: CharacterStats;
  personality: Personality;
  attacks: Attacks[];
  other_proficiencies_languages?: OtherProficienciesLanguages[];
  feature_traits?: FeaturesTraits[];
  character_info?: CharacterInfo;
  spellcasting?: Spellcasting;
  spell_list?: SpellList;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}
