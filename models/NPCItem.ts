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

import { HttpFile } from '../http/http.ts';

export class NPCItem {
    /**
    * The code of the NPC. This is the NPC\'s unique identifier (ID).
    */
    'code': string;
    /**
    * Code of the NPC that sells/buys the item.
    */
    'npc': string;
    'buyPrice': number | null;
    'sellPrice': number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "npc",
            "baseName": "npc",
            "type": "string",
            "format": ""
        },
        {
            "name": "buyPrice",
            "baseName": "buy_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "sellPrice",
            "baseName": "sell_price",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NPCItem.attributeTypeMap;
    }

    public constructor() {
    }
}
