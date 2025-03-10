/**
 * Artifacts API
 *  Artifacts is an API-based MMO game where you can manage 5 characters to explore, fight, gather resources, craft items and much more.  Website: https://artifactsmmo.com/  Documentation: https://docs.artifactsmmo.com/  OpenAPI Spec: https://api.artifactsmmo.com/openapi.json 
 *
 * OpenAPI spec version: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CharacterSkin } from '../models/CharacterSkin.ts';
import { InventorySlot } from '../models/InventorySlot.ts';
import { HttpFile } from '../http/http.ts';

export class CharacterSchema {
    /**
    * Name of the character.
    */
    'name': string;
    /**
    * Account name.
    */
    'account': string;
    /**
    * Character skin code.
    */
    'skin': CharacterSkin;
    /**
    * Combat level.
    */
    'level': number;
    /**
    * The current xp level of the combat level.
    */
    'xp': number;
    /**
    * XP required to level up the character.
    */
    'maxXp': number;
    /**
    * The numbers of gold on this character.
    */
    'gold': number;
    /**
    * *Not available, on the roadmap. Character movement speed.
    */
    'speed': number;
    /**
    * Mining level.
    */
    'miningLevel': number;
    /**
    * The current xp level of the Mining skill.
    */
    'miningXp': number;
    /**
    * Mining XP required to level up the skill.
    */
    'miningMaxXp': number;
    /**
    * Woodcutting level.
    */
    'woodcuttingLevel': number;
    /**
    * The current xp level of the Woodcutting skill.
    */
    'woodcuttingXp': number;
    /**
    * Woodcutting XP required to level up the skill.
    */
    'woodcuttingMaxXp': number;
    /**
    * Fishing level.
    */
    'fishingLevel': number;
    /**
    * The current xp level of the Fishing skill.
    */
    'fishingXp': number;
    /**
    * Fishing XP required to level up the skill.
    */
    'fishingMaxXp': number;
    /**
    * Weaponcrafting level.
    */
    'weaponcraftingLevel': number;
    /**
    * The current xp level of the Weaponcrafting skill.
    */
    'weaponcraftingXp': number;
    /**
    * Weaponcrafting XP required to level up the skill.
    */
    'weaponcraftingMaxXp': number;
    /**
    * Gearcrafting level.
    */
    'gearcraftingLevel': number;
    /**
    * The current xp level of the Gearcrafting skill.
    */
    'gearcraftingXp': number;
    /**
    * Gearcrafting XP required to level up the skill.
    */
    'gearcraftingMaxXp': number;
    /**
    * Jewelrycrafting level.
    */
    'jewelrycraftingLevel': number;
    /**
    * The current xp level of the Jewelrycrafting skill.
    */
    'jewelrycraftingXp': number;
    /**
    * Jewelrycrafting XP required to level up the skill.
    */
    'jewelrycraftingMaxXp': number;
    /**
    * The current xp level of the Cooking skill.
    */
    'cookingLevel': number;
    /**
    * Cooking XP.
    */
    'cookingXp': number;
    /**
    * Cooking XP required to level up the skill.
    */
    'cookingMaxXp': number;
    /**
    * Alchemy level.
    */
    'alchemyLevel': number;
    /**
    * Alchemy XP.
    */
    'alchemyXp': number;
    /**
    * Alchemy XP required to level up the skill.
    */
    'alchemyMaxXp': number;
    /**
    * Character actual HP.
    */
    'hp': number;
    /**
    * Character max HP.
    */
    'maxHp': number;
    /**
    * *Increase speed attack (reduce fight cooldown)
    */
    'haste': number;
    /**
    * % Critical strike. Critical strikes adds 50% extra damage to an attack (1.5x).
    */
    'criticalStrike': number;
    /**
    * Wisdom increases the amount of XP gained from fights (1% extra per 10 wisdom).
    */
    'wisdom': number;
    /**
    * Prospecting increases the chances of getting better loot (1% extra per 10 PP).
    */
    'prospecting': number;
    /**
    * Fire attack.
    */
    'attackFire': number;
    /**
    * Earth attack.
    */
    'attackEarth': number;
    /**
    * Water attack.
    */
    'attackWater': number;
    /**
    * Air attack.
    */
    'attackAir': number;
    /**
    * % Damage. Damage increases your attack in all elements.
    */
    'dmg': number;
    /**
    * % Fire damage. Damage increases your fire attack.
    */
    'dmgFire': number;
    /**
    * % Earth damage. Damage increases your earth attack.
    */
    'dmgEarth': number;
    /**
    * % Water damage. Damage increases your water attack.
    */
    'dmgWater': number;
    /**
    * % Air damage. Damage increases your air attack.
    */
    'dmgAir': number;
    /**
    * % Fire resistance. Reduces fire attack.
    */
    'resFire': number;
    /**
    * % Earth resistance. Reduces earth attack.
    */
    'resEarth': number;
    /**
    * % Water resistance. Reduces water attack.
    */
    'resWater': number;
    /**
    * % Air resistance. Reduces air attack.
    */
    'resAir': number;
    /**
    * Character x coordinate.
    */
    'x': number;
    /**
    * Character y coordinate.
    */
    'y': number;
    /**
    * Cooldown in seconds.
    */
    'cooldown': number;
    /**
    * Datetime Cooldown expiration.
    */
    'cooldownExpiration'?: Date;
    /**
    * Weapon slot.
    */
    'weaponSlot': string;
    /**
    * Rune slot.
    */
    'runeSlot': string;
    /**
    * Shield slot.
    */
    'shieldSlot': string;
    /**
    * Helmet slot.
    */
    'helmetSlot': string;
    /**
    * Body armor slot.
    */
    'bodyArmorSlot': string;
    /**
    * Leg armor slot.
    */
    'legArmorSlot': string;
    /**
    * Boots slot.
    */
    'bootsSlot': string;
    /**
    * Ring 1 slot.
    */
    'ring1Slot': string;
    /**
    * Ring 2 slot.
    */
    'ring2Slot': string;
    /**
    * Amulet slot.
    */
    'amuletSlot': string;
    /**
    * Artifact 1 slot.
    */
    'artifact1Slot': string;
    /**
    * Artifact 2 slot.
    */
    'artifact2Slot': string;
    /**
    * Artifact 3 slot.
    */
    'artifact3Slot': string;
    /**
    * Utility 1 slot.
    */
    'utility1Slot': string;
    /**
    * Utility 1 quantity.
    */
    'utility1SlotQuantity': number;
    /**
    * Utility 2 slot.
    */
    'utility2Slot': string;
    /**
    * Utility 2 quantity.
    */
    'utility2SlotQuantity': number;
    /**
    * Bag slot.
    */
    'bagSlot': string;
    /**
    * Task in progress.
    */
    'task': string;
    /**
    * Task type.
    */
    'taskType': string;
    /**
    * Task progression.
    */
    'taskProgress': number;
    /**
    * Task total objective.
    */
    'taskTotal': number;
    /**
    * Inventory max items.
    */
    'inventoryMaxItems': number;
    /**
    * List of inventory slots.
    */
    'inventory'?: Array<InventorySlot>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "skin",
            "baseName": "skin",
            "type": "CharacterSkin",
            "format": ""
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "number",
            "format": ""
        },
        {
            "name": "xp",
            "baseName": "xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxXp",
            "baseName": "max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "gold",
            "baseName": "gold",
            "type": "number",
            "format": ""
        },
        {
            "name": "speed",
            "baseName": "speed",
            "type": "number",
            "format": ""
        },
        {
            "name": "miningLevel",
            "baseName": "mining_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "miningXp",
            "baseName": "mining_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "miningMaxXp",
            "baseName": "mining_max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "woodcuttingLevel",
            "baseName": "woodcutting_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "woodcuttingXp",
            "baseName": "woodcutting_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "woodcuttingMaxXp",
            "baseName": "woodcutting_max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "fishingLevel",
            "baseName": "fishing_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "fishingXp",
            "baseName": "fishing_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "fishingMaxXp",
            "baseName": "fishing_max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "weaponcraftingLevel",
            "baseName": "weaponcrafting_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "weaponcraftingXp",
            "baseName": "weaponcrafting_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "weaponcraftingMaxXp",
            "baseName": "weaponcrafting_max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "gearcraftingLevel",
            "baseName": "gearcrafting_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "gearcraftingXp",
            "baseName": "gearcrafting_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "gearcraftingMaxXp",
            "baseName": "gearcrafting_max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "jewelrycraftingLevel",
            "baseName": "jewelrycrafting_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "jewelrycraftingXp",
            "baseName": "jewelrycrafting_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "jewelrycraftingMaxXp",
            "baseName": "jewelrycrafting_max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "cookingLevel",
            "baseName": "cooking_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "cookingXp",
            "baseName": "cooking_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "cookingMaxXp",
            "baseName": "cooking_max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "alchemyLevel",
            "baseName": "alchemy_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "alchemyXp",
            "baseName": "alchemy_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "alchemyMaxXp",
            "baseName": "alchemy_max_xp",
            "type": "number",
            "format": ""
        },
        {
            "name": "hp",
            "baseName": "hp",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxHp",
            "baseName": "max_hp",
            "type": "number",
            "format": ""
        },
        {
            "name": "haste",
            "baseName": "haste",
            "type": "number",
            "format": ""
        },
        {
            "name": "criticalStrike",
            "baseName": "critical_strike",
            "type": "number",
            "format": ""
        },
        {
            "name": "wisdom",
            "baseName": "wisdom",
            "type": "number",
            "format": ""
        },
        {
            "name": "prospecting",
            "baseName": "prospecting",
            "type": "number",
            "format": ""
        },
        {
            "name": "attackFire",
            "baseName": "attack_fire",
            "type": "number",
            "format": ""
        },
        {
            "name": "attackEarth",
            "baseName": "attack_earth",
            "type": "number",
            "format": ""
        },
        {
            "name": "attackWater",
            "baseName": "attack_water",
            "type": "number",
            "format": ""
        },
        {
            "name": "attackAir",
            "baseName": "attack_air",
            "type": "number",
            "format": ""
        },
        {
            "name": "dmg",
            "baseName": "dmg",
            "type": "number",
            "format": ""
        },
        {
            "name": "dmgFire",
            "baseName": "dmg_fire",
            "type": "number",
            "format": ""
        },
        {
            "name": "dmgEarth",
            "baseName": "dmg_earth",
            "type": "number",
            "format": ""
        },
        {
            "name": "dmgWater",
            "baseName": "dmg_water",
            "type": "number",
            "format": ""
        },
        {
            "name": "dmgAir",
            "baseName": "dmg_air",
            "type": "number",
            "format": ""
        },
        {
            "name": "resFire",
            "baseName": "res_fire",
            "type": "number",
            "format": ""
        },
        {
            "name": "resEarth",
            "baseName": "res_earth",
            "type": "number",
            "format": ""
        },
        {
            "name": "resWater",
            "baseName": "res_water",
            "type": "number",
            "format": ""
        },
        {
            "name": "resAir",
            "baseName": "res_air",
            "type": "number",
            "format": ""
        },
        {
            "name": "x",
            "baseName": "x",
            "type": "number",
            "format": ""
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number",
            "format": ""
        },
        {
            "name": "cooldown",
            "baseName": "cooldown",
            "type": "number",
            "format": ""
        },
        {
            "name": "cooldownExpiration",
            "baseName": "cooldown_expiration",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "weaponSlot",
            "baseName": "weapon_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "runeSlot",
            "baseName": "rune_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "shieldSlot",
            "baseName": "shield_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "helmetSlot",
            "baseName": "helmet_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "bodyArmorSlot",
            "baseName": "body_armor_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "legArmorSlot",
            "baseName": "leg_armor_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "bootsSlot",
            "baseName": "boots_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "ring1Slot",
            "baseName": "ring1_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "ring2Slot",
            "baseName": "ring2_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "amuletSlot",
            "baseName": "amulet_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "artifact1Slot",
            "baseName": "artifact1_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "artifact2Slot",
            "baseName": "artifact2_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "artifact3Slot",
            "baseName": "artifact3_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "utility1Slot",
            "baseName": "utility1_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "utility1SlotQuantity",
            "baseName": "utility1_slot_quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "utility2Slot",
            "baseName": "utility2_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "utility2SlotQuantity",
            "baseName": "utility2_slot_quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "bagSlot",
            "baseName": "bag_slot",
            "type": "string",
            "format": ""
        },
        {
            "name": "task",
            "baseName": "task",
            "type": "string",
            "format": ""
        },
        {
            "name": "taskType",
            "baseName": "task_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "taskProgress",
            "baseName": "task_progress",
            "type": "number",
            "format": ""
        },
        {
            "name": "taskTotal",
            "baseName": "task_total",
            "type": "number",
            "format": ""
        },
        {
            "name": "inventoryMaxItems",
            "baseName": "inventory_max_items",
            "type": "number",
            "format": ""
        },
        {
            "name": "inventory",
            "baseName": "inventory",
            "type": "Array<InventorySlot>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CharacterSchema.attributeTypeMap;
    }

    public constructor() {
    }
}


