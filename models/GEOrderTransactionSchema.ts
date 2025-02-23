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

import { CharacterSchema } from '../models/CharacterSchema';
import { CooldownSchema } from '../models/CooldownSchema';
import { GEOrderCreatedSchema } from '../models/GEOrderCreatedSchema';
import { HttpFile } from '../http/http';

export class GEOrderTransactionSchema {
    /**
    * Cooldown details.
    */
    'cooldown': CooldownSchema;
    /**
    * Order details.
    */
    'order': GEOrderCreatedSchema;
    /**
    * Character details.
    */
    'character': CharacterSchema;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cooldown",
            "baseName": "cooldown",
            "type": "CooldownSchema",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "GEOrderCreatedSchema",
            "format": ""
        },
        {
            "name": "character",
            "baseName": "character",
            "type": "CharacterSchema",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GEOrderTransactionSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
